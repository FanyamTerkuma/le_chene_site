import Account from '../../components/account/Account';
import { IoPersonCircleOutline, IoHeartOutline, IoExitOutline, IoCardOutline } from 'react-icons/io5';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BsTruck } from 'react-icons/bs';
import { Profile, WishList, MyOrders, ContactUs, CustomOrder } from '../../components/account';
import { pngs } from '../../assets';

//account page tabs
const tabs = [
	{
		header: 'Profile',
		icon: <IoPersonCircleOutline size={25} />,
		component: <Profile />
	},
	{
		header: 'Wishlist',
		icon: <IoHeartOutline size={25} />,
		component: <WishList />
	},
	{
		header: 'My orders',
		icon: <BsTruck size={25} />,
		component: <MyOrders />
	},
	{
		header: 'Custom order',
		icon: <img src={`${pngs.tape}`} alt='' />,
		component: <CustomOrder />
	},

	{
		header: 'Contact us',
		icon: <RiCustomerService2Fill size={25} />,
		component: <ContactUs />
	}
];

function AccountPage() {
	return <Account tabs={tabs} />;
}

export default AccountPage;
