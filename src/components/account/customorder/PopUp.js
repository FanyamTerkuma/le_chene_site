import React, { useState } from 'react';
import { MdArrowDropDown, MdClose } from 'react-icons/md';
import MeasurementModal from './MeasurementModal';
import SizeModal from './SizeModal';

function PopUp({ label, sizemodal }) {
	const [open, setOpen] = useState(false);

	const showMenu = () => {
		setOpen(!open);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setOpen(!open);
	};
	return (
		<div>
			<div className='font-semibold flex items-center'>
				<p>{label}</p>
				<p className='text-red-400 '>*</p>
			</div>
			<div className='relative flex items-center justify-between p-2 bg-[#3A998E] text-white rounded-lg md:w-[26vw] cursor-pointer'>
				{open &&
					(sizemodal ? (
						<p className='absolute z-20  shadow-2xl  text-white indent-2 top-1 right-8 cursor-pointer'>
							{open && <SizeModal handleSubmit={handleSubmit} />}
						</p>
					) : (
						<p className='absolute z-20 shadow-2xl  text-white  top-1  right-8 cursor-pointer'>
							<MeasurementModal handleSubmit={handleSubmit} />
						</p>
					))}
				<div onClick={showMenu}>Select an option</div>
				{open ? <MdClose size={20} onClick={showMenu} /> : <MdArrowDropDown size={20} onClick={showMenu} />}
			</div>
		</div>
	);
}

export default PopUp;
