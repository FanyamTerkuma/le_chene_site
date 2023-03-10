import React from 'react';
import { PaystackButton } from 'react-paystack';

function PaymentInterface() {
	const publicKey = 'pk_test_b5a88a245bbbc963d2d21a43a92e259911a33fc1';
	const amount = 15000 * 100; //amount in kobo
	const email = 'fanyamlawrence@gmail.com';
	const componentProps = {
		email,
		amount,
		publicKey,
		text: 'Pay Now'
	};
	return (
		<PaystackButton
			className='bg-[#26867B] rounded px-2 py-1 shadow-custom-shadow ml-4 text-white '
			{...componentProps}
		/>
	);
}

export default PaymentInterface;
