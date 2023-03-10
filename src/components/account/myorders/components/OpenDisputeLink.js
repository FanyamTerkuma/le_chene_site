import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronForwardSharp } from 'react-icons/io5';

function OpenDisputeLink() {
	return (
		<div className='flex  items-center gap-1 green-outline-white-bg p-3  '>
			<Link className='font-semibold'>Open dispute</Link>
			<IoChevronForwardSharp />
		</div>
	);
}

export default OpenDisputeLink;
