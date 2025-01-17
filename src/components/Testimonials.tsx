import React from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Fred B.",
      title: "CEO",
      feedback: "Working with this team was transformative. They helped us reduce our infrastructure costs by 30% and delivered a stunning website redesign in record time. Their expertise and quick turnaround made a significant impact on our business.",
    },
    {
      name: "Jim U.",
      title: "Head of Product",
      feedback: "Their expertise in building scalable infrastructure was crucial for our success. Thanks to their work, our product maintained 100% reliability, which was instrumental in securing our funding round. They truly understand what it takes to build enterprise-grade solutions.",
    },
    {
      name: "John P.",
      title: "CEO",
      feedback: "We just started working with Juan and his team. Their solution has reduced our tech cost by 50% and improved our operations. Awesome work!",
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
            <div 
              key={index} 
              className="bg-[#2A2A2A] p-6 rounded-lg shadow-md z-10 relative hover:scale-105 transition-transform duration-300"
            >
              <p className="text-lg italic mb-6">"{testimonial.feedback}"</p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};