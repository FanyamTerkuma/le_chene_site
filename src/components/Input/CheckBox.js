import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const CheckBox = ({ label, onChange, value }) => {
	const [isChecked, setisChecked] = useState(false);

	useEffect(() => {
		if (value !== undefined) {
			setisChecked(value);
		}
	}, []);

	const handleChange = () => {
		if (value === undefined) {
			setisChecked(!isChecked);
		} else {
			onChange();
		}
	};

	const renderCheck = () => {
		if (value !== undefined) return value;

		return isChecked;
	};

	return (
		<div className='flex items-center space-x-3'>
			<div
				className={`w-6 h-6 border cursor-pointer border-gray-200 flex items-center rounded-md text-sm justify-center text-white ${
					renderCheck() ? 'bg-green-500' : 'custom-shadow bg-gray-200'
				} `}
				onClick={handleChange}>
				{renderCheck() && <FaCheck />}
			</div>
			{label && <p>{label}</p>}
		</div>
	);
};

export default CheckBox;
