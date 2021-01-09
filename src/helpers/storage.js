export const clear = (setNominations, setIsSubmitted) => {
	setIsSubmitted(false);
	localStorage.removeItem('nominations');
	setNominations([]);
};

export const get = () => JSON.parse(localStorage.getItem('nominations'));

export const set = (nominations) => {
	localStorage.setItem('nominations', JSON.stringify({ nominations }));
};

export const submit = (setIsSubmitted) => {
	const nominations = get()?.nominations;
	setIsSubmitted(true);

	localStorage.setItem(
		'nominations',
		JSON.stringify({
			nominations,
			submitted: true,
		})
	);
};
