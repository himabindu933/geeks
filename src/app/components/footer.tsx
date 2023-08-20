"use client";
import { FaLocationDot } from "react-icons/fa6";
import { BiMobileAlt, BiLogoYoutube } from "react-icons/bi";
import { SlEnvolope } from "react-icons/sl";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Imgtag from "next/image";
import logo from "../images/geek_logo.png";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="inner_container">
          {/* <h2 className="text-center">
            "Teaching is our expertise. We'll take care of it, so you can focus
            on your feature."
          </h2> */}
          {/* <h3 className="text-center ceo_name">Syed Shakeer, CEO</h3> */}
          {/* <h3 className="mt-[60px]">THE GEEK HALL</h3> */}
          <Imgtag
            alt="logo"
            src={logo}
            width={150}
            height={150}
            style={{ marginLeft: "-10px" }}
          />
          <div className="address">
            {/* <div className="address_col">
               <h5>Reservations Office</h5> 
              <div className="adress_info">
                <FaLocationDot className="icon" />
                <p>Hyderabd, Telangana, India</p>
              </div>
              <div className="adress_info">
                <BiMobileAlt className="icon" />
                <p>123-456-7890</p>
              </div>
              <div className="adress_info">
                <SlEnvolope className="icon" />
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="address_col">
               <h5>Office Hours</h5> 
              <p style={{ marginBottom: 40 }}>
                Monday to Friday <br />
                9:00 am to 6:00 pm
              </p>

              <p>
                Saturday
                <br />
                9:00 am to 12 noon
              </p>
            </div> */}
            <div className="address_col">
              <p>Company</p>
              <p>About Us</p>
              <p>Blogs</p>
              <p>Newsrooms</p>
              <p>Carrers</p>
            </div>
            <div className="address_col">
              <p>Support</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Terma & Conditions</p>
              <p>Refund Policy</p>
              <p>FAQ</p>
            </div>
            <div className="address_col">
              {/* <h5>Get Social</h5> */}
              <p>Connect with us</p>
              <div className="socila_icons">
                <div>
                  <BsFacebook className="sicon1" />
                </div>
                <div>
                  <BsTwitter className="sicon2" />
                </div>
                <div>
                  <BsInstagram className="sicon3" />
                </div>
                <div>
                  <BiLogoYoutube className="sicon3" />
                </div>
                <div>
                  <AiFillMail className="sicon3" />
                </div>
              </div>
              {/* <button className="footer_btn">Tag us in your photos</button> */}
            </div>
            <div className="address_col sign_up">
              <p>Ready to get started?</p>
              <button>
                Signup now <span>&#x3e;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
