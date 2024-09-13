export function formatDate(date) {
    // Formats a date object into YYYY-MM-DD string
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2); // Months are zero-based
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  }
  
  export function capitalize(str) {
    // Capitalizes the first letter of a string
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function generateRandomNumber(max) {
    // Generates a random integer between 0 and max - 1
    return Math.floor(Math.random() * max);
  }