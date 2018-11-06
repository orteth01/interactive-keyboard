import React, { Component } from 'react';
import { Keyboard } from './components/Keyboard';
import { Log } from './components/Log';
import { PlayKeysControls } from './components/PlayKeysControls';

import { KEYBOARD_KEYS_INITIAL_STATE, PLAY_KEY_LENGTH, PLAY_KEY_SEPARATION } from './constants';
import { getKeysFromPlayKeysInput, isPlayKeysInputInvalid } from './utils/playKeysInputUtils';
import { delayPromise } from './utils/promiseUtils';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      log: [],
      keys: KEYBOARD_KEYS_INITIAL_STATE,
      playKeysInput: '',
      playKeysInputIsInvalid: false,
      isPlaying: false,
    };

    this.logKey = this.logKey.bind(this);
    this.playKeys = this.playKeys.bind(this);
    this.updatePlayKeysInput = this.updatePlayKeysInput.bind(this);
    this.highlightKey = (keyIndex) => this.updateKeyHighlight(keyIndex, true);
    this.unhighlightKey = (keyIndex) => this.updateKeyHighlight(keyIndex, false);
  }

  logKey(keyValue) {
    this.setState(state => ({
      log: state.log.concat([keyValue]),
    }));
  }

  updatePlayKeysInput(value) {
    this.setState({
      playKeysInput: value,
      playKeysInputIsInvalid: isPlayKeysInputInvalid(value),
    });
  }

  updateKeyHighlight(keyIndex, highlight) {
    return new Promise(resolve => {
      this.setState(state => {
          const newKeys = [...state.keys];
          newKeys[keyIndex].highlighted = highlight;
          return { keys: newKeys };
      }, resolve);
    });
  }

  playKeys() {
    this.setState({ isPlaying: true }, () => {
      getKeysFromPlayKeysInput(this.state.playKeysInput) // array of keys to play
        .reduce((promiseChain, key) => { // reduce keys to an ordered promise chain
          const keyIndex = this.state.keys.findIndex(stateKey => stateKey.value === key.toUpperCase());
          return promiseChain
            .then(() => this.highlightKey(keyIndex))
            .then(() => delayPromise(PLAY_KEY_LENGTH - PLAY_KEY_SEPARATION))
            .then(() => this.unhighlightKey(keyIndex))
            .then(() => delayPromise(PLAY_KEY_SEPARATION)); // separation is for if a key is played multiple times in a row
        }, Promise.resolve())
        .then(() => {
          this.setState({ isPlaying: false }); // isPlaying -> false after all keys have played
        });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Keyboard
          keys={this.state.keys}
          logKey={this.logKey}
          highlightKey={this.highlightKey}
          unhighlightKey={this.unhighlightKey}
          disabled={this.state.isPlaying}
        />
        <Log log={this.state.log} />
        <PlayKeysControls
          playKeys={this.playKeys}
          isPlaying={this.state.isPlaying}
          playKeysInput={this.state.playKeysInput}
          playKeysInputIsInvalid={this.state.playKeysInputIsInvalid}
          updatePlayKeysInput={this.updatePlayKeysInput}
        />
      </React.Fragment>
    );
  }
}
