import { Header, Footer, ProductDetail } from '..//src/components/index';

import { Cart, Login, SignUp, ResetPassword, NewPassword, LandingPage, Products, AccountPage } from './pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BgLogo from './assets/pngs/background.png';
import LeCheneLogo from './assets/svgs/logo.svg';
import ShippingInfo from './components/account/ShippingInfo/ShippingInfo';
import { ContactUs, CustomOrder, MyOrders, Profile, WishList } from './components/account';
import Dashboard from './pages/staffpages/Dashboard';
import AdminHome from './pages/staffpages/AdminHome';
import ProgressReport from './pages/staffpages/ProgressReport';
import Orders from './pages/staffpages/Orders';
import PayRoll from './pages/staffpages/PayRoll';
import SideBar from './components/sidebar/SideBar';
import TasksPage from './pages/staffpages/TasksPage';
import AdminProducts from './pages/adminpages/products/AdminProducts';
import AdminHomepage from './pages/adminpages/AdminHomepage';

function App() {
	let user = 'Helix'; // dummie user
	let admin = 'Helix admin';

	if (!user)
		return (
			<BrowserRouter>
				<div className='w-screen h-screen relative'>
					<img src={BgLogo} alt='background' className='h-full w-full' />

					<div className='absolute h-[20vh] top-0 left-[70%]'>
						<img src={LeCheneLogo} alt='background' className='h-full aspect-square object-contain' />
					</div>

					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/resetPassword' element={<ResetPassword />} />
						<Route path='/newPassword' element={<NewPassword />} />
						<Route path='*' element={<Navigate replace to='/login' />} />
					</Routes>
				</div>
			</BrowserRouter>
		);
	if (admin)
		return (
			<BrowserRouter>
				<div className='sm:flex p-1'>
					{/* <SideBar /> */}
					<div className='w-full '>
						<Routes>
							temporarily commented code to work on the admin view and add pages
							{/* <Route path='/' element={<AdminHome />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/tasks' element={<TasksPage />} />
							<Route path='/progressreport' element={<ProgressReport />} />
							<Route path='/orders' element={<Orders />} />
							<Route path='/payroll' element={<PayRoll />} /> */}
							<Route path='/adminpage' element={<AdminHomepage />}>
								<Route path='' element={<AdminProducts />} />
								<Route path='products' element={ <AdminProducts /> } />
								
							</Route>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		);
	return (
		<BrowserRouter>
			<div className='w-screen h-screen overflow-y-scroll'>
				<Header />
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/products' element={<Products />} />
					{/* <Route path="/checkout" element={<Checkout/>}/> */}
					<Route path='/accountpage' element={<AccountPage />} />
					<Route path='/shippingInfo' element={<ShippingInfo />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/wishlist' element={<WishList />} />
					<Route path='/myorders' element={<MyOrders />} />
					<Route path='/customorder' element={<CustomOrder />} />
					<Route path='/contactus' element={<ContactUs />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/product/:id' element={<ProductDetail />} />
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
