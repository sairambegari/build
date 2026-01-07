import { Building2, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Corporate Minimalism with Brutalist Accents
 * - Clean, organized footer with multiple sections
 * - Legal and transparency links for institutional credibility
 * - Social media integration
 * - Consistent typography and spacing
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Investments", href: "/investments" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Fund Documentation", href: "#" },
        { label: "Investment Guidelines", href: "#" },
        { label: "Market Reports", href: "#" },
        { label: "Blog & Insights", href: "#" },
      ],
    },
    {
      title: "INVESTOR RELATIONS",
      links: [
        { label: "Investor Portal", href: "#" },
        { label: "Performance Reports", href: "#" },
        { label: "Fund Updates", href: "#" },
        { label: "Schedule a Call", href: "/contact" },
      ],
    },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Legal Disclaimer", href: "#" },
    { label: "Transparency & Disclosure", href: "#" },
    { label: "Do Not Sell My Personal Information", href: "#" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto py-16">
        {/* Top Section: Logo and Description */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-border">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  AGH
                </span>
                <span className="text-xs tracking-wider text-muted-foreground uppercase">
                  Atlas Global Holdings
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Strategic real estate investment and development in Morocco's emerging markets.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:investors@aghinvest.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>investors@aghinvest.com</span>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal Links and Social Media */}
        <div className="space-y-8">
          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal & Compliance
            </h3>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Social and Copyright */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-border">
            {/* Copyright */}
            <div className="text-xs text-muted-foreground mb-6 md:mb-0">
              <p>© {currentYear} Atlas Global Holdings, Inc. All rights reserved.</p>
              <p className="mt-2">
                This website is for informational purposes only and does not constitute an offer to sell or a solicitation to buy any securities.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="bg-background border-t border-border py-4">
        <div className="container mx-auto">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Important Disclosure:</strong> Past performance is not indicative of future results. All investments involve risk, including possible loss of principal. Please consult with a financial advisor before making investment decisions. AGH operates in compliance with all applicable securities laws and regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
