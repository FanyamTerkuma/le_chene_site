import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import { SlCloudUpload } from 'react-icons/sl';
import AdminDropdown from '../../../components/admindropdown/AdminDropdown';
import AdminInput from '../../../components/admininput/AdminInput';

const colors = ['red', 'blue', 'white', 'yellow', 'green', 'brown', 'aquamarine', 'teal'];
const sizes = ['small', 'medium', 'large', 'XL', 'XXL', '3XL'];
const category = ['suit', 'coats'];
function ProductUpload() {
	const [files, setFiles] = useState([]);
	const [isDragging, setIsDragging] = useState(false);
	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		const imageFiles = [...e.dataTransfer.files];
		setFiles([...files, ...imageFiles]);
		console.log(files);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};

	const handleUpload = () => {
		console.log(files);
	};
	return (
		<main className='flex justify-center  w-full h-screen overflow-y-scroll  hidden-scrollbar'>
			<div className=''>
				<p className='font-semibold px-1'>Add Product</p>
				<form className='flex flex-col gap-4'>
					<div
						onDrop={handleDrop}
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
						className={` flex flex-col justify-center gap-4 font-semibold items-center border rounded-md border-dark-teal w-[34rem] h-[22rem]  ${
							isDragging ? 'transition-colors: bg-gray-50 duration-200 ease-in-out shadow-lg' : ''
						}`}>
						<SlCloudUpload size={50} color='#26867B' />
						<p>Drag and drop files here</p>
						<p>or</p>
						<label htmlFor='files' className='cursor-pointer text-white  text-center rounded-md w-40 px-3 py-2 space-x-1 text-sm  hover:shadow-lg  bg-[#26867B]'>
							Browse files
						</label>
						<input id='files' type='file' hidden multiple onChange={(e) => setFiles([...files, ...e.target.files])} />
					</div>
					<div>
						{files.length > 0 && (
							<ul>
								{files.map((file, id) => (
									<li key={id} className='flex gap-2 items-center pb-2 '>
										<img className='w-20 rounded-md h-24 shadow-sm' src={URL.createObjectURL(file)} alt={`${file.name}`} />
										<span className='px-4 font-semibold shadow-sm border border-dark-teal'>
											<p>{file.name}</p>
											<p>{(file.size / (1024 * 1024)).toFixed(2)}MB</p>
										</span>
									</li>
								))}
							</ul>
						)}
					</div>
					<div className='grid grid-cols-2 gap-2'>
						<AdminInput type='text' label='Product Name' />
						<div className='flex flex-col '>
							<label htmlFor='category' className='font-semibold text-sm'>
								Category
							</label>
							<select id='category' className='bg-white h-9 cursor-pointer border border-dark-teal  capitalize px-1 '>
								{category.map((itemCategory) => (
									<option value={itemCategory}>{itemCategory}</option>
								))}
							</select>
						</div>
						<AdminInput type='text' label='sub category' placeholder='Male suit' />
						<AdminInput type='number' label='price' min={0} />
						<AdminDropdown label='colour' colours={colors} />
						<AdminDropdown label='size' sizes={sizes} />
					</div>
					<div className='flex justify-center'>
						<Button title='submit' className='w-full' />
					</div>
				</form>
			</div>
		</main>
	);
}

export default ProductUpload;
