import { SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* GRID Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-primary">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  Chat with our AI dental assistant for instant advice, book
                  smart appointments, and get personalized care recommendations.
                  Available 24/7.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <SignUpButton mode="modal">
                  <Button size={"lg"} className="w-full sm:w-auto">
                    <MicIcon className="mr-2 size-5" />
                    Try Voice Agent
                  </Button>
                </SignUpButton>
                <SignUpButton mode="modal">
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="w-full sm:w-auto"
                  >
                    <CalendarIcon className="mr-2 size-5" />
                    Book Appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* User Testimonial */}
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  {/* USER Avatars */}
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1533618821901-9e69d5f5360e?w=600&auto=format&fit=crop&q=60",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
                    ].map((src, index) => (
                      <Image
                        key={index}
                        src={src}
                        alt={`User Avatar ${index + 1}`}
                        height={40}
                        width={40}
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover ring-2 sm:ring-4 ring-background"
                      />
                    ))}
                  </div>

                  {/* RATING AND STARS */}
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-foreground">
                        4.9/5
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Trusted by{" "}
                      <span className="font-semibold text-foreground">
                        1,200+ patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center lg:justify-end lg:pl-8">
              {/* GRADIENT ORBS */}
              <div className="absolute -top-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <Image
                src="/hero.png"
                alt="DentWise AI"
                width={400}
                height={400}
                className="w-64 sm:w-80 md:w-[400px] h-auto mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
