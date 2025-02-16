// Create Date objects
let now = new Date();
let specificDate = new Date("2023-12-25");
let specificDateTime = new Date(2023, 11, 25, 10, 30, 0);

console.log(now.toLocaleString(), specificDate.toDateString(), specificDateTime.toISOString());

// Get & Set Date components
console.log(now.getFullYear(), now.getMonth() + 1, now.getDate()); // Month +1 (0-based)
now.setFullYear(2030); 
console.log("Updated Year:", now.getFullYear());

// Formatting Date
console.log(now.toISOString(), now.toDateString(), now.toTimeString());

// Date Comparison
let date1 = new Date("2025-02-16"), date2 = new Date("2025-02-17");
console.log(date1 < date2 ? "Date1 is earlier" : "Date2 is earlier");

// Time Difference in Days
console.log("Difference in days:", (date2 - date1) / (1000 * 60 * 60 * 24));
