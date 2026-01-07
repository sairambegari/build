/**
 * Corporate Minimalism with Brutalist Accents
 * About Page: Vision, Mission, Story, and Impact
 */

import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Globe,
  TrendingUp,
  Users,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Who We Are
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              A U.S.-based investment firm transforming undervalued real estate
              into high-quality assets across Morocco's fastest-growing markets.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-6 tracking-wide uppercase">
                Vision
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                To unlock Morocco's potential as a gateway to African investment
                by connecting U.S. capital with transformative real estate
                opportunities that build wealth and strengthen communities.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-6 tracking-wide uppercase">
                Mission
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                To create valuable, income-generating real estate assets in
                Morocco's emerging urban centers, prioritizing investor returns,
                operational excellence, and positive community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            Our Story
          </h2>

          <div className="max-w-4xl space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Focused on Opportunity
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Atlas Global Holdings (AGH) was founded on a simple insight:
                Morocco's rapid urbanization and economic growth create
                exceptional opportunities for disciplined investors. While many
                overlook the North African market, we see a region with rising
                demand for modern real estate, strong demographic tailwinds, and
                significant value creation potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We target Morocco's strategic growth corridors—smart city
                developments, Special Economic Zones (SEZs), and infrastructure
                hubs—where international investment meets local expertise to
                deliver outsized returns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Client-Focused, Results-Driven
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our approach combines international investment standards with
                deep local knowledge. We partner with U.S. investors, family
                offices, and institutions to identify, acquire, and develop
                high-potential commercial, medical, residential, and mixed-use
                properties.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From market analysis and due diligence to project execution and
                asset management, we handle the full investment lifecycle—so our
                partners can focus on returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-16">
            What We Do
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              The Full Development Lifecycle
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <LifecycleCard
                step="1"
                title="Acquisition"
                description="Identify and acquire undervalued real estate assets at significant discounts to replacement cost"
              />
              <LifecycleCard
                step="2"
                title="Design & Development"
                description="Develop and construct sustainable, high-quality properties using modern systems and best practices"
              />
              <LifecycleCard
                step="3"
                title="Leasing & Sales"
                description="Lease and sell assets to local and international investors, maximizing occupancy and returns"
              />
              <LifecycleCard
                step="4"
                title="Asset Management"
                description="Optimize operations and performance throughout the holding period and exit strategy"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Our Specializations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <SpecializationCard
                icon={<Building2 className="w-10 h-10" strokeWidth={1.5} />}
                title="Commercial Real Estate"
                description="Office complexes, retail centers, and business parks in high-growth urban corridors"
              />
              <SpecializationCard
                icon={<Globe className="w-10 h-10" strokeWidth={1.5} />}
                title="Healthcare Facilities"
                description="Modern medical centers and specialized healthcare properties serving growing demand"
              />
              <SpecializationCard
                icon={<Zap className="w-10 h-10" strokeWidth={1.5} />}
                title="Mixed-Use Development"
                description="Integrated residential, commercial, and hospitality properties in strategic locations"
              />
              <SpecializationCard
                icon={<TrendingUp className="w-10 h-10" strokeWidth={1.5} />}
                title="Smart Cities & SEZs"
                description="Properties in Special Economic Zones and smart city developments with government support"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investor Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            Our Investor Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<CheckCircle2 className="w-12 h-12" strokeWidth={1.5} />}
              title="Project Sourcing"
              description="Pre-vetted, off-market real estate opportunities aligned with your investment criteria and return targets"
            />
            <ServiceCard
              icon={<Users className="w-12 h-12" strokeWidth={1.5} />}
              title="Investment Fund Setup"
              description="Establish and manage dedicated investment funds tailored to your capital deployment strategy and timeline"
            />
            <ServiceCard
              icon={<TrendingUp className="w-12 h-12" strokeWidth={1.5} />}
              title="Due Diligence & Analysis"
              description="Comprehensive market analysis, financial modeling, and risk assessment for every investment opportunity"
            />
          </div>
        </div>
      </section>

      {/* Why AGH Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-16">
            Why AGH
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Local Expertise, Global Standards
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine deep knowledge of Morocco's real estate market with
                  international investment best practices and institutional-grade
                  governance.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Strategic Market Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We concentrate on high-growth urban centers and government-backed
                  development zones where fundamentals, timing, and capital alignment
                  create exceptional opportunities.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Full-Cycle Execution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From acquisition through exit, we manage every phase of the
                  investment lifecycle, reducing complexity and risk for our
                  partners.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Aligned Incentives
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team invests alongside our partners in every venture,
                  ensuring our success is directly tied to investor returns.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Innovation & Sustainability
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We explore PropTech solutions, green construction practices, and
                  sustainable development to maximize long-term asset value and
                  community impact.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Transparent Partnership
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain open communication, regular reporting, and
                  accountability throughout the investment period and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-16">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ImpactCard
              metric="$2.5B+"
              label="Total Transaction Value"
              description="Invested across Morocco's most promising real estate opportunities"
            />
            <ImpactCard
              metric="50+"
              label="Projects Completed"
              description="From acquisition through successful exit and asset management"
            />
            <ImpactCard
              metric="15+"
              label="Urban Markets"
              description="Presence across Morocco's fastest-growing cities and economic zones"
            />
          </div>

          <div className="mt-16 p-12 bg-card border border-border">
            <p className="text-lg text-foreground leading-relaxed">
              Beyond financial returns, we're committed to creating lasting value
              for the communities we invest in. Our projects generate employment,
              improve urban infrastructure, and support Morocco's vision of
              sustainable economic growth. We believe responsible investment and
              superior returns go hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8">
            Ready to Invest?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Let's explore how AGH can help you access Morocco's most compelling
            real estate opportunities with confidence and clarity.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
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

// Lifecycle Card Component
function LifecycleCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-background border-2 border-border hover:border-primary transition-all duration-300">
      <div className="text-4xl font-bold text-primary mb-4">{step}</div>
      <h4 className="text-lg font-semibold text-foreground mb-3">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Specialization Card Component
function SpecializationCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-background border border-border hover:border-primary transition-all duration-300 group">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Service Card Component
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-card border border-border hover:border-primary transition-all duration-300">
      <div className="text-primary mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Impact Card Component
function ImpactCard({
  metric,
  label,
  description,
}: {
  metric: string;
  label: string;
  description: string;
}) {
  return (
    <Card className="p-8 bg-primary text-primary-foreground border-0">
      <div className="text-4xl font-bold mb-3">{metric}</div>
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </Card>
  );
}
