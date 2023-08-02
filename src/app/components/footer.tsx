"use Strict";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { BiMobileAlt } from "react-icons/bi";
import { SlEnvolope } from "react-icons/sl";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="inner_container">
          <h2 className="text-center">
            "Teaching is our expertise. We'll take care of it, so you can focus
            on your feature."
          </h2>
          <h3 className="text-center ceo_name">Syed Shakeer, CEO</h3>
          <h3 className="mt-[60px]">THE GEEK HALL</h3>

          <div className="address">
            <div className="address_col">
              <h5>Reservations Office</h5>
              <div
                style={{
                  display: "flex",
                  width: "75%",
                  margin: "10px auto",
                }}
              >
                <FaLocationDot className="icon" />
                <p>Hyderabd, Telangana, India</p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "75%",
                  margin: "10px auto",
                }}
              >
                <BiMobileAlt className="icon" />
                <p>123-456-7890</p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "75%",
                  margin: "10px auto",
                }}
              >
                <SlEnvolope className="icon" />
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="address_col">
              <h5>Office Hours</h5>
              <p className=" mt-[20px]">
                Monday to Friday <br />
                9:00 am to 6:00 pm
              </p>

              <p>
                Saturday
                <br />
                9:00 am to 12 noon
              </p>
            </div>
            <div className="address_col">
              <h5>Get Social</h5>
              <div className="socila_icons  mt-[20px]">
                <div>
                  <BsFacebook />
                </div>
                <div>
                  <BsTwitter />
                </div>
                <div>
                  <BsInstagram />
                </div>
              </div>
              <button className="footer_btn">Tag us in your photos</button>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <FaRegCopyright style={{ marginTop: 20 }} />{" "}
          <p>Copyrights @Geeks 2023</p>
        </div>
      </div>
    </div>
  );
}
