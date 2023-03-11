import React from "react";
const Illustration = (props) => {
	return (
		<div>
			<img
				className='illustration'
				src={props.src}
				alt={props.alt}
				width={props.width}
			/>
		</div>
	);
};

export default Illustration;
