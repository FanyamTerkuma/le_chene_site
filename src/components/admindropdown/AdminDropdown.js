import React from 'react';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { HiMinusSm } from 'react-icons/hi';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

function AdminDropdown({ label, sizes, colours }) {
	const [isOpen, setIsOpen] = useState(false);
	const [sizesList, setsizesList] = useState(sizes);
	const [coloursList, setColoursList] = useState(colours);
	const [customColor, setCustomColour] = useState('');
	const [customColors, setCustomColors] = useState([]);
	const [selectedValue, setSelectedValue] = useState('Select');
	const [selectedSizes, setSelectedSizes] = useState([]);
	const [customSize, setCustomSize] = useState('');
	const [customSizes, setCustomSizes] = useState('');
	const [selectedColors, setSelectedColors] = useState([]);

	const handleClick = (option) => {
		setSelectedValue(option);
		setSelectedSizes((sizes) => [...sizes, option]);
		setSelectedColors([...selectedColors, option]);
		setIsOpen(false);
		const remainingColors = coloursList.filter((item) => item !== option);
		setColoursList(remainingColors);
	};

	const removeColor = (option) => {
		const newColors = selectedColors.filter((item) => item !== option);
		setSelectedColors(newColors);
		if (customColors.some((color) => color === option)) {
			setColoursList(coloursList.filter((item) => item !== option));
		} else {
			setColoursList((colors) => [...colors, option]);
		}
	};
	const removeSize = (option) => {
		const newSizes = selectedSizes.filter((item) => item !== option);
		setSelectedSizes(newSizes);
		if (customSizes.some((size) => size === option)) {
			setsizesList(sizesList.filter((item) => item !== option));
		} else {
			setsizesList((sizes) => [...sizes, option]);
		}
	};

	const addColor = (e) => {
		if (e.keyCode === 13 || e.key === 'Enter') {
			e.preventDefault();
			setCustomColors((color) => [...color, customColor]);
			if (!selectedColors.includes(customColor)) {
				setSelectedColors((colors) => [...colors, customColor]);
			} else {
				setSelectedColors((colors) => [...colors]);
			}

			setCustomColour('');
		}
	};
	const addSize = (e) => {
		if (e.keyCode === 13 || e.key === 'Enter') {
			e.preventDefault();
			setCustomSizes((size) => size, customSize);
			if (!selectedSizes.includes(customSize)) {
				setSelectedSizes((sizes) => [...sizes, customSize]);
			} else {
				setSelectedSizes((sizes) => [...sizes]);
			}

			setCustomSize('');
		}
	};
	const handleColourChange = (e) => {
		setCustomColour(e.target.value);
	};
	const handleSizeChange = (e) => {
		setCustomSize(e.target.value);
	};
	return (
		<div>
			<div className='font-semibold text-sm capitalize relative'>{label}</div>
			<div className='h-auto cursor-pointer border border-dark-teal px-2 py-1 flex items-center justify-between capitalize mb-1 '>
				{label === 'colour' ? (
					<div className='grid grid-cols-1 gap-1 '>
						{selectedColors &&
							selectedColors.map((selected) => (
								<span
									className='grid grid-cols-2 items-center justify-items-center  w-fit py-1 px-1  rounded shadow text-sm '
									style={{ backgroundColor: `${selected}` }}>
									<p> {selected}</p>
									<IoIosClose size={20} onClick={() => removeColor(selected)} />
								</span>
							))}

						<input
							className='focus:outline-none border-none p-1 text-sm'
							type='text'
							value={customColor}
							onChange={handleColourChange}
							placeholder='Select or Type color'
							onKeyDownCapture={(e) => addColor(e)}
						/>
					</div>
				) : (
					<div>
						{selectedSizes.map((size) => (
							<div className='flex '>
								<p>{size}</p>
								<HiMinusSm color='Red' onClick={() => removeSize(size)} />
							</div>
						))}
						<input
							className='focus:outline-none border-none p-1 text-sm'
							type='text'
							value={customSize}
							onChange={handleSizeChange}
							placeholder='Select or Type size'
							onKeyDownCapture={(e) => addSize(e)}
						/>
					</div>
				)}
				{isOpen ? (
					<TiArrowSortedUp size={22} onClick={() => setIsOpen(!isOpen)} color='#26867B' />
				) : (
					<TiArrowSortedDown size={22} onClick={() => setIsOpen(!isOpen)} color='#26867B' />
				)}
			</div>

			{isOpen && (
				<ul className=' cursor-pointer relative  '>
					<div className='border border-dark-teal absolute top-0 shadow-md z-20 w-full'>
						{label === 'colour'
							? coloursList.map((option, id) => (
									<li
										key={id}
										className={` bg-white  capitalize ${
											option === coloursList[0] ? 'border-t-none' : 'border-t'
										} px-2 border-dark-teal`}
										onClick={() => handleClick(option, id)}>
										{option}
									</li>
							  ))
							: sizesList.map((option, id) => (
									<li
										key={id}
										className={` bg-white  capitalize ${
											option === sizesList[0] ? 'border-t-none' : 'border-t'
										} px-2 border-dark-teal`}
										onClick={() => handleClick(option, id)}>
										{option}
									</li>
							  ))}
					</div>
				</ul>
			)}
		</div>
	);
}

export default AdminDropdown;
