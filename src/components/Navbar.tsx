"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // optional icon library

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-28 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div
        className="w-[154px] h-[38px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-07/3Ze6amXgTP.png)] 
        bg-cover bg-no-repeat"
      />

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-6 text-[#000] font-['Suisse_Int\'l_Mono'] text-[15px] leading-[13px] tracking-[-0.45px] whitespace-nowrap">
        <Link href="/team" className="text-center">
          TEAM
        </Link>
        <Link href="/careers" className="text-right">
          CAREERS
        </Link>
        <Link href="/newsroom" className="text-center">
          NEWSROOM
        </Link>
        <Link href="/contact" className="text-center">
          CONTACT
        </Link>
      </nav>

      {/* Mobile Hamburger Icon */}
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#ededed] px-4 sm:px-6 py-4 shadow-md flex flex-col gap-4 text-[#000] font-['Suisse_Int\'l_Mono'] text-[15px] tracking-[-0.45px] lg:hidden">
          <Link href="/team" onClick={() => setIsOpen(false)}>
            TEAM
          </Link>
          <Link href="/careers" onClick={() => setIsOpen(false)}>
            CAREERS
          </Link>
          <Link href="/newsroom" onClick={() => setIsOpen(false)}>
            NEWSROOM
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
