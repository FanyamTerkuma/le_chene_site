import { svgs } from '../../assets';

const Logo = (props) => {
	return (
		<div>
			<img className='le_chene_logo' src={svgs.le_chene_logo} alt='le_chene logo' style={{ width: `${props.width}` }} />
		</div>
	);
};

export default Logo;
