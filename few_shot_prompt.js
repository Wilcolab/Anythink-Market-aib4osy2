//few shot prompt

//  Write a JavaScript function camelCase that converts strings to camelCase format. The function should handle the following cases:
//  - Convert spaces, underscores, and dashes to camelCase.
//  - Ignore any non-alphanumeric characters.
//  - The first letter of the first word should be lowercase, and the first letter of subsequent words should be uppercase.
//  - If the input string starts with a number, throw an error.
//  - If the input is null, undefined, or not a string, throw an error.
// Here are some examples:
//  "hello world" -> "helloWorld"
//  "  Foo_bar-baz " -> "fooBarBaz"
//  "SCREEN_NAME" -> "screenName"
//  "mobile-number" -> "mobileNumber"
//  "22robin Hood" -> Throws error
//  null -> Throws error
//  undefined -> Throws error
//  123 -> Throws error

function camelCase(input) {
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error('Input must be a non-null string');
    }

    const trimmed = input.trim();
    if (trimmed.length === 0) return '';

    if (/^\d/.test(trimmed)) {
        throw new Error('Input cannot start with a number');
    }

    // Remove any characters that are not alphanumeric, space, underscore or dash
    const cleaned = trimmed.replace(/[^A-Za-z0-9 _-]+/g, '');

    // Split on spaces, underscores or dashes (one or more), discard empty parts
    const parts = cleaned.split(/[\s_-]+/).filter(Boolean);
    if (parts.length === 0) return '';

    const first = parts[0].toLowerCase();
    const rest = parts
        .slice(1)
        .map(p => {
            const lower = p.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');

    return first + rest;
}
