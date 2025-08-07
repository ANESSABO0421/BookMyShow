import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white/70 px-6 py-12 ">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <img src="/logo2.png" alt="BookMyShow" className="h-20 mb-4" />
          <p className="text-sm text-white/60">
            Your go-to platform for movies, events, and live shows. Secure
            bookings, seamless experience.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Newsroom</a></li>
            <li><a href="#" className="hover:text-white">Investor Relations</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex gap-6 mb-4">
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
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
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
              className="hover:-translate-y-1 transform transition duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
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

        {/* Copyright */}
        <p className="text-xs text-white/50 text-center">
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
      </div>
    </footer>
  );
};

export default Footer;
