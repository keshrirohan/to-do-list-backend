import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--color-bg))] text-[hsl(var(--color-text))] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[hsl(var(--color-primary))]">
          Get in Touch
        </h1>
        <p className="mt-4 text-[hsl(var(--color-muted))] max-w-xl mx-auto">
          Have a question, suggestion, or just want to say hi? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-[hsl(var(--color-bg))] border border-[hsl(var(--color-muted))] rounded-xl p-8 shadow-lg">
        <form className="grid gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-[hsl(var(--color-accent))]">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border border-[hsl(var(--color-muted))] rounded-md text-[hsl(var(--color-text))] focus:outline-none focus:border-[hsl(var(--color-primary))] transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[hsl(var(--color-accent))]">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-transparent border border-[hsl(var(--color-muted))] rounded-md text-[hsl(var(--color-text))] focus:outline-none focus:border-[hsl(var(--color-primary))] transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[hsl(var(--color-accent))]">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 bg-transparent border border-[hsl(var(--color-muted))] rounded-md text-[hsl(var(--color-text))] focus:outline-none focus:border-[hsl(var(--color-primary))] transition"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-[hsl(var(--color-primary))] text-white rounded-full hover:bg-[hsl(var(--color-secondary))] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
