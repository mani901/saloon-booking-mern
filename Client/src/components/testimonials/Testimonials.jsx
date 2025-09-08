import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: '"Anna gave me the best haircut of my life! The attention to detail and professional service is unmatched. I\'ve been coming here for 2 years and never been disappointed."',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Mark Thompson',
      rating: 5,
      text: '"So relaxing and professional. James knows exactly how to handle my beard. The hot towel shave is heavenly. This place has become my weekly ritual."',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Priya Patel',
      rating: 5,
      text: '"Love the vibe here! Mia is amazing with color and always makes me feel confident. The staff is friendly and the atmosphere is perfect for unwinding."',
      avatar: '👩‍🎨'
    },
    {
      id: 4,
      name: 'David Chen',
      rating: 5,
      text: '"Carlos transformed my look completely. His creative vision and technical skills are outstanding. Worth every penny for the confidence boost!"',
      avatar: '👨‍🎓'
    },
    {
      id: 5,
      name: 'Emma Rodriguez',
      rating: 5,
      text: '"The spa treatments here are incredible. Anna\'s scalp massage is pure bliss. This isn\'t just a haircut place - it\'s a full grooming experience."',
      avatar: '👩‍⚕️'
    },
    {
      id: 6,
      name: 'Alex Kim',
      rating: 5,
      text: '"Found my go-to barber! The team here genuinely cares about their clients. Clean, professional, and the results speak for themselves. Highly recommend!"',
      avatar: '👨‍🏫'
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="h-4 w-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            What Our
            <span className="block bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Don't just take our word for it - hear from our satisfied clients who trust us with their style
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Join hundreds of satisfied clients
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105">
            Book Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
