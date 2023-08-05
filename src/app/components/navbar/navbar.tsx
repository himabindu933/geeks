"use client";

import Link from "next/link";
import SearchBar from "../searchbar/SearchBar";
import { AiOutlineShoppingCart } from "react-icons/Ai";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h1>
          <Link href="/">GEEKS</Link>
        </h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Link href="/categories">Categories</Link>
        <Link href="/business">Geeks Business</Link>
        <Link href="/mentors">Geeks Mentors</Link>
      </div>
      <div>
        <AiOutlineShoppingCart />
      </div>

      <div>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </nav>
  );
}
