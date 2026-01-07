/**
 * Corporate Minimalism with Brutalist Accents
 * Home page: Asymmetric hero, grayscale images with burgundy overlays, line-art icons
 */

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  DollarSign,
  Building,
  Users,
  Target,
  Handshake,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Asymmetric 60/40 split */}
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-0 items-center">
            {/* Left Content - 40% */}
            <div className="lg:col-span-2 py-16 lg:py-24 z-10">
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                AGH
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-8 leading-tight">
                Atlas Global Holdings
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed">
                Building Long-Term Partnerships Through Strategic Real Estate Investment
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium tracking-wider uppercase"
              >
                VIEW PROJECTS
              </Button>
            </div>

            {/* Right Image - 60% with geometric overlay */}
            <div className="lg:col-span-3 relative h-[500px] lg:h-[700px]">
              <div className="absolute inset-0">
                <img
                  src="/images/hero_building_main.png"
                  alt="Modern commercial building"
                  className="w-full h-full object-cover grayscale"
                />
                {/* Geometric burgundy overlay */}
                <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-primary/20 backdrop-blur-[2px]">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,0 100,0 100,100 30,100"
                      fill="currentColor"
                      className="text-primary opacity-80"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
              We help investors transform real estate ideas into fully
              developed, profitable, and sustainable projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From opportunity assessment to development execution and long-term
              asset management, AGH delivers clarity, capital, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Offset Grid */}
      <section id="stats-section" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="Strategic Vision"
              label="We build sustainable real estate ventures through thoughtful capital deployment and strategic asset selection that create lasting value"
              delay={0}
              visible={statsVisible}
            />
            <StatCard
              value="Partnership Focus"
              label="We partner with investors, operators, and communities to unlock opportunities that thrive long into the future — collaboration at every step."
              delay={100}
              visible={statsVisible}
            />
            <StatCard
              value="Investment Philosophy"
              label="Empowering Long-Term Growth"
              delay={200}
              visible={statsVisible}
            />
            <StatCard
              value="3% For The Planet"
              label="We invest with purpose, guided by community, accountability, and long-term impact. Learn more"
              delay={300}
              visible={statsVisible}
            />
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-24 bg-card">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Investment Strategy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Grounded in trust and ingenuity, our platform delivers disciplined performance and superior risk-adjusted returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <StrategyCard
              icon={<Target className="w-12 h-12" strokeWidth={1.5} />}
              title="INVESTMENT APPROACH"
              description="We create value by identifying real estate opportunities that deliver durable cash flow and long-term performance"
            />
            <StrategyCard
              icon={<Handshake className="w-12 h-12" strokeWidth={1.5} />}
              title="LOCAL EXPERTISE"
              description="Aligned with best-in-class local operators possessing deep market and asset-level expertise"
            />
            <StrategyCard
              icon={<MapPin className="w-12 h-12" strokeWidth={1.5} />}
              title="TARGETED OPPORTUNITIES"
              description="We focus on markets and assets where fundamentals, structure, and timing create compelling investment opportunities"
            />
            <StrategyCard
              icon={<CheckCircle2 className="w-12 h-12" strokeWidth={1.5} />}
              title="CAPITAL ALIGNMENT"
              description="Our team, partners, and stakeholders invest alongside our investors in every venture"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Real Estate Advisory Services
          </h2>
          <p className="text-lg text-muted-foreground mb-16">
            We offer investors the flexibility to invest alongside us or engage our platform to support and manage their deals, syndications, and funds—backed by deep real estate and capital markets expertise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<TrendingUp className="w-10 h-10" strokeWidth={1.5} />}
              title="Market Research & Consulting"
            />
            <ServiceCard
              icon={<DollarSign className="w-10 h-10" strokeWidth={1.5} />}
              title="Investment & Funding Strategy"
            />
            <ServiceCard
              icon={<Building className="w-10 h-10" strokeWidth={1.5} />}
              title="Development & Project Execution"
            />
            <ServiceCard
              icon={<Users className="w-10 h-10" strokeWidth={1.5} />}
              title="Asset Management & Monetization"
            />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                AGH is a U.S.-based real estate advisory and development firm
                with a strategic focus on Morocco as the{" "}
                <span className="font-semibold text-foreground">
                  gateway to Africa.
                </span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine international standards with deep local expertise to
                help investors identify, fund, build, and manage high-potential{" "}
                <span className="font-semibold text-foreground">
                  commercial and medical real estate projects.
                </span>
              </p>
            </div>
            <div className="relative h-[500px]">
              <img
                src="/images/morocco_cityscape.png"
                alt="Morocco cityscape"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-16">
            Recent Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="/images/project_commercial_1.png"
              title="Premium Office Complex"
              category="Commercial Development"
            />
            <ProjectCard
              image="/images/project_medical_1.png"
              title="Modern Medical Center"
              category="Healthcare Facility"
            />
            <ProjectCard
              image="/images/project_mixed_use.png"
              title="Mixed-Use Development"
              category="Urban Planning"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">AGH</h3>
              <p className="text-sm text-background/80">
                Atlas Global Holdings
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
                Contact
              </h4>
              <p className="text-sm text-background/80 mb-2">
                info@aghinvest.com
              </p>
              <p className="text-sm text-background/80">+1 (800) 456-7890</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
                Location
              </h4>
              <p className="text-sm text-background/80">
                United States & Morocco
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 text-center">
            <p className="text-sm text-background/60">
              © 2026 Atlas Global Holdings. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Stat Card Component
function StatCard({
  value,
  label,
  delay,
  visible,
}: {
  value: string;
  label: string;
  delay: number;
  visible: boolean;
}) {
  return (
    <Card
      className="p-8 bg-primary text-primary-foreground border-0 transition-all duration-700 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-2xl font-semibold mb-4 tracking-wide">{value}</div>
      <div className="text-sm leading-relaxed opacity-90">
        {label}
      </div>
    </Card>
  );
}

// Strategy Card Component
function StrategyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 border-2 border-border hover:border-primary transition-all duration-300 group">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-wider uppercase mb-4 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Service Card Component
function ServiceCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="p-8 bg-card border border-border hover:border-primary transition-all duration-300 group">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-base font-medium text-foreground leading-snug">
        {title}
      </h3>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-80 mb-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground tracking-wider uppercase">
        {category}
      </p>
    </div>
  );
}
