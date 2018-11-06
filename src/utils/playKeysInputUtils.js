import { VALID_INPUT_VALS } from '../constants';

export function getKeysFromPlayKeysInput(input) {
    return input
        .split(',')
        .map(val => val.trim())
        .filter(Boolean); // filter empty strings
};

export function isPlayKeysInputInvalid(input) {
    if (!input) {
        return false; // no input is a valid input
    }
    return getKeysFromPlayKeysInput(input).some(inputVal => !VALID_INPUT_VALS.includes(inputVal.toUpperCase()));
};
