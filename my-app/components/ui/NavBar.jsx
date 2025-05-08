"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = (path) => ({
    fontFamily: "var(--text-font)",
    color: "var(--main-text-color)",
    fontWeight: pathname === path ? "bold" : "normal",
    textDecoration: pathname === path ? "underline" : "none",
  });

  return (
    <nav className="w-full px-6 py-5 bg-white shadow-sm">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              src="clear_background_logo.png"
              alt="NYC AlgoMatcher Logo"
              className="h-10 w-auto"
            />
          </Link>
          <Link href="/">
            <h1
              className="text-xl font-bold"
              style={{
                fontFamily: "var(--header-font)",
                color: "var(--main-text-color)",
              }}
            >
              NYC AlgoMatcher
            </h1>
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg">
          <Link href="/survey" style={navLinkStyle("/survey")}>
            Survey
          </Link>
          <Link href="/background" style={navLinkStyle("/background")}>
            Learn More
          </Link>
          <Link href="/contact" style={navLinkStyle("/contact")}>
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden text-lg">
          <Link href="/survey" style={navLinkStyle("/survey")}>
            Survey
          </Link>
          <Link href="/background" style={navLinkStyle("/background")}>
            Learn More
          </Link>
          <Link href="/contact" style={navLinkStyle("/contact")}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
