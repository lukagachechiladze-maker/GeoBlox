import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Alex M.",
    avatar: "A",
    rating: 5,
    text: "Bought my first Dominus here and the delivery was instant! Super easy process and great prices. Highly recommend to anyone looking for rare items.",
    date: "2 days ago",
  },
  {
    name: "Jordan K.",
    avatar: "J",
    rating: 5,
    text: "Best Roblox marketplace I've ever used. The support team helped me with my order within minutes. Will definitely be a returning customer!",
    date: "1 week ago",
  },
  {
    name: "Sam T.",
    avatar: "S",
    rating: 5,
    text: "I was skeptical at first but everything went smoothly. Got my Korblox within 5 minutes of payment. Amazing service!",
    date: "2 weeks ago",
  },
  {
    name: "Riley P.",
    avatar: "R",
    rating: 4,
    text: "Great selection of items and competitive prices. The only reason for 4 stars is I wish they had more Robux options.",
    date: "3 weeks ago",
  },
  {
    name: "Morgan L.",
    avatar: "M",
    rating: 5,
    text: "Purchased the Ultimate Bundle and got way more value than expected. The tutorials made claiming everything super easy!",
    date: "1 month ago",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= testimonials.length - visibleCount + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their Roblox needs
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card p-6 min-w-full md:min-w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-warning fill-warning"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "99.5%", label: "Satisfaction Rate" },
            { value: "< 5min", label: "Avg. Delivery Time" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
