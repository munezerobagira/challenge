import formatDateRange from '../../../src/util/formatDateRange';
const __mocks = [
  {
    start: '1/1/2022',
    end: '12/1/2022',
  },
  {
    start: '1/1/2022',
    end: '12/2/2022',
  },
];
describe('formatDateRange(start:string, end:string)', () => {
  it('return valid format for every given range', () => {
    expect(formatDateRange(__mocks[0].start, __mocks[0].end)).toBe('jan 1-12');
    expect(formatDateRange(__mocks[1].start, __mocks[1].end)).toBe('jan 1- Feb 12');
  });
});
