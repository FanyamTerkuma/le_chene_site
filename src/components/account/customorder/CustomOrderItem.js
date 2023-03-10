import React, { useState } from 'react';
import Button from '../../Button/Button';
import Dropdown from './Dropdown';
import TextBox from './TextBox';
import PopUp from './PopUp';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
const gender = ['Male', 'Female'];

function CustomOrderItem() {
	const [imageIndex, setImageIndex] = useState(0);
	const [files, setFiles] = useState({ images: [] });

	const moveLeft = () => {
		setImageIndex(imageIndex > 0 ? imageIndex - 1 : files.images.length - 1);
	};
	const moveRight = () => {
		setImageIndex(imageIndex < files.images.length - 1 ? imageIndex + 1 : 0);
	};

	const handleChange = (e) => {
		setFiles({ images: [...files.images, ...e.target.files] });
	};

	console.log(files.images);
	return (
		<div className='flex flex-col gap-2 w-full'>
			<div className='flex md:flex-row flex-col items-center  justify-center gap-12 w-full'>
				<div className='flex flex-col gap-3 w-2/3 md:w-fit'>
					<Dropdown options={gender} label='Gender' />
					<PopUp label='Size' sizemodal />
					<PopUp label='Edit measurement' />
					<TextBox label='Type of fabric' />
					<TextBox label='Color' />
					<TextBox label='Description' rows={4} />
				</div>
				<div className='h-auto w-[15.5em] md:h-fit md:w-[18em] flex flex-col items-center justify-center gap-2'>
					<div className='flex '>
						<div className='flex items-center'>
							<CgChevronLeft className='cursor-pointer ' size={60} color='#0a9396' onClick={moveLeft} />
						</div>
						<div className='flex  w-[15.5em]  h-[24em] rounded-lg bg-[#cad2c5]'>
							{files.images.length !== 0 && (
								<img
									className={`transition delay-700 duration-300 ease-in-out rounded-lg w-full h-full object-cover`}
									src={URL.createObjectURL(files.images[imageIndex])}
									alt='custom attire'
								/>
							)}
						</div>
						<div className='flex items-center'>
							<CgChevronRight className='cursor-pointer ' size={60} color='#0a9396' onClick={moveRight} />
						</div>
					</div>
					<button className='flex justify-center '>
						<input className='' id='files' type='file' hidden onChange={handleChange} />
						<label
							htmlFor='files'
							className='space-x-1 text-sm text-center  text-white bg-[#26867B] rounded-lg p-2 w-40 cursor-pointer hover:shadow-lg'>
							Upload style
						</label>
					</button>
				</div>
			</div>
			<div className='flex md:justify-center justify-end'>
				<Button title='Submit/Add to cart' />
			</div>
		</div>
	);
}

export default CustomOrderItem;
