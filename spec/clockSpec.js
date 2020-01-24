const Clock = require('../src/clock');

describe('Clock', () => {
  let clock;

  beforeEach(() => {
    clock = new Clock();
  });

  describe('getFormattedDate', () => {
    it('returns formatted date', () => {
      let clock.formatted_date = "24 January 2020 08:00:00 GMT"
      clock.getFormattedDate()
      result = "24 / 01 / 2020"
      expect(clock.formatted_date).toEqual(result);
    });
  });
});
