import { React, useref } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
 
  return (
    <main className="min-h-screen bg-[hsl(var(--color-bg))] text-[hsl(var(--color-text))] px-6 py-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold text-center text-[hsl(var(--color-primary))] leading-tight max-w-4xl">
        Stay Focused. <br />
        Organize Tasks. <br />
        Get Things Done.
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg sm:text-xl text-center text-[hsl(var(--color-muted))] max-w-2xl">
        Your minimalist to-do app — designed to help you take control of your
        day.
      </p>

      {/* CTA Button */}
      <Link
        to="/login"
        className="mt-10 px-6 py-3 rounded-full bg-[hsl(var(--color-primary))] text-white text-lg hover:bg-[hsl(var(--color-secondary))] transition"
      >
        Get Started Now
      </Link>

      {/* Illustration */}
      <img
        src="https://res.cloudinary.com/dj9vanzqq/image/upload/v1751544075/businessman-holding-pencil-big-complete-checklist-with-tick-marks_z4rlpa.png"
        alt="To-Do Illustration"
        className="mt-16 w-full max-w-xl object-contain "
      />

      {/* Features */}
      <section className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {[
          {
            title: "Fast & Simple",
            desc: "Lightning-fast interface with zero distractions. Focus only on your tasks.",
          },
          {
            title: "Deadline Reminders",
            desc: "Never miss a task with smart due-date alerts and scheduling.",
          },
          {
            title: "Works Everywhere",
            desc: "Responsive, mobile-friendly UI for daily use on any device.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="p-6 border border-[hsl(var(--color-muted))] rounded-xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-[hsl(var(--color-accent))] mb-2">
              {feature.title}
            </h3>
            <p className="text-[hsl(var(--color-text))]/80">{feature.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default LandingPage;
