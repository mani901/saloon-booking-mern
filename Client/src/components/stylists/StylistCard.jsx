import React from "react";

const StylistCard = ({ name, role, bio, image, socialLinks = [] }) => {
  return (
    <div className="group flex flex-col items-center py-8 text-sm bg-white/5 backdrop-blur-md border border-amber-500/15 w-64 rounded-xl cursor-pointer hover:border-amber-400 hover:bg-gradient-to-t hover:from-amber-500/10 hover:to-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden relative">
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/5 transition-all duration-500 pointer-events-none"></div>

      {/* Profile Image */}
      <img
        className="w-24 h-24 rounded-full object-cover border-2 border-white/20 group-hover:border-amber-400/50 transition-all duration-300 group-hover:scale-105"
        src={image}
        alt={`${name} profile`}
        loading="lazy"
      />

      {/* Name & Role */}
      <h2 className="text-white group-hover:text-amber-300 text-lg font-semibold mt-4 transition-colors duration-300">
        {name}
      </h2>
      <p className="text-amber-400 font-medium tracking-wide">{role}</p>

      {/* Bio */}
      <p className="text-center text-gray-400 group-hover:text-gray-300 w-3/4 mt-3 px-2 text-xs leading-relaxed font-light">
        {bio}
      </p>

      {/* Social Icons */}
      <div className="flex items-center space-x-4 mt-6">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 group-hover:text-amber-300 hover:scale-110 transition-all duration-300"
            aria-label={link.platform}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StylistCard;
