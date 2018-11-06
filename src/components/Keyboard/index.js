import React from 'react';
import classnames from 'classnames';
import styles from './Keyboard.module.scss';

import { KEY_TYPE_BLACK, KEY_TYPE_WHITE } from '../../constants';

export function Keyboard(props) {
  const { keys, logKey, highlightKey, unhighlightKey, disabled } = props;
  return (
    <section className={styles.keyboardWrapper}>
      {keys.map((key, keyIndex) => {
        const keyClasses = classnames({
          [styles.whiteKey]: key.type === KEY_TYPE_WHITE,
          [styles.blackKey]: key.type === KEY_TYPE_BLACK,
          [styles.highlightedKey]: key.highlighted,
          [styles.disabled]: disabled,
        });
        return (
          <div
            key={key.value}
            className={keyClasses}
            onMouseDown={() => {
              if (!disabled) {
                logKey(key.value);
                highlightKey(keyIndex);
              }
            }}
            onMouseUp={() => {
              if (!disabled) {
                unhighlightKey(keyIndex);
              }
            }}
            onMouseLeave={() => {
              if (!disabled) {
                unhighlightKey(keyIndex);
              }
            }}
          >
            {key.value}
          </div>
        );
      })}
    </section>
  );
}
