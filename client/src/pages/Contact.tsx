import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Design Philosophy: Corporate Minimalism with Brutalist Accents
 * - Deep burgundy accents (#7A1F1F) for form submission and CTAs
 * - Clean, asymmetric layout with 60/40 split between contact info and form
 * - Line-art iconography for contact methods
 * - Playfair Display for headings, Inter for body text
 */

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  agreeToContact: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
    agreeToContact: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
        agreeToContact: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" strokeWidth={1.5} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
      label: "Email",
      value: "investors@aghinvest.com",
      href: "mailto:investors@aghinvest.com",
    },
    {
      icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />,
      label: "Address",
      value: "New York, NY 10001",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our investment opportunities, services, or fund structure? Our team is ready to help. Reach out using any method below, and we'll respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-semibold text-foreground mb-8">
                  Atlas Global Holdings
                </h2>

                {/* Contact Methods */}
                <div className="space-y-8 mb-12">
                  {contactMethods.map((method, idx) => (
                    <a
                      key={idx}
                      href={method.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                          {method.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Investment Opportunities", href: "/investments" },
                    { label: "Our Services", href: "/services" },
                    { label: "About AGH", href: "/about" },
                    { label: "Fund Documentation", href: "#" },
                  ].map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-accent/10 border border-accent rounded-lg p-8 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-background" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-foreground mb-2">
                      Inquiry Type <span className="text-accent">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="investor">Investor Relations</option>
                      <option value="project">Project Investment</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="services">Services Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToContact"
                      name="agreeToContact"
                      checked={formData.agreeToContact}
                      onChange={handleChange}
                      required
                      className="mt-1 w-5 h-5 accent-accent rounded border-border cursor-pointer"
                    />
                    <label htmlFor="agreeToContact" className="text-sm text-muted-foreground">
                      I agree that AGH may contact me by email, phone, or other means to discuss my inquiry. I have read and agree to the{" "}
                      <a href="#" className="text-accent hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-accent hover:underline">
                        Terms of Service
                      </a>
                      .
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-background font-semibold"
                  >
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}

              {/* Form Footer */}
              <p className="text-xs text-muted-foreground mt-6 text-center">
                We typically respond within 24 business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What is the minimum investment amount?",
                answer:
                  "Investment minimums vary by opportunity and fund structure. Please contact our investor relations team for specific details about current offerings.",
              },
              {
                question: "How long does the investment process typically take?",
                answer:
                  "From initial inquiry to capital deployment typically takes 4-8 weeks, depending on due diligence requirements and investor documentation.",
              },
              {
                question: "What types of real estate does AGH invest in?",
                answer:
                  "We focus on commercial, healthcare, mixed-use, and residential properties in Morocco's high-growth urban markets, with particular emphasis on smart cities and special economic zones.",
              },
              {
                question: "How often do investors receive updates?",
                answer:
                  "Investors receive quarterly performance reports, annual audited financial statements, and access to our investor portal for real-time project tracking.",
              },
              {
                question: "Do you offer co-investment opportunities?",
                answer:
                  "Yes, we structure co-investment opportunities alongside our Fund vehicle. Contact our team to discuss options tailored to your investment profile.",
              },
              {
                question: "What is your track record?",
                answer:
                  "Our team brings decades of combined experience in real estate development and investment. Detailed performance metrics and case studies are available upon request.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you're an accredited investor, institutional partner, or service provider, we'd love to discuss how AGH can support your real estate goals.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-background">
            Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
