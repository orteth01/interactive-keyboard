// keys
const KEY_C = 'C';
const KEY_C_SHARP = 'C#';
const KEY_D = 'D';
const KEY_D_SHARP = 'D#';
const KEY_E = 'E';
const KEY_F = 'F';
const KEY_F_SHARP = 'F#';
const KEY_G = 'G';
const KEY_G_SHARP = 'G#';
const KEY_A = 'A';
const KEY_A_SHARP = 'A#';
const KEY_B = 'B';

// key types
export const KEY_TYPE_WHITE = 'white';
export const KEY_TYPE_BLACK = 'black';

export const VALID_INPUT_VALS = [
  KEY_C,
  KEY_C_SHARP,
  KEY_D,
  KEY_D_SHARP,
  KEY_E,
  KEY_F,
  KEY_F_SHARP,
  KEY_G,
  KEY_G_SHARP,
  KEY_A,
  KEY_A_SHARP,
  KEY_B,
];
export const VALID_CHARACTERS_INFO_MESSAGE = `Valid values include ${VALID_INPUT_VALS.map(char => '"' + char + '"').join(', ')}. `;

export const KEYBOARD_KEYS_INITIAL_STATE = [
  { value: KEY_C, type: KEY_TYPE_WHITE },
  { value: KEY_C_SHARP, type: KEY_TYPE_BLACK },
  { value: KEY_D, type: KEY_TYPE_WHITE },
  { value: KEY_D_SHARP, type: KEY_TYPE_BLACK },
  { value: KEY_E, type: KEY_TYPE_WHITE },
  { value: KEY_F, type: KEY_TYPE_WHITE },
  { value: KEY_F_SHARP, type: KEY_TYPE_BLACK },
  { value: KEY_G, type: KEY_TYPE_WHITE },
  { value: KEY_G_SHARP, type: KEY_TYPE_BLACK },
  { value: KEY_A, type: KEY_TYPE_WHITE },
  { value: KEY_A_SHARP, type: KEY_TYPE_BLACK },
  { value: KEY_B, type: KEY_TYPE_WHITE },
].map(key => ({
  ...key,
  highlighted: false, // all keys initially not highlighted
}));

export const PLAY_KEY_LENGTH = 1000; // milliseconds
export const PLAY_KEY_SEPARATION = 10; // milliseconds
