import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Car,
  Accessibility,
  Coffee,
  Calendar,
  Wifi,
  ParkingCircle,
} from "lucide-react";

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-amber-400" />,
      title: "Address",
      details: ["123 Beauty Street", "Downtown, City 12345"],
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-400" />,
      title: "Phone",
      details: ["(123) 456-7890"],
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-400" />,
      title: "Email",
      details: ["hello@velvetcuts.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-400" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM-8PM", "Sat: 8AM-7PM", "Sun: 10AM-6PM"],
    },
  ];

  const amenities = [
    {
      icon: <ParkingCircle className="h-8 w-8 text-amber-400" />,
      title: "Parking",
      description: "Free street parking available. Valet service on weekends.",
    },
    {
      icon: <Accessibility className="h-8 w-8 text-amber-400" />,
      title: "Accessibility",
      description: "Wheelchair accessible with elevator access to all floors.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-400" />,
      title: "Amenities",
      description: "Complimentary beverages and Wi-Fi for your comfort.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3 mb-8 animate-pulse">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium tracking-wide">
              VISIT US
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Find Our
            <span className="block bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Location
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Located in the heart of downtown, we're easily accessible and ready
            to serve you with excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/70 border border-gray-700 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-amber-400/10 rounded-lg group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-full transition-all duration-200 flex items-center justify-center space-x-2">
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <Card className="bg-gray-900/70 border border-gray-700 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="text-center space-y-4 z-10 p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-400/10 rounded-full backdrop-blur-sm">
                      <MapPin className="h-8 w-8 text-amber-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">
                        Interactive Map
                      </h3>
                      <p className="text-gray-400">
                        Google Maps integration coming soon
                      </p>
                      <button className="bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-500 transition-colors flex items-center justify-center space-x-1 mx-auto">
                        <Navigation className="h-4 w-4" />
                        <span>View on Google Maps</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-amber-400/30 transition-colors backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-400/10 rounded-lg mb-4">
                  {amenity.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {amenity.title}
                </h4>
                <p className="text-gray-400 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
