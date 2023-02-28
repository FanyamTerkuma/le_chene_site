import { Header, Footer, ProductDetail } from "..//src/components/index";
import {
  Cart,
  Login,
  SignUp,
  ResetPassword,
  NewPassword,
  LandingPage,
  Products,
  Fashion,
  Checkout,
} from "./pages";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import BgLogo from "./assets/pngs/background.png";
import LeCheneLogo from "./assets/svgs/logo.svg";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.app);
  const location = useLocation();

  const isAuthenticated = () => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/resetpassword" ||
      location.pathname === "/newpassword"
    )
      return false;
    return true;
  };

  return (
    <div
      className={`w-screen h-screen ${
        isAuthenticated() ? "overflow-y-scroll" : "relative"
      }`}
    >
      {isAuthenticated() ? (
        <Header />
      ) : (
        <>
          <img src={BgLogo} alt="background" className="h-full w-full" />
          <div className="absolute h-[20vh] top-0 left-[70%]">
            <img
              src={LeCheneLogo}
              alt="background"
              className="h-full aspect-square object-contain"
            />
          </div>
        </>
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:type" element={<Products />} />
        <Route path="/category/:name/:type" element={<Products />} />
        <Route path="/category/:name" element={<Fashion />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {user ? (
          <>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
          </>
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      {isAuthenticated() && <Footer />}
    </div>
  );
}

export default App;
