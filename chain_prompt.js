/// chain prompt.js
// Write a JavaScript function toKebabCase that converts strings to kebab-case format. The function should handle the following cases:
// - Convert spaces and underscores to hyphens.
// - Convert camelCase to kebab-case.
// - All letters should be in lowercase.
// - If the input is null, undefined, or not a string, throw an error.
// Here are some examples:
// "HelloWorld" -> "hello-world"
// "hello_world" -> "hello-world"
// "hello world" -> "hello-world"
// null -> Throws error
// undefined -> Throws error
// 123 -> Throws error


function toKebabCase(input) {
    // Validate input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error('Input must be a non-empty string. Received: ' + input);
    }
    
    // Convert to kebab case
    return input
        .trim() // Remove leading and trailing whitespace
        .replace(/[_\s]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen between camelCase
        .toLowerCase(); // Convert to lowercase
}

// Example usage
try {
    console.log(toKebabCase("HelloWorld")); // Output: hello-world
    console.log(toKebabCase("hello_world")); // Output: hello-world
    console.log(toKebabCase("hello world")); // Output: hello-world
} catch (error) {
    console.error(error.message);
}