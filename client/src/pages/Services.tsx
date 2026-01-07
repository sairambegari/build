import { ArrowRight, BarChart3, Building2, CheckCircle2, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Corporate Minimalism with Brutalist Accents
 * - Deep burgundy accents (#7A1F1F) highlight key service offerings
 * - Asymmetric layouts with 60/40 splits for visual interest
 * - Line-art iconography for sophisticated, minimal aesthetic
 * - Playfair Display for elegant headings, Inter for readable body text
 */

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="text-accent mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface OfferingProps {
  number: string;
  title: string;
  description: string;
}

function OfferingStep({ number, title, description }: OfferingProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-background font-semibold text-lg">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We invest thematically in high-quality assets, focusing where we see outsized growth potential driven by global economic and demographic trends. From market analysis to fund management, we handle the full investment lifecycle.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-background">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Comprehensive Investment Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              AGH provides end-to-end services across the entire real estate investment lifecycle, combining international standards with deep local expertise in Morocco's most promising markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<BarChart3 className="w-12 h-12" strokeWidth={1.5} />}
              title="Market Research & Consulting"
              description="Validate opportunities with data-driven insights and local intelligence before committing capital."
              features={[
                "Market entry strategy & regulatory guidance",
                "Feasibility studies & financial projections",
                "Site selection & property analysis",
                "Investor pitch deck preparation",
                "Deal sourcing, structuring & management",
                "Risk analysis & mitigation planning",
              ]}
            />

            <ServiceCard
              icon={<TrendingUp className="w-12 h-12" strokeWidth={1.5} />}
              title="Investment Structuring & Fund Formation"
              description="Design optimal investment structures and establish dedicated funds tailored to your capital deployment strategy."
              features={[
                "Joint venture, partnership & syndication structuring",
                "Access to local and international investors",
                "Financing strategy & capital sourcing",
                "Government incentives & tax credit guidance",
                "ROI modeling & financial scenario planning",
                "Capital raise support & investor presentations",
              ]}
            />

            <ServiceCard
              icon={<Building2 className="w-12 h-12" strokeWidth={1.5} />}
              title="Deal Analysis & Underwriting"
              description="Comprehensive financial modeling, pitch decks, and offering memorandums to support your investment decisions."
              features={[
                "Institutional-quality financial modeling",
                "Deal evaluation & underwriting analysis",
                "Waterfall structuring & return scenarios",
                "Pitch deck & offering memorandum preparation",
                "Investment risk evaluation & mitigation",
                "Syndication support & advisory services",
              ]}
            />

            <ServiceCard
              icon={<Lightbulb className="w-12 h-12" strokeWidth={1.5} />}
              title="Development & Project Execution"
              description="Coordinate every phase of development to ensure projects meet international standards while navigating local requirements."
              features={[
                "Site selection advisory & acquisition support",
                "Permitting, approvals & regulatory compliance",
                "Architect, contractor & vendor coordination",
                "Construction supervision & quality control",
                "Renovation & asset improvement projects",
                "Build-to-suit development for specialized operators",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Asset Management Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Asset Management & Optimization
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Maximize returns throughout the holding period and beyond with strategic asset management, operational optimization, and disciplined exit planning.
              </p>
              <ul className="space-y-4">
                {[
                  "Post-construction close-out & compliance verification",
                  "Property management & operational oversight",
                  "Revenue optimization: leasing, tenant placement & contracts",
                  "Marketing & sales support for asset disposition",
                  "Investor reporting & financial performance tracking",
                  "Long-term asset growth strategies",
                  "Exit planning & portfolio optimization",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Our Approach</h3>
              <div className="space-y-6">
                <OfferingStep
                  number="1"
                  title="Acquisition at Deep Value"
                  description="Identify and acquire undervalued real estate assets at significant discounts to replacement cost"
                />
                <OfferingStep
                  number="2"
                  title="Design & Development"
                  description="Develop and construct sustainable, high-quality properties using modern systems and best practices"
                />
                <OfferingStep
                  number="3"
                  title="Leasing & Sales"
                  description="Lease and sell assets to local and international investors, maximizing occupancy and returns"
                />
                <OfferingStep
                  number="4"
                  title="Asset Management"
                  description="Optimize operations and performance throughout the holding period and exit strategy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            Our Specializations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Commercial Real Estate",
                description: "Office complexes, retail centers, and business parks in high-growth urban corridors",
              },
              {
                title: "Healthcare Facilities",
                description: "Modern medical centers and specialized healthcare properties serving growing demand",
              },
              {
                title: "Mixed-Use Development",
                description: "Integrated residential, commercial, and hospitality properties in strategic locations",
              },
              {
                title: "Smart Cities & SEZs",
                description: "Properties in Special Economic Zones and smart city developments with government support",
              },
            ].map((spec, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{spec.title}</h3>
                <p className="text-muted-foreground text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AGH Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            Why Choose AGH
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise, Global Standards",
                description: "We combine deep knowledge of Morocco's real estate market with international investment best practices and institutional-grade governance.",
              },
              {
                title: "Strategic Market Focus",
                description: "We concentrate on high-growth urban centers and government-backed development zones where fundamentals, timing, and capital alignment create exceptional opportunities.",
              },
              {
                title: "Full-Cycle Execution",
                description: "From acquisition through exit, we manage every phase of the investment lifecycle, reducing complexity and risk for our partners.",
              },
              {
                title: "Aligned Incentives",
                description: "Our team invests alongside our partners in every venture, ensuring our success is directly tied to investor returns.",
              },
              {
                title: "Innovation & Sustainability",
                description: "We explore PropTech solutions, green construction practices, and sustainable development to maximize long-term asset value.",
              },
              {
                title: "Transparent Partnership",
                description: "We maintain open communication, regular reporting, and accountability throughout the investment period and beyond.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Ready to Transform Your Real Estate Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's explore how AGH can help you identify, structure, and execute high-potential real estate investments in Morocco's most compelling markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-background">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
