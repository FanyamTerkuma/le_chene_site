import { logoIcon } from '../../assets';

const Logo = (props) => {
	return (
		<div>
			<img className='le_chene_logo' src={logoIcon} alt='le_chene logo' style={{ width: `${props.width}` }} />
		</div>
	);
};

export default Logo;
