import formatDateRange from '../../../src/util/formatDateRange';
describe('formatDateRange(start:string, end:string)', () => {
  const __mocks = [
    {
      start: '2023-01-01',
      end: '2023-01-03',
    },
    {
      start: '2023-01-01',
      end: '2023-02-03',
    },
  ];
  it('should return a formatted date range string when the start and end months are the same', () => {
    const result = formatDateRange(__mocks[0].start, __mocks[0].end);
    expect(result).toEqual('Jan 1 - 3');
  });

  it('should return a formatted date range string when the start and end months are different', () => {
    const result = formatDateRange(__mocks[1].start, __mocks[1].end);
    expect(result).toEqual('Jan 1 - Feb 3');
  });
});
