import React from 'react';

const Button = ({ title, width, transparent, icon, ...props }) => {
	return (
		<button
			{...props}
			className={`py-2 px-3 flex items-center justify-center space-x-1 text-sm text-center hover:shadow-lg ${
				transparent ? 'bg-transparent border border-[#26867B] text-[#26867B]' : 'text-white bg-[#26867B]'
			}  ${width ? width : 'w-40'} rounded-md`}>
			{icon && icon}
			{title}
		</button>
	);
};

export default Button;
