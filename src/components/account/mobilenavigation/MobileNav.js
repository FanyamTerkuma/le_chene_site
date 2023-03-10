import React, { useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import NavLinks from './NavLinks';

function MobileNav() {
	const [open, setOpen] = useState(false);

	const hamburgerIcon = <CgMenu size={30} onClick={() => setOpen(!open)} />;
	const closeIcon = <CgClose size={30} onClick={() => setOpen(!open)} />;

	return (
		<div className='bg-[#3A998E] text-white rounded ml-1 mb-2 cursor-pointer'>
			<div className='relative w-full p-2'>
				{open ? closeIcon : hamburgerIcon}
				{open && (
					<nav
						className='absolute z-30 mt-3 p-4 font-semibold green-outline-white-bg text-black w-max shadow-2xl'
						onClick={() => setOpen(!open)}>
						<NavLinks />
					</nav>
				)}
			</div>
		</div>
	);
}

export default MobileNav;
