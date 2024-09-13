const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

// Exported function to get day name from number
export function dayName(number) {
return names[number];
}

// Exported function to get day number from name
export function dayNumber(name) {
return names.indexOf(name);
}