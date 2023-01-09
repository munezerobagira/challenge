const formatDateRange = function formatDateRange(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.toLocaleString('en-us', { month: 'short' });
  const startDay = start.getDate();
  const endMonth = end.toLocaleString('en-us', { month: 'short' });
  const endDay = end.getDate();

  if (startMonth == endMonth) {
    return `${startMonth} ${startDay} - ${endDay}`;
  } else {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
  }
};
export default formatDateRange;
