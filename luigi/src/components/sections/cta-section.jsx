import React from 'react';
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-card rounded-xl border border-secondary/20 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-secondary/70 mb-8 max-w-2xl mx-auto">
            Join HACKTECH 2025 and collaborate with talented developers, designers, and data scientists to create innovative solutions using our datasets and models.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-background font-medium px-8 py-6 text-lg">
              Register Now
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background font-medium px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 text-secondary/50 text-sm">
            April 25-27, 2025 • Virtual & In-Person • Prizes Worth $50,000
          </div>
        </div>
      </div>
    </section>
  );
} 