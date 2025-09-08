import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, Scissors } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Haircut & Styling", href: "#services" },
      { name: "Coloring & Highlights", href: "#services" },
      { name: "Spa Treatment", href: "#services" },
      { name: "Beard Grooming", href: "#services" },
      { name: "Hot Towel Shave", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Stylists", href: "#stylists" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Booking Policy", href: "#policy" },
      { name: "Gift Cards", href: "#gifts" },
      { name: "FAQ", href: "#faq" },
      { name: "Size Guide", href: "#guide" },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-400",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-300" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  VELVET CUTS
                </h3>
                <p className="text-xs text-gray-400 tracking-wider">PREMIUM BARBER</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where sophistication meets style. Experience premium grooming
              services in an atmosphere of luxury and relaxation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-white mb-2">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers and style tips
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-400"
              />
              <Button
                size="sm"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 rounded-lg"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Velvet Cuts. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
