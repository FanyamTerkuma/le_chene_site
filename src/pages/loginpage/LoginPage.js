import React from 'react';
import { useState } from 'react';
import { svgs, pngs } from '../../assets';
import { Illustration, Logo, Button, FormHeader } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
	let eyeoff = <FontAwesomeIcon icon={faEyeSlash} />;
	let eye = <FontAwesomeIcon icon={faEye} />;
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(eyeoff);
	const handleToggle = () => {
		if (type === 'password') {
			setIcon(eye);
			setType('text');
		} else {
			setIcon(eyeoff);
			setType('password');
		}
	};

	return (
		<div
			className='md:container md:mx-auto flex justify-between p-8 bg-cover'
			style={{
				backgroundImage: `url(${pngs.background})`
			}}
		>
			<div className='flex flex-col justify-end items-center'>
				<Illustration src={svgs.login_illustration} alt=' an illustration of login page ' />
			</div>
			<div className='flex flex-col justify-center gap-6'>
				<div className=''>
					<Logo />
				</div>
				<div className=''>
					<FormHeader title='Login' description='Login to your account using registered credentials' />
					<form className='flex flex-col gap-6'>
						<div className='flex items-end h-20 border-b border-dark-blue'>
							<input className='w-full bg-transparent' type='email' placeholder='Enter email address' />
							<img src={svgs.person_icon} alt='a person icon' />
						</div>
						<div className='flex items-end h-20 border-b border-dark-blue'>
							<input className='w-full bg-transparent' type={type} placeholder='Enter password' />
							<span className='cursor-pointer' onClick={handleToggle}>
								{icon}
							</span>
						</div>
						<div className='flex justify-between '>
							<div className='flex gap-2'>
								<input type='checkbox' />
								<p className='text-dark-teal'>Remember me</p>
							</div>
							<div className='flex gap-2'>
								<p>Forgot password?</p>
								<a className='text-dark-teal' href='#'>
									click here
								</a>
							</div>
						</div>
						<Button label='Login' fontWeight='700' fontFamily='inter' fontSize='20px' width='500px' height='64px' />
						<div className='flex flex-col justify-evenly gap-2'>
							<div className='flex justify-center '>
								<p>Don't have an account yet?</p>
								<a className='text-dark-teal' href='#'>
									sign up
								</a>
							</div>
							<div className='flex items-center justify-center'>
								<div className='border-b  w-24 border-dark-blue'></div>
								<p>Or contiue with</p>
								<div className='border-b  w-24 border-dark-blue'></div>
							</div>
							<div className='flex justify-center'>
								<div className='flex justify-center gap-2 items-center border border-x-whitee shadow-2xl shadow-gray-600 h-16 w-96 rounded-lg'>
									<img src={svgs.google_logo} alt='google logo' />
									<a className='text-slate-900 font-bold' href='#'>
										create your new account with Google
									</a>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
