import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

const QuickBookingWidget = () => {
  const [date, setDate] = useState();
  const [selectedService, setSelectedService] = useState("");
  const [selectedStylist, setSelectedStylist] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    { value: "haircut", label: "Haircut & Styling" },
    { value: "coloring", label: "Coloring & Highlights" },
    { value: "spa", label: "Spa Treatment" },
    { value: "beard", label: "Beard Grooming" },
    { value: "shave", label: "Hot Towel Shave" },
  ];

  const stylists = [
    { value: "anna", label: "Anna Martinez" },
    { value: "james", label: "James Wilson" },
    { value: "mia", label: "Mia Chen" },
    { value: "carlos", label: "Carlos Rodriguez" },
    { value: "any", label: "Any Available" },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking:", {
      service: selectedService,
      stylist: selectedStylist,
      date,
      time: selectedTime,
    });
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gray-900/50 border-gray-700 shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl">
                <CalendarIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-2">
              Quick Booking
            </CardTitle>
            <p className="text-gray-400">
              Book your appointment in just a few clicks
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  👉 Select Service
                </label>
                <Select
                  value={selectedService}
                  onValueChange={setSelectedService}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {services.map((service) => (
                      <SelectItem
                        key={service.value}
                        value={service.value}
                        className="text-white"
                      >
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Stylist Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  👉 Select Stylist
                </label>
                <Select
                  value={selectedStylist}
                  onValueChange={setSelectedStylist}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Choose a stylist" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {stylists.map((stylist) => (
                      <SelectItem
                        key={stylist.value}
                        value={stylist.value}
                        className="text-white"
                      >
                        {stylist.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  👉 Select Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-600">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      className="bg-gray-800 text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  👉 Select Time
                </label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Choose a time" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {timeSlots.map((time) => (
                      <SelectItem
                        key={time}
                        value={time}
                        className="text-white"
                      >
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={handleBooking}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-3 rounded-full transition-all duration-200 hover:scale-105"
                disabled={
                  !selectedService || !selectedStylist || !date || !selectedTime
                }
              >
                Confirm Booking
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black py-3 rounded-full transition-all duration-200"
              >
                Check Availability
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickBookingWidget;
