import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ROOT_KEYS,
  GUITAR_SCALES,
  GUITAR_TUNINGS,
  FRET_MARKERS,
  buildFretboardMatrix,
  ScaleDefinition,
  GuitarTuning,
  FretNote
} from './GuitarScalesData';
import { soundFx, GuitarTonePreset } from '../../utils/sound';
import './GuitarScales.css';

export interface GuitarScalesProps {
  /** Initial Root Key (e.g. 'C', 'A', 'E') */
  initialRootKey?: string;
  /** Initial Scale ID (e.g. 'pentatonic-minor', 'major', 'blues') */
  initialScaleId?: string;
  /** Initial Tuning ID (e.g. 'standard', 'drop-d') */
  initialTuningId?: string;
  /** Number of frets to display (12, 15, 21, 24) */
  initialFrets?: number;
  /** Display label inside note node: 'notes' | 'intervals' | 'both' */
  displayMode?: 'notes' | 'intervals' | 'both';
  /** Initial guitar sound tone preset */
  tonePreset?: GuitarTonePreset;
  /** Sound enabled by default */
  soundEnabled?: boolean;
  /** Initial playback volume (0.0 to 1.0) */
  volume?: number;
  /** Initial playback tempo in BPM */
  bpm?: number;
  /** Callback fired when a fret/note is clicked or played */
  onNotePlay?: (noteName: string, midiNote: number) => void;
  /** Callback fired when scale or root key changes */
  onScaleChange?: (scaleId: string, rootKey: string) => void;
}

export const GuitarScales: React.FC<GuitarScalesProps> = ({
  initialRootKey = 'A',
  initialScaleId = 'pentatonic-minor',
  initialTuningId = 'standard',
  initialFrets = 15,
  displayMode: propDisplayMode = 'notes',
  tonePreset: propTonePreset = 'acoustic',
  soundEnabled = true,
  volume: propVolume = 0.5,
  bpm: propBpm = 120,
  onNotePlay,
  onScaleChange,
}) => {
  const [rootKey, setRootKey] = useState<string>(initialRootKey);
  const [scaleId, setScaleId] = useState<string>(initialScaleId);
  const [tuningId, setTuningId] = useState<string>(initialTuningId);
  const [maxFrets, setMaxFrets] = useState<number>(initialFrets);
  const [displayMode, setDisplayMode] = useState<'notes' | 'intervals' | 'both'>(propDisplayMode);
  const [tonePreset, setTonePreset] = useState<GuitarTonePreset>(propTonePreset);
  const [hoverSoundEnabled, setHoverSoundEnabled] = useState<boolean>(false);
  const [cagedPosition, setCagedPosition] = useState<number>(0); // 0 = Full Fretboard, 1..5 = Positions

  // Audio state
  const [audioActive, setAudioActive] = useState<boolean>(soundEnabled);
  const [vol, setVol] = useState<number>(propVolume);
  const [bpm, setBpm] = useState<number>(propBpm);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  // Currently active played note key for visual feedback ("stringIdx-fretNum")
  const [activeNoteKey, setActiveNoteKey] = useState<string | null>(null);
  const [vibratingStringIndex, setVibratingStringIndex] = useState<number | null>(null);

  const playbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize soundFx audio settings
  useEffect(() => {
    soundFx.setEnabled(audioActive);
    soundFx.setVolume(vol);
  }, [audioActive, vol]);

  // Global user interaction listener to ensure Web Audio context is unlocked on click
  const unlockAudio = useCallback(() => {
    soundFx.ensureAudioUnlocked();
  }, []);

  const activeScale: ScaleDefinition =
    GUITAR_SCALES.find((s) => s.id === scaleId) || GUITAR_SCALES[0];

  const activeTuning: GuitarTuning =
    GUITAR_TUNINGS.find((t) => t.id === tuningId) || GUITAR_TUNINGS[0];

  const fretboardMatrix = buildFretboardMatrix(activeTuning, rootKey, activeScale, maxFrets);

  // Filter notes by CAGED Position Box (Position 1: frets 0-3, Pos 2: 3-6, Pos 3: 5-8, Pos 4: 7-10, Pos 5: 9-12)
  const isFretInPosition = (fretNum: number): boolean => {
    if (cagedPosition === 0) return true;
    if (fretNum === 0) return true; // Open string always visible
    const ranges: { [key: number]: [number, number] } = {
      1: [1, 4],
      2: [3, 7],
      3: [5, 9],
      4: [7, 11],
      5: [9, 13],
    };
    const range = ranges[cagedPosition] || [0, 24];
    return fretNum >= range[0] && fretNum <= range[1];
  };

  // Play a single fret note with selected Tone Preset + string vibrate animation
  const playFretNote = useCallback(
    (note: FretNote) => {
      soundFx.ensureAudioUnlocked();
      soundFx.playGuitarNote(note.midiNote, 2.0, note.stringIndex, tonePreset);
      
      const key = `${note.stringIndex}-${note.fretNumber}`;
      setActiveNoteKey(key);
      setVibratingStringIndex(note.stringIndex);

      setTimeout(() => {
        setActiveNoteKey((prev) => (prev === key ? null : prev));
      }, 400);

      setTimeout(() => {
        setVibratingStringIndex((prev) => (prev === note.stringIndex ? null : prev));
      }, 300);

      if (onNotePlay) {
        onNotePlay(note.noteName, note.midiNote);
      }
    },
    [tonePreset, onNotePlay]
  );

  // Handle Root Key Change
  const handleRootChange = (newRoot: string) => {
    setRootKey(newRoot);
    soundFx.playClick();
    if (onScaleChange) onScaleChange(scaleId, newRoot);
  };

  // Handle Scale Change
  const handleScaleChange = (newScaleId: string) => {
    setScaleId(newScaleId);
    soundFx.playClick();
    if (onScaleChange) onScaleChange(newScaleId, rootKey);
  };

  // Stop automated scale playback
  const stopPlayback = useCallback(() => {
    if (playbackTimerRef.current) {
      clearInterval(playbackTimerRef.current);
      playbackTimerRef.current = null;
    }
    setIsPlaying(false);
    setActiveNoteKey(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopPlayback();
  }, [stopPlayback]);

  // Automated scale playback (Ascending, Descending, Strum)
  const playScaleSequence = (direction: 'asc' | 'desc' | 'arpeggio' | 'strum') => {
    stopPlayback();
    soundFx.ensureAudioUnlocked();

    // Flatten fretboard notes that belong to the scale in pitch order
    const scaleNotes: FretNote[] = [];
    fretboardMatrix.forEach((stringNotes) => {
      stringNotes.forEach((n) => {
        if (n.isInScale && isFretInPosition(n.fretNumber) && n.fretNumber <= 15) {
          scaleNotes.push(n);
        }
      });
    });

    // Sort by ascending MIDI note number
    scaleNotes.sort((a, b) => a.midiNote - b.midiNote);

    // Filter unique pitch notes for clean scale playing
    const uniqueNotes: FretNote[] = [];
    const seenMidi = new Set<number>();
    scaleNotes.forEach((n) => {
      if (!seenMidi.has(n.midiNote)) {
        seenMidi.add(n.midiNote);
        uniqueNotes.push(n);
      }
    });

    if (uniqueNotes.length === 0) return;

    if (direction === 'strum') {
      const rootNotes = uniqueNotes.filter((n) => n.isRoot).slice(0, 5);
      rootNotes.forEach((n, idx) => {
        setTimeout(() => {
          playFretNote(n);
        }, idx * 45);
      });
      return;
    }

    const sequence = direction === 'desc' ? [...uniqueNotes].reverse() : uniqueNotes;
    let idx = 0;
    setIsPlaying(true);

    const intervalMs = (60 / bpm) * 1000 * 0.75; // 8th note rhythm at BPM

    playbackTimerRef.current = setInterval(() => {
      if (idx >= sequence.length) {
        stopPlayback();
        return;
      }
      playFretNote(sequence[idx]);
      idx++;
    }, intervalMs);
  };

  // Render Note Node Content (Note Name vs Interval Degree)
  const renderNoteLabel = (note: FretNote) => {
    if (displayMode === 'intervals') {
      return note.degreeName || note.noteName;
    }
    if (displayMode === 'both') {
      return `${note.noteName}`;
    }
    return note.noteName;
  };

  return (
    <div className="gs-container" onMouseDown={unlockAudio} onTouchStart={unlockAudio}>
      {/* Header Bar */}
      <div className="gs-header">
        <div className="gs-title-group">
          <div className="gs-guitar-icon">🎸</div>
          <div>
            <h2 className="gs-title">Guitar Scales Sound Engine</h2>
            <div className="gs-subtitle">Interactive Fretboard • Multi-Tone Synth • All Scales</div>
          </div>
        </div>

        {/* Audio Status Switch */}
        <div
          className="gs-audio-status"
          onClick={() => {
            const nextState = !audioActive;
            setAudioActive(nextState);
            if (nextState) soundFx.ensureAudioUnlocked();
          }}
          title="Click to toggle audio sound engine"
        >
          <div className="gs-audio-dot" style={{ backgroundColor: audioActive ? '#10b981' : '#ef4444' }} />
          <span>{audioActive ? 'Sound Always Enabled (OK)' : 'Sound Muted'}</span>
        </div>
      </div>

      {/* Controls Card */}
      <div className="gs-controls-card">
        <div className="gs-controls-row">
          {/* Root Key Selector */}
          <div className="gs-control-group" style={{ gridColumn: 'span 2' }}>
            <label className="gs-control-label">Root Key</label>
            <div className="gs-root-selector">
              {ROOT_KEYS.map((rk) => (
                <button
                  key={rk.id}
                  className={`gs-root-pill ${rootKey === rk.id ? 'active' : ''}`}
                  onClick={() => handleRootChange(rk.id)}
                >
                  {rk.name}
                </button>
              ))}
            </div>
          </div>

          {/* Scale Selector */}
          <div className="gs-control-group">
            <label className="gs-control-label">Scale / Mode</label>
            <select
              className="gs-select"
              value={scaleId}
              onChange={(e) => handleScaleChange(e.target.value)}
            >
              {GUITAR_SCALES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Guitar Tone Sound Preset */}
          <div className="gs-control-group">
            <label className="gs-control-label">Guitar Tone</label>
            <select
              className="gs-select"
              value={tonePreset}
              onChange={(e) => setTonePreset(e.target.value as GuitarTonePreset)}
            >
              <option value="acoustic">🪵 Acoustic Guitar</option>
              <option value="electric">⚡ Electric Clean Chime</option>
              <option value="overdrive">🎸 Overdrive Lead Rock</option>
              <option value="synth">🎹 Synthwave Lead</option>
            </select>
          </div>

          {/* Tuning Selector */}
          <div className="gs-control-group">
            <label className="gs-control-label">Tuning</label>
            <select
              className="gs-select"
              value={tuningId}
              onChange={(e) => setTuningId(e.target.value)}
            >
              {GUITAR_TUNINGS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* CAGED Position Filter */}
          <div className="gs-control-group">
            <label className="gs-control-label">Position Box</label>
            <select
              className="gs-select"
              value={cagedPosition}
              onChange={(e) => setCagedPosition(Number(e.target.value))}
            >
              <option value={0}>Full Fretboard</option>
              <option value={1}>Position 1 (Nut / Box 1)</option>
              <option value={2}>Position 2 (Frets 3–7)</option>
              <option value={3}>Position 3 (Frets 5–9)</option>
              <option value={4}>Position 4 (Frets 7–11)</option>
              <option value={5}>Position 5 (Frets 9–13)</option>
            </select>
          </div>

          {/* Display Mode */}
          <div className="gs-control-group">
            <label className="gs-control-label">Display Mode</label>
            <select
              className="gs-select"
              value={displayMode}
              onChange={(e) => setDisplayMode(e.target.value as any)}
            >
              <option value="notes">Note Names (C, D, E...)</option>
              <option value="intervals">Interval Degrees (1, ♭3, 5...)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Playback Controls & Volume Bar */}
      <div className="gs-playback-bar">
        <div className="gs-btn-group">
          {!isPlaying ? (
            <>
              <button className="gs-btn gs-btn-primary" onClick={() => playScaleSequence('asc')}>
                ▶ Play Scale Ascending
              </button>
              <button className="gs-btn gs-btn-secondary" onClick={() => playScaleSequence('desc')}>
                ▼ Descending
              </button>
              <button className="gs-btn gs-btn-secondary" onClick={() => playScaleSequence('strum')}>
                🎸 Strum Root Chord
              </button>
            </>
          ) : (
            <button className="gs-btn gs-btn-danger" onClick={stopPlayback}>
              ⏹ Stop Playback
            </button>
          )}
        </div>

        <div className="gs-audio-controls">
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={hoverSoundEnabled}
              onChange={(e) => setHoverSoundEnabled(e.target.checked)}
            />
            Pluck on Hover
          </label>

          <div className="gs-slider-container">
            <span>BPM: {bpm}</span>
            <input
              type="range"
              min={60}
              max={240}
              step={5}
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="gs-slider"
            />
          </div>

          <div className="gs-slider-container">
            <span>Vol: {Math.round(vol * 100)}%</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={vol}
              onChange={(e) => setVol(Number(e.target.value))}
              className="gs-slider"
            />
          </div>
        </div>
      </div>

      {/* Interactive Fretboard Visualizer */}
      <div className="gs-fretboard-frame">
        {/* Fret Numbers Header */}
        <div className="gs-fret-numbers">
          {Array.from({ length: maxFrets + 1 }).map((_, fIndex) => {
            const isMarker = FRET_MARKERS.includes(fIndex);
            const inPos = isFretInPosition(fIndex);
            return (
              <div
                key={fIndex}
                className={`gs-fret-num-cell ${isMarker ? 'marker' : ''}`}
                style={{ opacity: inPos ? 1 : 0.35 }}
              >
                {fIndex === 0 ? 'OPEN' : fIndex}
              </div>
            );
          })}
        </div>

        {/* Fretboard Grid */}
        <div className="gs-fretboard">
          {/* Fret Marker Inlay Dots Background */}
          <div className="gs-fret-dot-container">
            {Array.from({ length: maxFrets + 1 }).map((_, fIndex) => {
              const isMarker = FRET_MARKERS.includes(fIndex);
              const isDoubleDot = fIndex === 12 || fIndex === 24;
              return (
                <div key={fIndex} className="gs-fret-dot-col">
                  {isMarker && (
                    <div
                      className="gs-inlay-dot"
                      style={isDoubleDot ? { boxShadow: '0 -14px 0 #fff, 0 14px 0 #fff' } : {}}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* 6 Guitar Strings (String 1 Top High E to String 6 Bottom Low E) */}
          {fretboardMatrix.map((stringNotes, stringIdx) => {
            const stringOpenNote = activeTuning.stringNotes[stringIdx];
            const openStringNoteObj = stringNotes[0];
            const isVibrating = vibratingStringIndex === stringIdx;

            return (
              <div key={stringIdx} className="gs-string-row">
                {/* Tuning Head Nut - Clicking string head plucks open string note! */}
                <div
                  className="gs-string-head"
                  onClick={() => playFretNote(openStringNoteObj)}
                  title={`Click to pluck String ${stringIdx + 1} (${stringOpenNote})`}
                  style={{ cursor: 'pointer' }}
                >
                  {stringOpenNote.replace(/[0-9]/g, '')}
                </div>

                {/* Wire line overlay with vibration animation */}
                <div
                  className={`gs-string-wire str-${stringIdx} ${isVibrating ? 'vibrating' : ''}`}
                />

                {/* Fret Cells */}
                {stringNotes.map((note) => {
                  const nodeKey = `${stringIdx}-${note.fretNumber}`;
                  const isActivePlaying = activeNoteKey === nodeKey;
                  const inPos = isFretInPosition(note.fretNumber);

                  return (
                    <div
                      key={note.fretNumber}
                      className={`gs-fret-cell ${note.fretNumber === 0 ? 'open-fret' : ''}`}
                      onClick={() => playFretNote(note)}
                      onMouseEnter={() => {
                        if (hoverSoundEnabled && note.isInScale) {
                          playFretNote(note);
                        }
                      }}
                      style={{ opacity: inPos ? 1 : 0.3 }}
                      title={`String ${stringIdx + 1}, Fret ${note.fretNumber}: ${note.noteName}${note.octave} (${Math.round(note.frequency)} Hz)${note.degreeName ? ` - ${note.degreeName}` : ''}`}
                    >
                      {/* Show note node if note is in scale OR if note is currently played */}
                      {(note.isInScale || isActivePlaying) && (
                        <div
                          className={`gs-note-node ${
                            note.isRoot ? 'root-note' : 'scale-note'
                          } ${isActivePlaying ? 'active-playing' : ''}`}
                        >
                          {renderNoteLabel(note)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Scale Information Footer */}
      <div className="gs-info-card">
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#fbbf24' }}>
            {rootKey} {activeScale.name}
          </h4>
          <div className="gs-info-desc">{activeScale.description}</div>
        </div>

        <div className="gs-formula-badge">
          {activeScale.degrees.map((deg, i) => (
            <span key={i} className={`gs-deg-tag ${deg === '1' ? 'root' : ''}`}>
              {deg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
