import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { PLAY_KEY_LENGTH } from './constants';


describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('logKey', () => {
    const logKey = wrapper.instance().logKey;
    expect(wrapper.state().log).toEqual([]);
    logKey('a');
    expect(wrapper.state().log).toEqual(['a'])
    logKey('b');
    expect(wrapper.state().log).toEqual(['a', 'b']);
    logKey('c');
    expect(wrapper.state().log).toEqual(['a', 'b', 'c']);
  });
  test('updatePlayKeysInput', () => {
    const updatePlayKeysInput = wrapper.instance().updatePlayKeysInput;

    // default state
    expect(wrapper.state().playKeysInput).toEqual('');
    expect(wrapper.state().playKeysInputIsInvalid).toBeFalsy();

    // valid
    updatePlayKeysInput('a,a#,b,c,d,e');
    expect(wrapper.state().playKeysInput).toEqual('a,a#,b,c,d,e');
    expect(wrapper.state().playKeysInputIsInvalid).toBeFalsy();

    // invalid
    updatePlayKeysInput('a.t');
    expect(wrapper.state().playKeysInput).toEqual('a.t');
    expect(wrapper.state().playKeysInputIsInvalid).toBeTruthy();
  });
  test('highlightKey and unhighlightKey', () => {
    const keyIndex = 0;
    const highlightKey = wrapper.instance().highlightKey;
    const unhighlightKey = wrapper.instance().unhighlightKey;

    expect(wrapper.state().keys[keyIndex].highlighted).toBeFalsy();
    highlightKey(keyIndex);
    expect(wrapper.state().keys[keyIndex].highlighted).toBeTruthy();
    unhighlightKey(keyIndex);
    expect(wrapper.state().keys[keyIndex].highlighted).toBeFalsy();
  });
});
