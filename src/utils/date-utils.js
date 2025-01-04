// input: 2023-08-20
// output: Aug 20, 2023
export const getDisplayDate = (dateStr) => {
  const date = new Date(`${dateStr}T00:00:00.000+05:30`);
  const year = date.getFullYear().toString();
  const month = date.toDateString().split(' ')[1];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};
