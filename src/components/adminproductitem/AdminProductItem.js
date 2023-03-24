import React, { useState } from 'react';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';
import { TbCurrencyNaira } from 'react-icons/tb';
import { BsChevronDown, BsChevronUp, BsTrash } from 'react-icons/bs';

function AdminProductItem({ availableQuantity, sizes, colours, price, productID, productCategory }) {
	const [quantity, setQuantity] = useState(availableQuantity);
	const [selectedSizes, setSelectedSizes] = useState(['S']);
	const [sizesList, setSizesList] = useState(sizes);
	const [customSize, setCustomSize] = useState();
	const [customSizes, setCustomSizes] = useState();
	const [itemPrice, setItemPrice] = useState(price);
	const [selectedColours, setSelectedColours] = useState([]);
	const [coloursList, setColoursList] = useState(colours);
	const [customColour, setCustomColour] = useState('');
	const [openSizeDropdown, setOpenSizeDropdown] = useState(false);
	const [openColorDropdown, setOpenColorDropdown] = useState(false);

	const handleColorChange = (colour) => {
		setSelectedColours((colours) => [...colours, colour]);
		setOpenColorDropdown(!openColorDropdown);
		const remainingColours = coloursList.filter((item) => item !== colour);
		setColoursList(remainingColours);
	};
	const handleSizeChange = (size) => {
		setSelectedSizes((sizes) => [...sizes, size]);
		setOpenSizeDropdown(!openSizeDropdown);
	};
	const addColor = (e) => {
		if (e.keyCode === 13 || e.key === 'Enter') {
			e.preventDefault();

			if (!selectedColours.includes(customColour)) {
				setSelectedColours((colours) => [...colours, customColour]);
			} else {
				setSelectedColours((colours) => [...colours]);
			}

			setCustomColour('');
			setOpenColorDropdown(!openColorDropdown);
		}
	};
	const addSize = (e) => {
		if (e.keyCode === 13 || e.key === 'Enter') {
			e.preventDefault();

			if (!selectedSizes.includes(customSize)) {
				setSelectedSizes((sizes) => [...sizes, customSize]);
			} else {
				setSelectedSizes((sizes) => [...sizes]);
			}
			setCustomSize('');
			setOpenSizeDropdown(!openSizeDropdown);
		}
	};
	const handleColorInput = (e) => {
		setCustomColour(e.target.value);
	};
	const handleSizeInput = (e) => {
		setCustomSize(e.target.value);
	};

	const removeSize = (size) => {
		const newSizes = selectedSizes.filter((item) => item !== size);
		setSelectedSizes(newSizes);
		if (customSizes.some((item) => item === size)) {
			setSizesList(sizesList.filter((item) => item !== size));
		} else {
			setSizesList((items) => [...items, size]);
		}
	};
	const removeColour = (colour) => {
		const newColours = selectedColours.filter((item) => item !== colour);
		setSelectedColours(newColours);
		if (customColour.some((item) => item === colour)) {
			setColoursList(coloursList.filter((item) => item !== colour));
		} else {
			setColoursList((items) => [...items, colour]);
		}
	};

	return (
		<div className='table-row-group border border-dark-teal text-center shadow '>
			<div className='table-cell  py-3'>{productID}</div>
			<div className='table-cell'>{productCategory}</div>
			<div className='table-cell '>
				<div className='flex items-center justify-center '>
					<RiArrowLeftSFill
						className='cursor-pointer'
						size={26}
						color='#26867B'
						onClick={() => setQuantity((quantity) => (quantity > 0 ? quantity - 1 : 0))}
					/>
					<span className='w-6 text-center'>{quantity}</span>
					<RiArrowRightSFill
						className='cursor-pointer'
						size={26}
						color='#26867B'
						onClick={() => setQuantity((quantity) => quantity + 1)}
					/>
				</div>
			</div>
			<div className='table-cell relative fixed'>
				<div className='flex items-center justify-center w-full py-1'>
					<div className='grid grid-cols-4 gap-1 '>
						{selectedSizes.map((selectedSize) => (
							<div className='border'>
								<p className='font-semibold  '>{selectedSize}</p>
								<div className='flex items-center justify-center'>
									<BsTrash
										color='red'
										className='cursor-pointer'
										onClick={() => removeSize(selectedSize)}
									/>
								</div>
							</div>
						))}
					</div>

					{openSizeDropdown ? (
						<BsChevronUp
							className='cursor-pointer'
							color='#26867B'
							onClick={() => setOpenSizeDropdown(!openSizeDropdown)}
						/>
					) : (
						<BsChevronDown
							className='cursor-pointer'
							color='#26867B'
							onClick={() => setOpenSizeDropdown(!openSizeDropdown)}
						/>
					)}
				</div>
				{openSizeDropdown && (
					<div className='cursor-pointer absolute z-20  left-0 top-8 border border-dark-teal bg-white shadow-md'>
						<input
							className='border  p-1 m-1 w-[6rem] '
							type='text'
							placeholder='Type size'
							value={customSize}
							onChange={handleSizeInput}
							onKeyDownCapture={(e) => addSize(e)}
						/>
						{sizes.map((size) => (
							<p onClick={() => handleSizeChange(size)}>{size}</p>
						))}
					</div>
				)}
			</div>
			<div className='table-cell relative'>
				<div className='flex justify-between items-center p-1 gap-1'>
					<div className='grid grid-cols-4 items-align-center gap-1 '>
						{selectedColours.length > 0 &&
							selectedColours.map((clr) => (
								<div className='border flex flex-col w-fit '>
									<p className='border shadow h-5 w-5 ' style={{ backgroundColor: `${clr}` }}></p>
									<div className='flex  justify-center  item-center py-1 cursor-pointer'>
										<BsTrash color='red' onClick={() => removeColour(clr)} />
									</div>
								</div>
							))}
					</div>
					{openColorDropdown ? (
						<BsChevronUp
							className='cursor-pointer'
							color='#26867B'
							onClick={() => setOpenColorDropdown(!openColorDropdown)}
						/>
					) : (
						<BsChevronDown
							className='cursor-pointer'
							color='#26867B'
							onClick={() => setOpenColorDropdown(!openColorDropdown)}
						/>
					)}
				</div>
				{openColorDropdown && (
					<div className='cursor-pointer absolute z-20  shadow-md w-fit  top-8 border border-dark-teal bg-white '>
						<input
							className='border px-1 m-1 w-[9rem] text-black'
							type='text'
							placeholder='Type colour'
							value={customColour}
							onKeyDownCapture={(e) => addColor(e)}
							onChange={handleColorInput}
						/>
						{coloursList.map((colour) => (
							<p onClick={() => handleColorChange(colour)}>{colour}</p>
						))}
					</div>
				)}
			</div>
			<div className='table-cell'>
				<div className=' flex justify-center items-center'>
					<TbCurrencyNaira />
					<input
						className='w-[5rem]'
						type='text'
						value={itemPrice.toLocaleString()}
						onChange={(e) => setItemPrice(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}

export default AdminProductItem;
