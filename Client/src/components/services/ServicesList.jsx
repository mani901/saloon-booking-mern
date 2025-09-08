import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Scissors,
  Palette,
  Sparkles,
  User,
  Flame,
  Droplets,
} from "lucide-react";

const ServicesList = () => {
  const services = [
    {
      id: 1,
      name: "Haircut & Styling",
      icon: <Scissors className="h-8 w-8 text-white" />,
      duration: "45 min",
      price: "$40",
      description:
        "Professional haircut and styling tailored to your face shape and lifestyle.",
    },
    {
      id: 2,
      name: "Coloring & Highlights",
      icon: <Palette className="h-8 w-8 text-white" />,
      duration: "90 min",
      price: "$80",
      description:
        "Expert coloring services using premium products for vibrant, long-lasting results.",
    },
    {
      id: 3,
      name: "Spa Treatment",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      duration: "60 min",
      price: "$60",
      description:
        "Relaxing spa treatments including facials, scalp massage, and hot towel service.",
    },
    {
      id: 4,
      name: "Beard Grooming",
      icon: <User className="h-8 w-8 text-white" />,
      duration: "30 min",
      price: "$25",
      description:
        "Complete beard grooming including trimming, shaping, and conditioning.",
    },
    {
      id: 5,
      name: "Hot Towel Shave",
      icon: <Flame className="h-8 w-8 text-white" />,
      duration: "45 min",
      price: "$35",
      description:
        "Traditional hot towel shave with premium grooming products and techniques.",
    },
    {
      id: 6,
      name: "Hair Wash & Treatment",
      icon: <Droplets className="h-8 w-8 text-white" />,
      duration: "30 min",
      price: "$20",
      description:
        "Deep cleansing hair wash with nourishing treatments for healthy, shiny hair.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Floating Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl animate-pulse opacity-15"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
            <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
            Premium
            <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
              Grooming Experience
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our comprehensive range of premium grooming services
            designed for the modern gentleman who demands excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-8 text-lg font-light">
            Don’t see what you’re looking for? We offer custom packages tailored
            just for you.
          </p>
          <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-amber-500/40 active:scale-95 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              View All Services
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
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Custom Gradient Animation (for heading) */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesList;
