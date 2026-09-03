export interface ScaleDefinition {
  id: string;
  name: string;
  category: string;
  intervals: number[]; // semitone offsets from root (0 to 11)
  degrees: string[];   // visual degree names (1, b3, 5, etc.)
  description: string;
}

export interface GuitarTuning {
  id: string;
  name: string;
  stringNotes: string[]; // High E to Low E or String 1 to 6
  baseMidiNotes: number[]; // String 1 (highest pitch) down to String 6 (lowest pitch)
}

export interface FretNote {
  stringIndex: number; // 0 (String 1 - High E) to 5 (String 6 - Low E)
  fretNumber: number;  // 0 (open string) to maxFrets
  midiNote: number;
  noteName: string;
  pitchClass: number;  // 0=C, 1=C#, ..., 11=B
  octave: number;
  frequency: number;
  isInScale: boolean;
  isRoot: boolean;
  degreeName?: string;
  intervalSemitones?: number;
}

export const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const ROOT_KEYS = [
  { id: 'C', name: 'C', altName: '' },
  { id: 'C#', name: 'C#', altName: 'D♭' },
  { id: 'D', name: 'D', altName: '' },
  { id: 'D#', name: 'D#', altName: 'E♭' },
  { id: 'E', name: 'E', altName: '' },
  { id: 'F', name: 'F', altName: '' },
  { id: 'F#', name: 'F#', altName: 'G♭' },
  { id: 'G', name: 'G', altName: '' },
  { id: 'G#', name: 'G#', altName: 'A♭' },
  { id: 'A', name: 'A', altName: '' },
  { id: 'A#', name: 'A#', altName: 'B♭' },
  { id: 'B', name: 'B', altName: '' },
];

export const GUITAR_SCALES: ScaleDefinition[] = [
  {
    id: 'major',
    name: 'Major (Ionian)',
    category: 'Standard Modes',
    intervals: [0, 2, 4, 5, 7, 9, 11],
    degrees: ['1', '2', '3', '4', '5', '6', '7'],
    description: 'Bright, happy, fundamental major scale used in pop, rock, and classical music.'
  },
  {
    id: 'natural-minor',
    name: 'Natural Minor (Aeolian)',
    category: 'Standard Modes',
    intervals: [0, 2, 3, 5, 7, 8, 10],
    degrees: ['1', '2', '♭3', '4', '5', '♭6', '♭7'],
    description: 'Sad, emotional minor sound found in rock ballads, metal, and blues.'
  },
  {
    id: 'pentatonic-minor',
    name: 'Pentatonic Minor',
    category: 'Pentatonic & Blues',
    intervals: [0, 3, 5, 7, 10],
    degrees: ['1', '♭3', '4', '5', '♭7'],
    description: 'The most popular guitar soloing scale in rock, blues, and pop.'
  },
  {
    id: 'pentatonic-major',
    name: 'Pentatonic Major',
    category: 'Pentatonic & Blues',
    intervals: [0, 2, 4, 7, 9],
    degrees: ['1', '2', '3', '5', '6'],
    description: 'Sweet, uplifting 5-note scale popular in country, southern rock, and pop.'
  },
  {
    id: 'blues',
    name: 'Blues Scale',
    category: 'Pentatonic & Blues',
    intervals: [0, 3, 5, 6, 7, 10],
    degrees: ['1', '♭3', '4', '♭5', '5', '♭7'],
    description: 'Classic minor pentatonic with the gritty "blue note" (♭5).'
  },
  {
    id: 'harmonic-minor',
    name: 'Harmonic Minor',
    category: 'Minor Variations',
    intervals: [0, 2, 3, 5, 7, 8, 11],
    degrees: ['1', '2', '♭3', '4', '5', '♭6', '7'],
    description: 'Exotic neo-classical sound with a raised 7th degree (Yngwie Malmsteen style).'
  },
  {
    id: 'melodic-minor',
    name: 'Melodic Minor',
    category: 'Minor Variations',
    intervals: [0, 2, 3, 5, 7, 9, 11],
    degrees: ['1', '2', '♭3', '4', '5', '6', '7'],
    description: 'Jazz minor scale with major 6th and 7th degrees for sophisticated solos.'
  },
  {
    id: 'dorian',
    name: 'Dorian Mode',
    category: 'Diatonic Modes',
    intervals: [0, 2, 3, 5, 7, 9, 10],
    degrees: ['1', '2', '♭3', '4', '5', '6', '♭7'],
    description: 'Smooth minor sound with a major 6th; iconic Carlos Santana & Funk sound.'
  },
  {
    id: 'phrygian',
    name: 'Phrygian Mode',
    category: 'Diatonic Modes',
    intervals: [0, 1, 3, 5, 7, 8, 10],
    degrees: ['1', '♭2', '♭3', '4', '5', '♭6', '♭7'],
    description: 'Dark, Spanish/Flamenco or heavy metal sound with a minor 2nd (♭2).'
  },
  {
    id: 'lydian',
    name: 'Lydian Mode',
    category: 'Diatonic Modes',
    intervals: [0, 2, 4, 6, 7, 9, 11],
    degrees: ['1', '2', '3', '♯4', '5', '6', '7'],
    description: 'Dreamy, ethereal sound with a raised 4th (♯4); popular in film scores and Steve Vai solos.'
  },
  {
    id: 'mixolydian',
    name: 'Mixolydian Mode',
    category: 'Diatonic Modes',
    intervals: [0, 2, 4, 5, 7, 9, 10],
    degrees: ['1', '2', '3', '4', '5', '6', '♭7'],
    description: 'Bluesy major mode with a flat 7th (♭7); quintessential rock & jam band scale.'
  },
  {
    id: 'locrian',
    name: 'Locrian Mode',
    category: 'Diatonic Modes',
    intervals: [0, 1, 3, 5, 6, 8, 10],
    degrees: ['1', '♭2', '♭3', '4', '♭5', '♭6', '♭7'],
    description: 'Unstable, tense mode with a diminished 5th (♭5) used in progressive metal.'
  },
  {
    id: 'phrygian-dominant',
    name: 'Phrygian Dominant (Spanish Gypsy)',
    category: 'Exotic & World',
    intervals: [0, 1, 4, 5, 7, 8, 10],
    degrees: ['1', '♭2', '3', '4', '5', '♭6', '♭7'],
    description: 'Fiery Middle-Eastern and Flamenco scale (5th mode of Harmonic Minor).'
  },
  {
    id: 'hungarian-minor',
    name: 'Hungarian Minor',
    category: 'Exotic & World',
    intervals: [0, 2, 3, 6, 7, 8, 11],
    degrees: ['1', '2', '♭3', '♯4', '5', '♭6', '7'],
    description: 'Dramatic Eastern European scale with augmented 4th and major 7th.'
  },
  {
    id: 'hirajoshi',
    name: 'Japanese (Hirajoshi)',
    category: 'Exotic & World',
    intervals: [0, 2, 3, 7, 8],
    degrees: ['1', '2', '♭3', '5', '♭6'],
    description: 'Traditional Japanese pentatonic scale with intense zen character.'
  },
  {
    id: 'arabic',
    name: 'Double Harmonic (Arabic)',
    category: 'Exotic & World',
    intervals: [0, 1, 4, 5, 7, 8, 11],
    degrees: ['1', '♭2', '3', '4', '5', '♭6', '7'],
    description: 'Mystical Byzantine / Arabic scale with two augmented second intervals.'
  },
  {
    id: 'chromatic',
    name: 'Chromatic Scale',
    category: 'Symmetrical',
    intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    degrees: ['1', '♭2', '2', '♭3', '3', '4', '♭5', '5', '♭6', '6', '♭7', '7'],
    description: 'All 12 semitones in western music.'
  },
  {
    id: 'whole-tone',
    name: 'Whole Tone Scale',
    category: 'Symmetrical',
    intervals: [0, 2, 4, 6, 8, 10],
    degrees: ['1', '2', '3', '♯4', '♯5', '♭7'],
    description: 'Symmetrical 6-note scale composed entirely of whole steps; impressionistic dream sound.'
  },
  {
    id: 'diminished-hw',
    name: 'Diminished (Half-Whole)',
    category: 'Symmetrical',
    intervals: [0, 1, 3, 4, 6, 7, 9, 10],
    degrees: ['1', '♭2', '♭3', '3', '♯4', '5', '6', '♭7'],
    description: '8-note symmetrical scale alternating half and whole steps for jazz tension over dominant 7th.'
  },
  {
    id: 'altered',
    name: 'Altered Scale (Super Locrian)',
    category: 'Blues & Jazz',
    intervals: [0, 1, 3, 4, 6, 8, 10],
    degrees: ['1', '♭2', '♭3', '3', '♭5', '♭6', '♭7'],
    description: '7th mode of Melodic Minor, containing all altered chord extensions for jazz solos.'
  }
];

export const GUITAR_TUNINGS: GuitarTuning[] = [
  {
    id: 'standard',
    name: 'Standard (E A D G B E)',
    stringNotes: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
    baseMidiNotes: [64, 59, 55, 50, 45, 40] // String 1 (top/High E) down to String 6 (bottom/Low E)
  },
  {
    id: 'drop-d',
    name: 'Drop D (D A D G B E)',
    stringNotes: ['E4', 'B3', 'G3', 'D3', 'A2', 'D2'],
    baseMidiNotes: [64, 59, 55, 50, 45, 38]
  },
  {
    id: 'half-step-down',
    name: 'Half-Step Down (E♭ A♭ D♭ G♭ B♭ E♭)',
    stringNotes: ['E♭4', 'B♭3', 'G♭3', 'D♭3', 'A♭2', 'E♭2'],
    baseMidiNotes: [63, 58, 54, 49, 44, 39]
  },
  {
    id: 'open-d',
    name: 'Open D (D A D F# A D)',
    stringNotes: ['D4', 'A3', 'F#3', 'D3', 'A2', 'D2'],
    baseMidiNotes: [62, 57, 54, 50, 45, 38]
  },
  {
    id: 'open-g',
    name: 'Open G (D G D G B D)',
    stringNotes: ['D4', 'B3', 'G3', 'D3', 'G2', 'D2'],
    baseMidiNotes: [62, 59, 55, 50, 43, 38]
  },
  {
    id: 'dadgad',
    name: 'DADGAD (D A D G A D)',
    stringNotes: ['D4', 'A3', 'G3', 'D3', 'A2', 'D2'],
    baseMidiNotes: [62, 57, 55, 50, 45, 38]
  }
];

export const FRET_MARKERS = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];

/** Helper to convert MIDI note number to pitch name and octave */
export function midiToNote(midi: number): { noteName: string; pitchClass: number; octave: number; frequency: number } {
  const pitchClass = ((midi % 12) + 12) % 12;
  const noteName = CHROMATIC_NOTES[pitchClass];
  const octave = Math.floor(midi / 12) - 1;
  const frequency = 440 * Math.pow(2, (midi - 69) / 12);
  return { noteName, pitchClass, octave, frequency };
}

/** Helper to get root pitch index (0 for C, 1 for C#, etc.) */
export function getRootPitchClass(rootKeyId: string): number {
  const index = CHROMATIC_NOTES.indexOf(rootKeyId);
  return index >= 0 ? index : 0;
}

/** Calculate fretboard matrix of notes */
export function buildFretboardMatrix(
  tuning: GuitarTuning,
  rootKeyId: string,
  scale: ScaleDefinition,
  maxFrets: number = 15
): FretNote[][] {
  const rootPitchClass = getRootPitchClass(rootKeyId);
  const matrix: FretNote[][] = [];

  for (let stringIdx = 0; stringIdx < 6; stringIdx++) {
    const baseMidi = tuning.baseMidiNotes[stringIdx];
    const stringNotesList: FretNote[] = [];

    for (let fret = 0; fret <= maxFrets; fret++) {
      const midiNote = baseMidi + fret;
      const { noteName, pitchClass, octave, frequency } = midiToNote(midiNote);

      const semitonesFromRoot = ((pitchClass - rootPitchClass) + 12) % 12;
      const scaleIntervalIndex = scale.intervals.indexOf(semitonesFromRoot);
      const isInScale = scaleIntervalIndex !== -1;
      const isRoot = pitchClass === rootPitchClass;
      const degreeName = isInScale ? scale.degrees[scaleIntervalIndex] : undefined;

      stringNotesList.push({
        stringIndex: stringIdx,
        fretNumber: fret,
        midiNote,
        noteName,
        pitchClass,
        octave,
        frequency,
        isInScale,
        isRoot,
        degreeName,
        intervalSemitones: semitonesFromRoot,
      });
    }
    matrix.push(stringNotesList);
  }

  return matrix;
}
