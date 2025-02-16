let str = "  Hello JavaScript!  ";

// Basic string methods
console.log("Length:", str.length); // String length
console.log("Slice:", str.slice(2, 7)); // Extract part of string
console.log("Substring:", str.substring(2, 7)); // Similar to slice
console.log("Substr:", str.substr(2, 5)); // Deprecated but works

// Modifying strings
console.log("Replace:", str.replace("JavaScript", "World")); // Replace first match
console.log("ReplaceAll:", str.replaceAll(" ", "-")); // Replace all occurrences
console.log("UpperCase:", str.toUpperCase()); // Convert to uppercase
console.log("LowerCase:", str.toLowerCase()); // Convert to lowercase
console.log("Concat:", str.concat(" Welcome!")); // Merge strings

// Trimming and padding
console.log("Trim:", str.trim()); // Remove spaces
console.log("TrimStart:", str.trimStart()); // Trim start spaces
console.log("TrimEnd:", str.trimEnd()); // Trim end spaces
console.log("PadStart:", str.padStart(25, "*")); // Add padding at start
console.log("PadEnd:", str.padEnd(25, "*")); // Add padding at end

// Character access
console.log("CharAt:", str.charAt(2)); // Get character at index
console.log("CharCodeAt:", str.charCodeAt(2)); // Get ASCII code of character

// Splitting string
console.log("Split:", str.split(" ")); // Split string into array
