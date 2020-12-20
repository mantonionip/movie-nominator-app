import { useState, useEffect } from 'react';

export default function useDebounce(term, ms) {
	const [debounced, setDebounced] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounced(term);
		}, ms);

		return () => clearTimeout(timeout);
	}, [term, ms]);

	return debounced;
}
