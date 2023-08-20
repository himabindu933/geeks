"use client";

import Link from "next/link";
import SearchBar from "../searchbar/SearchBar";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import Imgtag from "next/image";
import logo from "../../images/geek_logo.png";

export default function Navbar() {
  return (
    <div className="navbar_parent">
      <nav className="navbar inner_container">
        <div>
          <h1>
            <Link href="/">
              <Imgtag src={logo} alt="logo" className="Navbar_logo" />
            </Link>
          </h1>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="navbar__pages">
          <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
              <div className="submenu">
                <a href="#">Visual Arts</a>
                <div className="submenu-content">
                  <a href="#">2D</a>
                  <a href="#">Visual Effects</a>
                  <a href="#">3D</a>
                  <a href="#">Gaming</a>
                  <a href="#">Visualisation</a>
                  <a href="#">Editing</a>
                </div>
              </div>
              <div className="submenu">
                <a href="#">Fine Arts</a>
                <div className="submenu-content">
                  <a href="#">Drawing</a>
                  <a href="#">Painting</a>
                  <a href="#">Concept Arts</a>
                </div>
              </div>
              <a href="#">Applied Arts</a>
            </div>
          </div>
          <Link className="nav-bar-item" href="/business">
            Geeks Business
          </Link>
          <Link className="nav-bar-item" href="/mentors">
            Geeks Mentors
          </Link>
        </div>

        <div className="navbar__buttons">
          <div>
            <AiOutlineShoppingCart
              size={30}
              style={{ cursor: "pointer" }}
              className="cart"
            />
          </div>
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </nav>
    </div>
  );
  // return (
  //   <nav className="navbar">
  //     <div>
  //       <h1>
  //         <Link href="/">GEEKS</Link>
  //       </h1>
  //     </div>
  //     <div>
  //       <SearchBar />
  //     </div>
  //     <div className="navbar__pages">
  //       <div className="dropdown">
  //         <Link className="dropbtn" href="/categories">
  //           Categories
  //         </Link>

  //         {/* <button className="dropbtn"></button> */}
  //         <div className="dropdown-content">
  //           <a href="#">Link 1</a>
  //           <a href="#">Link 2</a>
  //           <a href="#">Link 3</a>
  //         </div>
  //       </div>
  //       <Link href="/business">Geeks Business</Link>
  //       <Link href="/mentors">Geeks Mentors</Link>
  //     </div>

  //     <div className="navbar__buttons">
  //       <div>
  //         <AiOutlineShoppingCart size={30} style={{ cursor: "pointer" }} />
  //       </div>
  //       <button>Sign Up</button>
  //       <button>Log In</button>
  //     </div>
  //   </nav>
  // );
}
