import React from 'react';
import styles from './Log.module.scss';

export function Log(props) {
  return (
    <section className={styles.wrapper}>
      Clicked Key Log:
      <p className={styles.loggedValues}>
        {props.log.join(', ')}
      </p>
    </section>
  );
}
