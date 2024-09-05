import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { FC } from "react";

export const TestimonialSection: FC = () => (
  <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about how our SaaS platform has
            transformed their businesses.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
        {[
          {
            name: "John Doe",
            title: "CEO, Acme Inc.",
            testimonial:
              "Our team has been using the Acme SaaS platform for over a year now, and it has been a game-changer for our business. The features are top-notch, and the support team is always there to help us out.",
          },
          {
            name: "Sarah Miller",
            title: "CTO, Globex Inc.",
            testimonial:
              "I was hesitant to try a new SaaS platform, but the Acme team made the transition seamless. The platform is user-friendly, and the automation features have saved us so much time.",
          },
          {
            name: "Lisa Wang",
            title: "CFO, Stark Industries",
            testimonial:
              "The Acme SaaS platform has been a game-changer for our finance team. The advanced analytics and reporting features have helped us make more informed decisions and drive growth.",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>{testimonial.name}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.testimonial}</p>
            </div>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  strokeWidth={0}
                  className="h-5 w-5 fill-yellow-500"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
