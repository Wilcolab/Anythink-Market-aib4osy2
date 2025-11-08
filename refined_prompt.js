/**
 * Convert a string to camelCase.
 *
 * The function performs the following steps:
 *  - Validates the input: it must be a non-null, defined, non-empty string that does not begin with a digit.
 *  - Trims leading and trailing whitespace.
 *  - Splits the string on spaces, underscores, or hyphens.
 *  - Removes any remaining non-alphanumeric characters from each word.
 *  - Lowercases the first word entirely and capitalizes the first letter of each subsequent word,
 *    lowercasing the remainder of those words.
 *  - Joins the transformed words without separators to produce a camelCased identifier.
 *
 * Notes:
 *  - Numeric characters within or at the end of words are preserved (e.g. "Animal001" -> "animal001").
 *  - Empty segments from consecutive separators are filtered out.
 *
 * @function camelCase
 * @param {string} input - The input string to convert to camelCase. Leading/trailing whitespace is ignored.
 * @returns {string} The camelCased representation of the input.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is not of type string.
 * @throws {Error} If input is empty or contains only whitespace after trimming.
 * @throws {Error} If the trimmed input begins with a numeric character (0-9).
 *
 * @example
 * camelCase("Robin Hood");             // returns "robinHood"
 * @example
 * camelCase("Robin_HOod");             // returns "robinHood"
 * @example
 * camelCase("tera_chera");             // returns "teraChera"
 * @example
 * camelCase("Terestial Animal001");    // returns "terestialAnimal001"
 * @example
 * // The following inputs cause errors:
 * // camelCase("22robin Hood");       // Error: String cannot start with a number
 * // camelCase("0.0012_timeline");    // Error: String cannot start with a number
 * // camelCase(null);                 // Error: Input cannot be null or undefined
 * // camelCase(undefined);            // Error: Input cannot be null or undefined
 * // camelCase(123);                  // Error: Input must be a string
 */

/**
 * Convert a string to dot.case.
 *
 * The function performs the following steps:
 *  - Validates the input: it must be a non-null, defined, non-empty string that does not begin with a digit.
 *  - Trims leading and trailing whitespace.
 *  - Splits the string on any sequence of non-alphanumeric characters.
 *  - Removes any stray non-alphanumeric characters from each segment.
 *  - Lowercases each resulting segment.
 *  - Joins the segments with a single dot ('.') to produce dot.case format.
 ///////////
 * Notes:
 *  - Numeric characters are preserved in segments (e.g. "item42" -> "item42").
 *  - Consecutive non-alphanumeric separators are treated as a single split boundary.
 *
 * @function dotCase
 * @param {string} input - The input string to convert to dot.case. Leading/trailing whitespace is ignored.
 * @returns {string} The dot.case representation of the input.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is not of type string.
 * @throws {Error} If input is empty or contains only whitespace after trimming.
 * @throws {Error} If the trimmed input begins with a numeric character (0-9).
 *
 * @example
 * dotCase("Robin Hood");               // returns "robin.hood"
 * @example
 * dotCase("Robin_HOod");               // returns "robin.hood"
 * @example
 * dotCase("Terestial Animal001");      // returns "terestial.animal001"
 * @example
 * dotCase("some-mixed_string.example"); // returns "some.mixed.string.example"
 * @example
 * // The following inputs cause errors:
 * // dotCase("22robin Hood");          // Error: String cannot start with a number
 * // dotCase(null);                    // Error: Input cannot be null or undefined
 * // dotCase(123);                     // Error: Input must be a string
 */
function camelCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Check if input is string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim whitespace
    input = input.trim();

    // Check if string is empty after trimming
    if (input.length === 0) {
        throw new Error('Input cannot be empty');
    }

    // Check if string starts with a number or special character
    if (/^[0-9]/.test(input)) {
        throw new Error('String cannot start with a number');
    }

    // Convert string to camelCase
    return input
        // Split on spaces, underscores, or hyphens
        .split(/[\s_-]+/)
        // Filter out empty strings
        .filter(word => word.length > 0)
        // Transform to camelCase format
        .map((word, index) => {
            // Remove any non-alphanumeric characters except numbers
            word = word.replace(/[^a-zA-Z0-9]/g, '');
            
            if (index === 0) {
                // First word should be lowercase
                return word.toLowerCase();
            }
            // Capitalize first letter of subsequent words
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(camelCase("Robin Hood"));      // "robinHood"
// console.log(camelCase("Robin_HOod"));      // "robinHood"
// console.log(camelCase("tera_chera"));      // "teraChera"
// console.log(camelCase("Terestial Animal001")); // "terestialAnimal001"
// console.log(camelCase("22robin Hood"));    // Throws error
// console.log(camelCase("0.0012_timeline")); // Throws error
// console.log(camelCase(null));             // Throws error
// console.log(camelCase(undefined));        // Throws error
// console.log(camelCase(123));              // Throws error



// # here copilot generated the following the context of last specified function required ment even with simple prompt
// prompt: Write a JavaScript function dotCase that converts strings to dot.case format.

function dotCase(input) {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    input = input.trim();
    if (input.length === 0) {
        throw new Error('Input cannot be empty');
    }

    if (/^[0-9]/.test(input)) {
        throw new Error('String cannot start with a number');
    }

    return input
        .split(/[^a-zA-Z0-9]+/)      // split on any non-alphanumeric sequence
        .filter(Boolean)            // remove empty parts
        .map(word => word
            .replace(/[^a-zA-Z0-9]/g, '') // remove stray non-alphanumerics
            .toLowerCase()
        )
        .join('.');
}



///////doucumentation of above prompt function

