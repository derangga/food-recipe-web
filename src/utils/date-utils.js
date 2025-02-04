export default function convertMillisToDateString(millis) {
  // Create a new Date object with the milliseconds
  const date = new Date(millis);

  // Define an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day, month, and year from the date object
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the date string as "20 Feb, 2025"
  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
}
