import React from "react";
import StylistCard from "./StylistCard";
import { Instagram, Twitter, Linkedin } from "lucide-react"; // or use your own icons

const StylistList = () => {
  const stylists = [
    {
      id: 1,
      name: "Donald Jackman",
      role: "Master Barber",
      bio: "Specializes in classic cuts and beard sculpting with 10+ years of experience.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      socialLinks: [
        {
          url: "#",
          platform: "Instagram",
          icon: <Instagram className="w-5 h-5" />,
        },
        {
          url: "#",
          platform: "Twitter",
          icon: <Twitter className="w-5 h-5" />,
        },
        {
          url: "#",
          platform: "LinkedIn",
          icon: <Linkedin className="w-5 h-5" />,
        },
      ],
    },
    {
      id: 2,
      name: "Richard Nelson",
      role: "Color Specialist",
      bio: "Expert in balayage and vibrant color transformations tailored to your skin tone.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      socialLinks: [
        {
          url: "#",
          platform: "Instagram",
          icon: <Instagram className="w-5 h-5" />,
        },
        {
          url: "#",
          platform: "Twitter",
          icon: <Twitter className="w-5 h-5" />,
        },
        {
          url: "#",
          platform: "LinkedIn",
          icon: <Linkedin className="w-5 h-5" />,
        },
      ],
    },
    {
      id: 3,
      name: "James Washington",
      role: "Spa & Wellness Director",
      bio: "Creates relaxing, rejuvenating experiences with holistic treatments and aromatherapy.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      socialLinks: [
        {
          url: "#",
          platform: "Instagram",
          icon: <Instagram className="w-5 h-5" />,
        },
        {
          url: "#",
          platform: "Twitter",
          icon: <Twitter className="w-5 h-5" />,
        },
        {
          url: "#",
          platform: "LinkedIn",
          icon: <Linkedin className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Floating Background Orbs (Subtle Decoration) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">
              MEET OUR TEAM
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Expert
            <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Stylists & Artists
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Our team of award-winning stylists brings passion, creativity, and
            precision to every appointment.
          </p>
        </div>

        {/* Stylist Grid */}
        <div className="flex flex-wrap gap-8 justify-center items-stretch">
          {stylists.map((stylist) => (
            <StylistCard key={stylist.id} {...stylist} />
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 font-light">
            Want to work with a specific stylist? Book them directly during
            checkout.
          </p>
          <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/30 active:scale-95">
            <span className="flex items-center gap-2">
              View All Stylists
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StylistList;
