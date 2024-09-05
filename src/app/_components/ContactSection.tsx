import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FC } from "react";

export const ContactSection: FC = () => (
  <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sign up for a free trial and experience the power of our SaaS
            platform today.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Start Free Trial</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link
              href="#"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);
