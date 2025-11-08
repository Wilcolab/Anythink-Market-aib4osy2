////////////// bsic prompt:
// Write a JavaScript function camelCase that converts strings to camelCase format.


function camelCase(str) {
    if (typeof str !== 'string') return '';
    return str
        .trim()
        .split(/[^a-zA-Z0-9]+/)      // split on any non-alphanumeric sequence
        .filter(Boolean)
        .map((word, i) => {
            const lower = word.toLowerCase();
            return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

// Examples:
// camelCase("hello world") -> "helloWorld"
// camelCase("  Foo_bar-baz ") -> "fooBarBaz"


///refined prompt:
/// Write a JavaScript function toCamelCase that converts strings to camelCase. Here are some examples: first name → firstName user_id → userId SCREEN_NAME → screenName mobile-number → mobileNumber Implement the function to handle these cases.
function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    return input
        .trim()
        .split(/[^a-zA-Z0-9]+/) // split on any non-alphanumeric sequence (spaces, underscores, dashes, etc.)
        .filter(Boolean)
        .map((word, i) => {
            const lower = word.toLowerCase();
            return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

// Examples:
// toCamelCase("first name") -> "firstName"
// toCamelCase("user_id") -> "userId"
// toCamelCase("SCREEN_NAME") -> "screenName"
// toCamelCase("mobile-number") -> "mobileNumber"
