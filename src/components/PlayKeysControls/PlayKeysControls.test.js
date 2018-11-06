import React from 'react';
import { shallow } from 'enzyme';
import { PlayKeysControls } from './index';

describe('PlayKeysControls', () => {
  let props;
  beforeEach(() => {
    // default props
    props = {
      playKeys: jest.fn(),
      playKeysInput: '',
      playKeysInputIsInvalid: false,
      updatePlayKeysInput: jest.fn(),
      isPlaying: false,
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('changing the input should fire expected events', () => {
    const wrapper = shallow(<PlayKeysControls {...props} />);
    const newInput = 'a,b,c';
    const playKeysInput = wrapper.find({className: 'playKeysInput'});
    playKeysInput.simulate('change', { target: { value: newInput } });
    expect(props.updatePlayKeysInput).toHaveBeenCalledWith(newInput);
  });

  test('show error messages if invalid input', () => {
    props = {
      ...props,
      playKeysInputIsInvalid: true,
    };
    const wrapper = shallow(<PlayKeysControls {...props} />);
    const errors = wrapper.find({className: 'invalidInputError'});
    expect(errors.length).toBeTruthy();
  });

  test('hide error messages if not invalid input', () => {
    const wrapper = shallow(<PlayKeysControls {...props} />);
    const errors = wrapper.find({className: 'invalidInputError'});
    expect(errors.length).toBeFalsy();
  });

  test('hide play button if input is invalid', () => {
    props = {
      ...props,
      playKeysInputIsInvalid: true,
    };
    const wrapper = shallow(<PlayKeysControls {...props} />);
    const playButton = wrapper.find({className: 'playButton'});
    expect(playButton.exists()).toBeFalsy();
  });

  test('play button text when isPlaying=false', () => {
    const wrapper = shallow(<PlayKeysControls {...props} />);
    const playButton = wrapper.find({className: 'playButton'});
    expect(playButton.text()).toBe('play');
  });

  test('play button text when isPlaying=false', () => {
    props = {
      ...props,
      isPlaying: true,
    };
    const wrapper = shallow(<PlayKeysControls {...props} />);
    const playButton = wrapper.find({className: 'playButton'});
    expect(playButton.text()).toBe('playing...');
  });
});
