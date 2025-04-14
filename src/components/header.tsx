"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "How to submit", path: "/HowToSubmit" },
  { name: "About", path: "/about" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center h-16 sm:h-20 px-5 sm:px-16 lg:px-28 shadow-md bg-black bg-opacity-90 relative">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={481}
          height={639}
          className="w-auto h-9 sm:h-12"
        />
      </Link>

      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="sm:hidden cursor-pointer z-20" onClick={toggleMenu}>
        <Image src="/hamburgerMenu.png" alt="Menu" width={31} height={40} />
      </div>

      {/* Desktop Navigation (hidden on mobile) */}
      <nav className="hidden sm:flex gap-5">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`transition-colors m-2.5 ${
              pathname === link.path
                ? "text-[#2EFF6C]"
                : "text-[#A9A9B3] hover:text-[#7E848F] "
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden pb-2 absolute top-16 right-0 w-full bg-black bg-opacity-95 shadow-md z-10">
          <div className="flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors px-5 py-3 ${
                  pathname === link.path
                    ? "text-[#2EFF6C]"
                    : "text-[#A9A9B3] hover:text-[#7E848F] "
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
