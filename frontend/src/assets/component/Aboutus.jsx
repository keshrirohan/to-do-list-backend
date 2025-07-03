import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--color-bg))] text-[hsl(var(--color-text))] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[hsl(var(--color-primary))]">
          About ByteMinders To-Do
        </h1>
        <p className="mt-4 text-[hsl(var(--color-muted))] max-w-2xl mx-auto">
          We’re passionate about helping people simplify their daily lives and
          focus on what matters most — one task at a time.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold text-[hsl(var(--color-accent))] mb-4">
            Our Mission
          </h2>
          <p className="text-[hsl(var(--color-text))]/80 leading-relaxed">
            Our mission is to build tools that help people reclaim their time
            and attention. ByteMinders To-Do is a minimalist, high-performance
            app designed to keep you on track with clean UI, intelligent
            reminders, and zero distractions.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dj9vanzqq/image/upload/v1751546743/pexels-fauxels-3184291_bensqb.jpg"
            alt="Our Team"
            className="w-full max-w-md object-contain rounded-4xl"
          />
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-[hsl(var(--color-accent))] text-center mb-8">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Simplicity First",
              desc: "No clutter. No confusion. Just what you need to plan and finish tasks.",
            },
            {
              title: "User-Focused",
              desc: "Built by a small team that listens to users and improves constantly.",
            },
            {
              title: "Accessible Anywhere",
              desc: "Use on desktop, tablet, or mobile. Your tasks stay with you.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[hsl(var(--color-muted))] p-6 rounded-xl hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[hsl(var(--color-secondary))] mb-2">
                {item.title}
              </h3>
              <p className="text-[hsl(var(--color-text))]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
