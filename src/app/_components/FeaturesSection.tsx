import {
  InfoIcon,
  BotIcon,
  CombineIcon,
  ScalingIcon,
  LockIcon,
  ImportIcon,
} from "lucide-react";
import { FC } from "react";

export const FeaturesSection: FC = () => (
  <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Elevate Your Business with Our Key Features
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our SaaS platform offers a comprehensive suite of tools to
            streamline your operations, boost productivity, and drive growth.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
        {[
          {
            title: "Advanced Analytics",
            icon: <InfoIcon />,
            description:
              "Gain deep insights into your business performance with our powerful analytics tools.",
          },
          {
            title: "Automation",
            icon: <BotIcon />,
            description:
              "Streamline your workflows and boost productivity with our advanced automation features.",
          },
          {
            title: "Collaboration",
            icon: <CombineIcon />,
            description:
              "Empower your team to work together seamlessly with our built-in collaboration tools.",
          },
          {
            title: "Scalability",
            icon: <ScalingIcon />,
            description:
              "Grow your business with ease, thanks to our highly scalable and flexible platform.",
          },
          {
            title: "Security",
            icon: <LockIcon />,
            description:
              "Keep your data safe and secure with our robust security measures.",
          },
          {
            title: "Integrations",
            icon: <ImportIcon />,
            description:
              "Seamlessly integrate our SaaS platform with your existing tools and workflows.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-4"
          >
            {feature.icon}
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
