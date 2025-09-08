import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  CheckCircle,
  Gift,
  Lightbulb,
  Bell,
  Shield,
  Sparkles,
  Scissors,
} from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1000);
  };

  const benefits = [
    {
      icon: <Gift className="h-6 w-6 text-amber-400" />,
      title: "Exclusive Offers",
      description: "Member-only discounts",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-400" />,
      title: "Style Tips",
      description: "Expert grooming advice",
    },
    {
      icon: <Bell className="h-6 w-6 text-amber-400" />,
      title: "Early Access",
      description: "New services & products",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="bg-gray-900/70 border border-gray-700 shadow-2xl backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg shadow-amber-500/20">
                  {isSubscribed ? (
                    <CheckCircle className="h-12 w-12 text-white" />
                  ) : (
                    <Mail className="h-12 w-12 text-white" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {isSubscribed
                  ? "Welcome to Velvet Cuts!"
                  : "Subscribe to Our Newsletter"}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {isSubscribed
                  ? "Thank you for subscribing! Get ready to receive exclusive offers, styling tips, and the latest updates from Velvet Cuts."
                  : "Get updates on offers and new services. Join our community of style enthusiasts and never miss a beat."}
              </p>

              {/* Subscription Form */}
              {!isSubscribed && (
                <form
                  onSubmit={handleSubscribe}
                  className="max-w-md mx-auto space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400 backdrop-blur-sm"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-50 shadow-lg shadow-amber-500/20 flex items-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4" />
                          <span>Subscribe</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {/* Success Message */}
              {isSubscribed && (
                <div className="flex items-center justify-center space-x-2 text-green-400 bg-green-400/10 py-3 px-6 rounded-full max-w-xs mx-auto">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Successfully subscribed!</span>
                </div>
              )}

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-amber-400/30 transition-colors backdrop-blur-sm"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-amber-400/10 rounded-lg">
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Privacy Note */}
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mt-6">
                <Shield className="h-4 w-4" />
                <span>We respect your privacy. Unsubscribe at any time.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
