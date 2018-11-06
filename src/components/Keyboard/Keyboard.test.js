import React from 'react';
import { shallow } from 'enzyme';
import { Keyboard } from './index';
import { KEYBOARD_KEYS_INITIAL_STATE } from '../../constants';

describe('Keyboard', () => {
  test('user interactions with keys should fire expected events', () => {
    const keyboardProps = {
      keys: KEYBOARD_KEYS_INITIAL_STATE,
      logKey: jest.fn(),
      highlightKey: jest.fn(),
      unhighlightKey: jest.fn(),
    }
    const wrapper = shallow(<Keyboard {...keyboardProps} />);

    const firstKey = wrapper.find({className: 'whiteKey'}).at(0);
    firstKey.simulate('mousedown');
    expect(keyboardProps.logKey).toHaveBeenCalledWith(firstKey.text());
    expect(keyboardProps.highlightKey).toHaveBeenCalledWith(0);

    firstKey.simulate('mouseup');
    expect(keyboardProps.unhighlightKey).toHaveBeenCalledWith(0);

    firstKey.simulate('mouseleave');
    expect(keyboardProps.unhighlightKey).toHaveBeenCalledWith(0);
  });
});
