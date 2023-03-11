import React from 'react';

function LabelAndData({ label, data }) {
	return (
		<div className='  flex justify-between sm:justify-start gap-1 items-center w-full'>
			<h2 className='font-semibold'>{label}:</h2>
			<p className=''>{data}</p>
		</div>
	);
}

export default LabelAndData;
