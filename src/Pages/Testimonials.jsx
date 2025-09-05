import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh",
    role: "Project Manager",
    company: "Renewable Energy Company",
  
    testimonial:
      "Managing our solar farm project across three states used to mean juggling 15 different tools and endless email chains. Alfred consolidated everything into one intelligent workspace that actually understands project dependencies.",
  },
  {
    name: "Manjunath",
    role: "Project Manager",
    company: "Renewable Energy Company",
    
    testimonial:
      "I was skeptical about AI in project management until Alfred saved our pilot team. It predicted a critical delay 3 weeks before we would have caught it manually, saving us $2M in penalties.",
  },
  {
    name: "Vivian",
    role: "Project Head",
    company: "Global Infrastructure Company",
    
    testimonial:
      "Running simultaneous construction projects in four countries was a nightmare before Alfred. Now I have real-time visibility across all sites with intelligent risk alerts that actually matter.",
  },
  {
    name: "Srinivasan",
    role: "COO",
    company: "Premier EPC Services",
    
    testimonial:
      "Alfred transformed how we operate across our $500M project portfolio. The AI insights help us make better decisions faster, and our project success rate improved by 34% in just 6 months.",
  },
  {
    name: "Leena",
    role: "Project Sponsor",
    company: "Energy Infrastructure Developer",
    
    testimonial:
      "As someone funding these massive EPC projects, Alfred gives me the transparency I need. I can see exactly where every dollar is going and get early warnings about potential issues.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  return (
    <div className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg   mb-12 text-[#B5C0C9] uppercase">
              Our Power Users Speak
            </h2>
          </motion.div>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30   p-2 hover:bg-white/20 transition"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 hover:bg-white/20 transition"
          >
            ›
          </button>

          {/* Cards Display */}
          <div className="flex justify-center items-center px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Left Card */}
              <motion.div
                key={`left-${currentIndex}`}
                initial={{ opacity: 0, x: -80, scale: 0.8 }}
                animate={{ opacity: 0.6, x: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <TestimonialCard
                  testimonial={
                    testimonials[
                      (currentIndex - 1 + testimonials.length) % testimonials.length
                    ]
                  }
                  isCenter={false}
                />
              </motion.div>

              {/* Center Card */}
              <motion.div
                key={`center-${currentIndex}`}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  isCenter={true}
                />
              </motion.div>

              {/* Right Card */}
              <motion.div
                key={`right-${currentIndex}`}
                initial={{ opacity: 0, x: 80, scale: 0.8 }}
                animate={{ opacity: 0.6, x: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <TestimonialCard
                  testimonial={
                    testimonials[(currentIndex + 1) % testimonials.length]
                  }
                  isCenter={false}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, isCenter }) => {
  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-500 ${
        isCenter
          ? "bg-neutral-900 shadow-2xl scale-105"
          : "bg-neutral-900 shadow-md opacity-80"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
     
        <div className="flex flex-row justify-between w-full">
          <div>
          <h3 className="font-bold">{testimonial.name}</h3>
            
          </div>
          <div>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
          <p className="text-gray-500 text-xs">{testimonial.company}</p>

          </div>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        {testimonial.testimonial}
      </p>
    </div>
  );
};

export default Testimonials;
