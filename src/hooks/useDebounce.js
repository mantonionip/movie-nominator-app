import { useState, useEffect } from 'react';

/**
 * @function useDebounce - custom hook that will debounce a value from a text input
 * @param {string} value - the string value from the text input
 * @param {number} delay - the delay in ms until the value is set
 * @returns {null/string} - returns null if value is empty string or the string value
 */
const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Set debouncedValue to value (passed in) after the specified delay
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	if (value === '') {
		return null;
	}

	return debouncedValue;
};

export default useDebounce;
