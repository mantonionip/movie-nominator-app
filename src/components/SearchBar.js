import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar(props) {
	const handleInput = (event) => props.setInputValue(event.target.value);

	return (
		<div className="search-bar">
			<div className="search-bar__container">
				<form
					className="search-bar__form"
					onSubmit={(event) => event.preventDefault()}
					autoComplete="off"
				>
					<p className="search-bar__title">Search Title</p>
					<div className="search-bar__field" tabindex="0">
						<SearchIcon className="search-bar__icon"></SearchIcon>
						<input
							type="search"
							className="search-bar__input"
							placeholder="e.g. Some like it hot..."
							value={props.inputValue}
							onChange={handleInput}
							clearIcon={{name: 'clear'}}
						/>
						<input type="reset" defaultValue="Reset" />  
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
