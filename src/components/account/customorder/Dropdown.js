import React, { useState } from 'react';
import { MdArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

function Dropdown({ options, label }) {
	const [value, setValue] = useState('Select an option');
	const [open, setOpen] = useState(false);
	const showMenu = () => {
		setOpen((open) => !open);
	};
	const selectedValue = (option) => {
		setValue(option);
		setOpen(!open);
	};
	return (
		<div>
			{label && (
				<div className='font-semibold flex items-center'>
					<p>{label}</p>
					<p className='text-red-400 '>*</p>
				</div>
			)}
			<div className='relative flex items-center justify-between p-2  bg-[#3A998E] text-white rounded-lg md:w-[26vw] cursor-pointer'>
				<div onMouseEnter={showMenu}>{value}</div>
				{open ? (
					<MdOutlineArrowDropUp size={20} onClick={showMenu} />
				) : (
					<MdArrowDropDown size={20} onClick={showMenu} />
				)}
			</div>
			{open && (
				<div
					className='absolute z-20  bg-[#3A998E] shadow-xl rounded mt-[.05em] text-white indent-2 max-h-[100px] overflow-x-auto hidden-scrollbar cursor-pointer'
					onMouseLeave={showMenu}>
					{options.map((option) => (
						<div
							onClick={() => selectedValue(option)}
							className='border-b py-2 px-4 hover:bg-[#D9D9D9] hover:text-black'>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
