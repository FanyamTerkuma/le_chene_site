import React, { useState } from 'react';
import Button from '../../Button/Button';

const inputs = [
	{ label: 'Shoulder', name: 'shoulder', inputType: 'number' },
	{ label: 'Hand length', name: 'handLength', inputType: 'number' },
	{ label: 'Chest bust', name: 'chestBust', inputType: 'number' },
	{ label: 'Stomach', name: 'stomach', inputType: 'number' },
	{ label: 'Top length', name: 'topLength', inputType: 'number' },
	{ label: 'Round arm', name: 'roundArm', inputType: 'number' },
	{ label: 'Tigh', name: 'tigh', inputType: 'number' },
	{ label: 'Around leg', name: 'aroundLeg', inputType: 'number' },
	{ label: 'Leg length', name: 'legLength', inputType: 'number' },
	{ label: 'Waist', name: 'waist', inputType: 'number' },
	{ label: 'Knee', name: 'knee', inputType: 'number' }
];

function MeasurementModal({ handleSubmit }) {
	const [value, setvalue] = useState({
		shoulder: 0,
		handLength: 0,
		chestBust: 0,
		stomach: 0,
		topLength: 0,
		roundArm: 0,
		tigh: 0,
		aroundLeg: 0,
		legLength: 0,
		waist: 0,
		knee: 0
	});
	const onChange = (e) => {
		setvalue({ ...value, [e.target.name]: e.target.value });
	};
	console.log(value);
	return (
		<div className='flex flex-col gap-2 bg-white text-black w-auto md:w-[26vw] h-auto py-4 px-4 '>
			{inputs.map((input) => (
				<div className='flex flex-col gap-1'>
					<label>{input.label}</label>
					<input
						key={input.name}
						className='border border-black indent-2'
						type={input.inputType}
						name={input.name}
						min={0}
						value={value[input.name]}
						onChange={onChange}
					/>
				</div>
			))}
			<div className='flex justify-center'>
				<Button title='submit' onClick={handleSubmit} />
			</div>
		</div>
	);
}

export default MeasurementModal;
