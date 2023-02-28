import { logoIcon } from "../../assets";
import React from "react";
import FooterItem from "./FooterItem";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-[#3fe0d0] py-8 px-5">
      <div className="w-full grid grid-cols-6 max-w-5xl mb-10 mx-auto">
        <div className="col-span-2">
          <img
            src={logoIcon}
            className="h-14 object-contain mb-2"
            alt="le-cheneIcon"
          />

          <FooterItem
            name="Lekki Gardens Horizontal Two Extention"
            icon={<HiLocationMarker />}
          />
          <FooterItem
            name="08037183004, 08188880374"
            icon={<BsFillTelephoneFill />}
          />
          <FooterItem name="chenelagos@gmail.com" icon={<AiOutlineMail />} />
          <FooterItem name="le_chene" icon={<AiOutlineInstagram />} />
        </div>

        <div className="pt-4">
          <h3 className="footerSectionHeader">About us</h3>

          <FooterItem name="Home" />
          <FooterItem name="Product" />
          <FooterItem name="Category" />
          <FooterItem name="Feed" />
        </div>

        <div className="pt-4">
          <h3 className="footerSectionHeader">Guides</h3>

          <FooterItem name="Terms & Conditions" />
          <FooterItem name="Special Offers" />
          <FooterItem name="Delivery Times" />
          <FooterItem name="FAQ's" />
        </div>

        <div className="pt-4 col-span-2">
          <h3 className="footerSectionHeader">Newsletter</h3>
          <FooterItem name="Subscribe to our news letter" />

          <div className="w-full mt-4 bg-white rounded-md flex items-center">
            <input
              type="text"
              className="bg-transparent outline-none px-3 py-1 text-xs flex-grow"
            />
            <button className="w-24 shadow-lg bg-[#3a998e] text-sm text-white py-2 rounded-r-md">
              subscribe
            </button>
          </div>
        </div>
      </div>

      <h4 className="text-sm text-slate-900 w-max mx-auto">
        &copy; Copyright le Chene. All rights reserved
      </h4>
    </div>
  );
};

export default Footer;
