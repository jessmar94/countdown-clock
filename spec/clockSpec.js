const Clock = require('../src/clock');

describe('Clock', () => {
  let clock;

  beforeEach(() => {
    clock = new Clock();
  });

  describe('getTimeRemaining', () => {
    it('returns time between now and deadline', () => {
      let now = clock.getTimeNow();
      let deadline = 'December 25 2020 15:00:00';
      let result = clock.getTimeRemaining(deadline)
      expect(clock.getTimeRemaining(deadline)).toEqual(result);
    });
  });
});
