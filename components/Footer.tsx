import React, { type ReactElement } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHeart } from "react-icons/fa";
import SideBarServer from "@/app/countries/usa/components/SideBarServer";

// Simulate a server-side call to fetch footer data
async function getFooterData(): Promise<{
  quickLinks: { name: string; href: string }[];
  studyAbroad: { name: string; href: string }[];
  legalLinks: { name: string; href: string }[];
  socialLinks: { name: string; href: string; icon: ReactElement }[];
}> {
  return {
    quickLinks: [
      
      { name: "Courses", href: "/courses" },
      { name: "Blog", href: "/blog" },
      { name: "Resources", href: "/resources" },
    ],
    studyAbroad: [
      { name: "Study in USA", href: "/countries/usa" },
      { name: "Study in UK", href: "/countries/uk" },
      { name: "Study in Australia", href: "/countries/australia" },
      { name: "Study in New Zealand", href: "/countries/new-zealand" },
      { name: "Study in Germany", href: "/countries/germany" },
      { name: "Study in France", href: "/countries/france" },
      { name: "Study in Canada", href: "/countries/canada" },
      
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
    socialLinks: [
      {
        name: "Facebook",
        href: "https://facebook.com",
        icon: <FaFacebookF className="w-4 h-4" />,
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: <FaTwitter className="w-4 h-4" />,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: <FaLinkedinIn className="w-4 h-4" />,
      },
      {
        name: "Instagram",
        href: "https://instagram.com",
        icon: <FaInstagram className="w-4 h-4" />,
      },
    ],
  };
}

const Footer = async () => {
  const { quickLinks, studyAbroad, legalLinks, socialLinks } = await getFooterData();

  return (
    <footer className="bg-indigo-50 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center md:justify-start">
          <img src="/Logo/logo.svg" alt="Study Abroad Consultancy Logo" className="w-32" />
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: Quick Links + Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-gray-900 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="hover:text-gray-900 transition"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Column 2: Study Abroad */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Study Abroad</h3>
            <ul className="space-y-2">
              {studyAbroad.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-gray-900 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-gray-900 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 4: Subscribe - spans two columns */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <SideBarServer />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Study Abroad Consultancy. All rights reserved.
          </p>
          <p className="text-sm flex items-center">
            Made with&nbsp;
            <FaHeart className="text-red-600 w-4 h-4 mx-1" />
            &nbsp;in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
