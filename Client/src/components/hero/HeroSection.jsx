import Navbar from "@/components/navbar/Navbar";

const HeroSection = () => {
  const stylists = [
    "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop",
  ];

  return (
    <section className="relative flex flex-col items-center bg-gradient-to-br from-[#0a1128] via-[#121b3d] to-[#0a1128] text-white pb-16 pt-8 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Tagline */}
      <div className="flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 rounded-full px-4 py-2 text-sm mt-24">
        <p>Book your beauty transformation today.</p>
        <a
          href="#services"
          className="flex items-center gap-1 font-medium text-orange-400 hover:text-orange-300"
        >
          View Services
          <svg
            className="mt-0.5"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M3.959 9.5h11.083m0 0L9.501 3.96m5.541 5.54-5.541 5.542"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl text-center font-bold max-w-3xl mt-5 leading-tight">
        <span className="block">Book Your</span>
        <span className="bg-gradient-to-r from-white to-orange-300 text-transparent bg-clip-text">
          Salon Appointment
        </span>
        <span className="block">in Seconds</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 md:text-base text-center max-w-2xl mt-3 px-4">
        Experience luxury hair & beauty services tailored just for you. Easy
        online booking, expert stylists, and a relaxing atmosphere await.
      </p>

      {/* CTA Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-8 text-sm max-w-xs w-full">
        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full font-medium shadow-lg shadow-orange-500/20">
          Book Now
        </button>
        <button className="flex items-center justify-center gap-2 bg-white/5 border border-orange-500/30 rounded-full px-6 py-3 hover:bg-white/10 transition">
          <span>Our Services</span>
          <svg
            className="mt-0.5"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M1.25.5 4.75 4l-3.5 3.5"
              stroke="currentColor"
              strokeOpacity=".6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Image Gallery - Stylists */}
      <div
        aria-label="Photos of our expert stylists"
        className="mt-12 flex md:justify-center max-md:overflow-x-auto gap-4 max-w-4xl w-full px-4 pb-6"
      >
        {stylists.map((src, index) => (
          <img
            key={index}
            alt={`Our Stylist ${index + 1}`}
            className="w-36 h-44 rounded-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300 object-cover flex-shrink-0 border border-transparent hover:border-orange-500/30"
            src={src}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
