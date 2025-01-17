import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    image: "/placeholder.svg",
    name: "John Doe",
    title: "CEO at TechCorp",
    review: "Working with domuslab.io was a game-changer for our business. Their expertise and dedication helped us launch our MVP in record time.",
  },
  {
    image: "/placeholder.svg",
    name: "Jane Smith",
    title: "Founder at StartupX",
    review: "The team's attention to detail and technical expertise is outstanding. They delivered exactly what we needed, on time and within budget.",
  },
  {
    image: "/placeholder.svg",
    name: "Mike Johnson",
    title: "CTO at InnovateCo",
    review: "Their agile approach and weekly feedback sessions kept us informed and confident throughout the development process.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12">What Clients Say</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mb-4"
                      />
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{testimonial.title}</p>
                      <p className="text-sm line-clamp-4">{testimonial.review}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};