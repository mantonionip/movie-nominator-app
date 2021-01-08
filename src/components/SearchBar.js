import React from 'react';
import Cross from '../assets/times-solid.svg';

function SearchBar(props) {
	const handleInput = (event) => props.setInputValue(event.target.value);
	const clearSearch = () => props.setInputValue('');

	return (
		<div className="search-bar">
			<div className="search-bar__container">
				<form
					className="search-bar__form"
					onSubmit={(e) => e.preventDefault()}
					autoComplete="off"
				>
					<label
						id="SearchBarField"
						htmlFor="SearchBarFieldForm"
						className="search-bar__title"
					>
						Search Title
					</label>
					<div className="search-bar__input-container">
						<input
							id="SearchBarFieldForm"
							type="search"
							className="search-bar__input"
							placeholder="e.g. Some like it hot..."
							value={props.inputValue}
							onChange={handleInput}
						/>
						{props.inputValue && (
							<div
								className="search-bar__clear"
								onClick={clearSearch}
							>
								<img
									id="crossIcon"
									className="search-bar__icon"
									src={Cross}
									alt="Close icon."
								/>
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
