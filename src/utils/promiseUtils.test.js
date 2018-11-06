import { delayPromise } from './promiseUtils';

describe('promiseUtils', () => {
    describe('delayPromise', () => {
        test('should return a promise that resolves after specified timeout', done => {
            jest.useFakeTimers();
            const timeout = 1000;
            delayPromise(timeout).then(done);
            jest.advanceTimersByTime(timeout);
        });
    });
});
