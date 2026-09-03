import React, { useState, useEffect, useCallback } from 'react';
import { soundFx } from '../../utils/sound';
import './PianoKeyboard.css';

export interface PianoKey {
  note: string;
  octave: number;
  midi: number;
  isBlack: boolean;
  leftPercent?: number;
  shortcutKey?: string;
}

export interface PianoKeyboardProps {
  /** Initial volume level (0.0 - 1.0) */
  volume?: number;
  /** Highlight root note name (e.g. 'C', 'A') */
  highlightRoot?: string;
  /** Callback on key play */
  onKeyPlay?: (note: string, midi: number) => void;
}

const PIANO_KEYS_DATA: PianoKey[] = [
  // Octave 3
  { note: 'C', octave: 3, midi: 48, isBlack: false, shortcutKey: 'A' },
  { note: 'C#', octave: 3, midi: 49, isBlack: true, leftPercent: 5.5, shortcutKey: 'W' },
  { note: 'D', octave: 3, midi: 50, isBlack: false, shortcutKey: 'S' },
  { note: 'D#', octave: 3, midi: 51, isBlack: true, leftPercent: 12.8, shortcutKey: 'E' },
  { note: 'E', octave: 3, midi: 52, isBlack: false, shortcutKey: 'D' },
  { note: 'F', octave: 3, midi: 53, isBlack: false, shortcutKey: 'F' },
  { note: 'F#', octave: 3, midi: 54, isBlack: true, leftPercent: 27.2, shortcutKey: 'T' },
  { note: 'G', octave: 3, midi: 55, isBlack: false, shortcutKey: 'G' },
  { note: 'G#', octave: 3, midi: 56, isBlack: true, leftPercent: 34.5, shortcutKey: 'Y' },
  { note: 'A', octave: 3, midi: 57, isBlack: false, shortcutKey: 'H' },
  { note: 'A#', octave: 3, midi: 58, isBlack: true, leftPercent: 41.8, shortcutKey: 'U' },
  { note: 'B', octave: 3, midi: 59, isBlack: false, shortcutKey: 'J' },

  // Octave 4
  { note: 'C', octave: 4, midi: 60, isBlack: false, shortcutKey: 'K' },
  { note: 'C#', octave: 4, midi: 61, isBlack: true, leftPercent: 56.1, shortcutKey: 'O' },
  { note: 'D', octave: 4, midi: 62, isBlack: false, shortcutKey: 'L' },
  { note: 'D#', octave: 4, midi: 63, isBlack: true, leftPercent: 63.4, shortcutKey: 'P' },
  { note: 'E', octave: 4, midi: 64, isBlack: false, shortcutKey: ';' },
  { note: 'F', octave: 4, midi: 65, isBlack: false },
  { note: 'F#', octave: 4, midi: 66, isBlack: true, leftPercent: 77.8 },
  { note: 'G', octave: 4, midi: 67, isBlack: false },
  { note: 'G#', octave: 4, midi: 68, isBlack: true, leftPercent: 85.1 },
  { note: 'A', octave: 4, midi: 69, isBlack: false },
  { note: 'A#', octave: 4, midi: 70, isBlack: true, leftPercent: 92.4 },
  { note: 'B', octave: 4, midi: 71, isBlack: false },
];

export const PianoKeyboard: React.FC<PianoKeyboardProps> = ({
  volume = 0.5,
  highlightRoot = 'C',
  onKeyPlay,
}) => {
  const [activeMidi, setActiveMidi] = useState<number | null>(null);

  useEffect(() => {
    soundFx.setVolume(volume);
  }, [volume]);

  const playNote = useCallback(
    (key: PianoKey) => {
      soundFx.ensureAudioUnlocked();
      soundFx.playPianoNote(key.midi, 2.5);
      setActiveMidi(key.midi);

      setTimeout(() => {
        setActiveMidi((prev) => (prev === key.midi ? null : prev));
      }, 300);

      if (onKeyPlay) {
        onKeyPlay(`${key.note}${key.octave}`, key.midi);
      }
    },
    [onKeyPlay]
  );

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const keyChar = e.key.toUpperCase();
      const matchedKey = PIANO_KEYS_DATA.find((k) => k.shortcutKey === keyChar || k.shortcutKey === e.key);
      if (matchedKey) {
        playNote(matchedKey);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playNote]);

  const whiteKeys = PIANO_KEYS_DATA.filter((k) => !k.isBlack);
  const blackKeys = PIANO_KEYS_DATA.filter((k) => k.isBlack);

  return (
    <div className="pk-container">
      <div className="pk-header">
        <h3 className="pk-title">🎹 Web Audio Synthesizer Piano</h3>
        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
          Click keys or use QWERTY keyboard (A, S, D, F, G...)
        </span>
      </div>

      <div className="pk-keyboard-frame">
        {/* White Keys */}
        <div className="pk-white-keys">
          {whiteKeys.map((key) => {
            const isActive = activeMidi === key.midi;
            const isHighlight = key.note === highlightRoot;
            return (
              <div
                key={key.midi}
                className={`pk-key-white ${isActive ? 'active' : ''} ${isHighlight ? 'scale-highlight' : ''}`}
                onClick={() => playNote(key)}
              >
                <span className="pk-note-label">
                  {key.note}
                  {key.octave}
                </span>
                {key.shortcutKey && <span className="pk-shortcut-badge">{key.shortcutKey}</span>}
              </div>
            );
          })}
        </div>

        {/* Black Keys */}
        {blackKeys.map((key) => {
          const isActive = activeMidi === key.midi;
          return (
            <div
              key={key.midi}
              className={`pk-key-black ${isActive ? 'active' : ''}`}
              style={{ left: `${key.leftPercent}%` }}
              onClick={() => playNote(key)}
            >
              <span className="pk-note-label">{key.note}</span>
              {key.shortcutKey && <span className="pk-shortcut-badge">{key.shortcutKey}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
