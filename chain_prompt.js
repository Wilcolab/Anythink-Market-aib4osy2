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