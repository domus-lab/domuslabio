import React from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This team transformed our vision into reality. Highly recommend!",
    },
    {
      name: "Jane Smith",
      feedback: "Professional and dedicated. Our project was a success!",
    },
    {
      name: "Alice Johnson",
      feedback: "Exceptional service and support throughout the process.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-center">What Clients Say</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Don't just take our word for it - hear from the businesses we've helped succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <p className="mt-4 font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
