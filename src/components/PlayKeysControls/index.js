import React from 'react';
import styles from './PlayKeysControls.module.scss';
import { VALID_CHARACTERS_INFO_MESSAGE } from '../../constants';

export function PlayKeysControls(props) {
  const {
    playKeys,
    playKeysInput,
    playKeysInputIsInvalid,
    updatePlayKeysInput,
    isPlaying,
  } = props;

  return (
    <section className={styles.wrapper}>
      <label>
        Enter a comma-delimited list of keys to play:
        <input
          type="text"
          spellCheck="false"
          className={styles.playKeysInput}
          value={playKeysInput}
          disabled={isPlaying}
          onChange={(e) => {
            updatePlayKeysInput(e.target.value);
          }}
        />
      </label>

      {playKeysInputIsInvalid && (
        <React.Fragment>
          <p className={styles.invalidInputError}>
            The input value must be a comma-delimited string of valid values.
          </p>
          <p className={styles.invalidInputError}>
            {VALID_CHARACTERS_INFO_MESSAGE}
          </p>
          <p className={styles.invalidInputError}>
            The input is not case sensetive.
          </p>
        </React.Fragment>
      )}

      {!playKeysInputIsInvalid && (
        <button
          className={styles.playButton}
          onClick={playKeys}
          disabled={isPlaying || !playKeysInput}
        >
          {isPlaying ? 'playing...': 'play'}
        </button>
      )}
    </section>
  );
}
