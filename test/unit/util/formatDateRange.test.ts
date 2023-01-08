import formatDateRange from '../../../src/util/formatDateRange';
describe('formatDateRange(start:string, end:string)', () => {
  it('render link to profile the about page', () => {
    const __mocks = [
      {
        start: '1/1/2022',
        end: '1/12/2022',
      },
      {
        start: '1/1/2022',
        end: '2/12/2022',
      },
    ];
    expect(formatDateRange(__mocks[0].start, __mocks[0].end)).toBe('jan 1-12');
    expect(formatDateRange(__mocks[1].start, __mocks[1].end)).toBe('jan 1- Feb 12');
  });
});
