import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState("");
	const onFromSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};
	return (
		<form onSubmit={onFromSubmit} className='ui form'>
			<div className='field'>
				<label>Image Search</label>
				<input
					type='text'
					name='search'
					placeholder=''
					value={term}
					onChange={(event) => {
						setTerm(event.target.value);
					}}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
