"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">home</Link>
      <Link href="/testimonials">test</Link>
      <Link href="/about">about</Link>
    </div>
  );
}
