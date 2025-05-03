"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {
    const pathname = usePathname(); 
  
    const navLinkStyle = (path) => ({
      fontFamily: "var(--text-font)",
      color: "var(--main-text-color)",
      fontWeight: pathname === path ? "bold" : "normal",
      textDecoration: pathname === path ? "underline" : "none",
    });
  
    return (
        <nav className="w-full flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              src="/clear_background_logo.png"
              alt="NYC AlgoMatcher Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>
          <Link href="/">
            <h1
              className="text-2xl font-bold cursor-pointer"
              style={{
                fontFamily: "var(--header-font)",
                color: "var(--main-text-color)",
              }}
            >
              NYC AlgoMatcher
            </h1>
          </Link>
        </div>
        <div className="flex space-x-11 text-xl">
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
      </nav>
    );
  }
  