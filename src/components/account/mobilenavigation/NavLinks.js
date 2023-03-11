import React from 'react';
import { Link } from 'react-router-dom';
function NavLinks() {
	return (
		<nav className=' flex flex-col gap-2 '>
			<Link className='hover:border-b-2 border-[#3A998E] w-fit' to={'/profile'}>
				Profile
			</Link>
			<Link className='hover:border-b-2 border-[#3A998E] w-fit' to={'/wishlist'}>
				Wishlist
			</Link>
			<Link className='hover:border-b-2 border-[#3A998E] w-fit' to={'/myorders'}>
				My orders
			</Link>
			<Link className='hover:border-b-2 border-[#3A998E] w-fit' to={'/customorder'}>
				Custom order
			</Link>
			<Link className='hover:border-b-2 border-[#3A998E] w-fit' to={'/contactus'}>
				Contact us
			</Link>
			<Link className='hover:border-b-2 border-[#3A998E] w-fit'>Log out</Link>
		</nav>
	);
}

export default NavLinks;
