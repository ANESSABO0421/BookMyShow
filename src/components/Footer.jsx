import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-[300px] px-4 md:px-8 lg:px-16 py-10 bg-black text-white/70 rounded-t-lg">
      {/* BookMyShow Logo */}
      <img src="/logo2.png" alt="" className="h-[200px] w-[200px]" />
      <hr className="bg-white" />

      <p className="mt-4 text-center text-xs sm:text-sm max-w-md">
        © 2025{" "}
        <a
          href="https://bookmyshow.com"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          BookMyShow
        </a>
        . All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        {/* Social Icons */}
        {[
          {
            href: "https://facebook.com",
            svg: (
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            ),
          },
          {
            href: "https://instagram.com",
            svg: (
              <>
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" />
                <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
              </>
            ),
          },
          {
            href: "https://twitter.com",
            svg: (
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2" />
            ),
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-0.5 transition-transform duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
              strokeOpacity=".5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.svg}
            </svg>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
