import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-md border border-amber-500/15 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/15 group hover:-translate-y-2 overflow-hidden relative">
      {/* Subtle gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-600/5 transition-all duration-500 pointer-events-none"></div>

      <CardHeader className="text-center pb-6 pt-8">
        <div className="flex justify-center mb-4">
          <div className="p-5 bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-amber-600/20">
            <div className="text-white drop-shadow-sm">{service.icon}</div>
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
          {service.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 px-6 pb-8">
        <div className="flex items-center justify-center space-x-6 text-gray-300">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-amber-500/10 px-4 py-2 rounded-full hover:bg-amber-500/10 transition-all duration-300">
            <Clock className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium tracking-wide">
              {service.duration}
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-amber-500/10 px-4 py-2 rounded-full hover:bg-amber-500/10 transition-all duration-300">
            <DollarSign className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold tracking-wide">
              {service.price}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-center text-sm leading-relaxed px-2 font-light">
          {service.description}
        </p>

        <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/30 group-hover:shadow-xl group-hover:rotate-1 active:scale-95">
          <span className="flex items-center gap-2">
            Book Appointment
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 duration-300"
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
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
