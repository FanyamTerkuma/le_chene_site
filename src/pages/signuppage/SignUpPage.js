import './SignUpPage.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Button, FormHeader, Illustration, Logo } from '../../components';
import { svgs } from '../../assets';

const SignUpPage = () => {
	let eyeoff = <FontAwesomeIcon icon={faEyeSlash} />;
	let eye = <FontAwesomeIcon icon={faEye} />;
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(eyeoff);
	const [confirmPasswordType, setConfirmPasswordType] = useState('password');
	const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeoff);

	const passwordToggle = () => {
		if (type === 'password') {
			setIcon(eye);
			setType('text');
		} else {
			setIcon(eyeoff);
			setType('password');
		}
	};

	const confirmPasswordToggle = () => {
		if (confirmPasswordType === 'password') {
			setConfirmPasswordIcon(eye);
			setConfirmPasswordType('text');
		} else {
			setConfirmPasswordIcon(eyeoff);
			setConfirmPasswordType('password');
		}
	};

	return (
		<div className='wrapper'>
			<div className='header'>
				<Logo />
			</div>
			<div className='illustration_container'>
				<Illustration src={svgs.signup_illustration} alt='an illustration with a lady and fingerprint' width='504px' />
			</div>
			<div className='form_section'>
				<div className='form_container'>
					<FormHeader title='SignUp' description='Fill the information to register credentials' />
					<form className='form'>
						<div className='input_wrapper'>
							<input className='input-field' type='email' placeholder='Enter email address' />
							<div className='input_icon'>
								<img src={svgs.person_icon} alt='a person icon' />
							</div>
						</div>
						<div className='input_wrapper'>
							<input className='input-field' type={type} placeholder='Enter password' />
							<div className='input_icon clickable_icon'>
								<span onClick={passwordToggle} className='input_icon clickable_icon'>
									{icon}
								</span>
							</div>
						</div>
						<div className='input_wrapper'>
							<input className='input-field' type={confirmPasswordType} placeholder='Confirm password' />
							<div className='input_icon clickable_icon'>
								<span onClick={confirmPasswordToggle} className='input_icon clickable_icon'>
									{confirmPasswordIcon}
								</span>
							</div>
						</div>
						<div className='button_container'>
							<Button label='Signup' fontWeight='700' fontFamily='inter' fontSize='20px' width='500px' height='74px' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
