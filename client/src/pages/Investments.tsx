import { ArrowRight, MapPin, TrendingUp, DollarSign, CheckCircle2, Building2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Design Philosophy: Corporate Minimalism with Brutalist Accents
 * - Deep burgundy accents (#7A1F1F) highlight investment opportunities
 * - Asymmetric layouts with 60/40 splits for visual interest
 * - Line-art iconography for sophisticated, minimal aesthetic
 * - Playfair Display for elegant headings, Inter for readable body text
 */

interface ProjectCardProps {
  name: string;
  location: string;
  type: string;
  size: string;
  pricePerSqm: string;
  totalPrice: string;
  irr: string;
  status: "vetted" | "active" | "featured";
  features?: string[];
}

function ProjectCard({ name, location, type, size, pricePerSqm, totalPrice, irr, status, features }: ProjectCardProps) {
  const statusColors = {
    vetted: "bg-accent/10 border-accent text-accent",
    active: "bg-blue-50 border-blue-200 text-blue-700",
    featured: "bg-amber-50 border-amber-200 text-amber-700",
  };

  const statusLabels = {
    vetted: "Ready for Investment",
    active: "Due Diligence",
    featured: "Capital Raise",
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className={`px-6 py-3 border-b border-border ${statusColors[status]}`}>
        <span className="font-semibold text-sm">{statusLabels[status]}</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-6">
          <MapPin className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-sm">{location}</span>
        </div>

        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Property Type</p>
              <p className="text-sm font-semibold text-foreground">{type}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Sellable Size</p>
              <p className="text-sm font-semibold text-foreground">{size}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Price/m²</p>
              <p className="text-sm font-semibold text-foreground">{pricePerSqm}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Total Price</p>
              <p className="text-sm font-semibold text-foreground">{totalPrice}</p>
            </div>
          </div>

          <div className="bg-background rounded p-4 border border-border">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Expected IRR</span>
              <span className="text-xl font-bold text-accent">{irr}</span>
            </div>
          </div>
        </div>

        {features && features.length > 0 && (
          <div className="mb-6 pb-6 border-b border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Key Features</p>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button className="w-full bg-accent hover:bg-accent/90 text-background">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

interface FundFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FundFeature({ icon, title, description }: FundFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="text-accent flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Investments() {
  const [activeFilter, setActiveFilter] = useState<"all" | "vetted" | "active" | "featured">("all");

  const projects: ProjectCardProps[] = [
    {
      name: "Beni Makada Tower",
      location: "Tangier, Morocco",
      type: "Class-A Luxury Studios",
      size: "2,257 m²",
      pricePerSqm: "$1,716",
      totalPrice: "$3,875,000",
      irr: "55-65%",
      status: "vetted",
      features: [
        "Prime Tangier location in prestigious neighborhood",
        "Fast returns through accelerated sales cycles",
        "High profit margins delivering exceptional ROI",
        "2 underground garages + ground floor commercial + 5 residential floors",
      ],
    },
    {
      name: "400 Rue de Fès",
      location: "Tangier, Morocco",
      type: "Mixed-Use Development",
      size: "2,920 m²",
      pricePerSqm: "$1,952",
      totalPrice: "$5,700,000",
      irr: "35-45%",
      status: "vetted",
      features: [
        "Strategic location in Tangier's growth corridor",
        "Strong local demand and market velocity",
        "Clear zoning and regulatory approval pathway",
      ],
    },
    {
      name: "Anfa Heights",
      location: "Morocco",
      type: "Residential Development",
      size: "1,800 m²",
      pricePerSqm: "$1,800",
      totalPrice: "$3,240,000",
      irr: "25%",
      status: "active",
      features: [
        "Currently in due diligence phase",
        "Strong fundamentals and market positioning",
        "Attractive risk-adjusted returns",
      ],
    },
    {
      name: "Vista de Baskoura",
      location: "Morocco",
      type: "Commercial & Residential",
      size: "4,200 m²",
      pricePerSqm: "$1,750",
      totalPrice: "$7,345,500",
      irr: "32%",
      status: "active",
      features: [
        "Large-scale development opportunity",
        "Mixed-use positioning for diversified revenue",
        "Active due diligence in progress",
      ],
    },
    {
      name: "Integrated Lifestyle Destination",
      location: "Tangier, Morocco",
      type: "Mixed-Use Resort Development",
      size: "Multi-component",
      pricePerSqm: "N/A",
      totalPrice: "$130.3M",
      irr: "TBD",
      status: "featured",
      features: [
        "215 residences & villas with sea views (>90 pre-sold)",
        "5-star hotel (150 keys) with international operator LOI",
        "Tangier's only ice rink & bowling leisure center",
        "Health & wellness center with medical tourism focus",
        "Premium promenade with boutiques & restaurants",
      ],
    },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
              Investment Opportunities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our curated pipeline of high-potential real estate investments across Morocco's most compelling markets. From vetted opportunities ready for capital deployment to large-scale development projects seeking partners, AGH provides institutional-grade investment vehicles with transparent underwriting and aligned incentives.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-background">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Fund Vehicle Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Atlas US Morocco Development Fund I
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A Delaware limited partnership formed to aggregate investor capital and deploy it into a diversified portfolio of real estate and development opportunities located primarily in the US and the Kingdom of Morocco.
              </p>
              <div className="space-y-6 mb-8">
                <FundFeature
                  icon={<Building2 className="w-6 h-6" strokeWidth={1.5} />}
                  title="Blind Pool Structure"
                  description="Flexible capital deployment across multiple project-specific Special Purpose Entities (SPEs), each wholly owned by the Fund."
                />
                <FundFeature
                  icon={<TrendingUp className="w-6 h-6" strokeWidth={1.5} />}
                  title="Diversified Portfolio"
                  description="Exposure to multiple asset classes, geographies, and investment stages within a single institutional vehicle."
                />
                <FundFeature
                  icon={<Lightbulb className="w-6 h-6" strokeWidth={1.5} />}
                  title="Aligned Incentives"
                  description="AGH team invests alongside fund investors in every venture, ensuring shared success and accountability."
                />
              </div>
              <Button size="lg" variant="outline">
                Request Fund Documentation
              </Button>
            </div>
            <div className="bg-background rounded-lg border border-border p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Fund Highlights</h3>
              <div className="space-y-4">
                {[
                  { label: "Structure", value: "Delaware Limited Partnership" },
                  { label: "Focus", value: "US & Morocco Real Estate" },
                  { label: "Deployment", value: "Project-Specific SPEs" },
                  { label: "Strategy", value: "Value-Add & Development" },
                  { label: "Investor Alignment", value: "Co-Investment Required" },
                  { label: "Status", value: "Accepting Capital Commitments" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between pb-4 border-b border-border last:border-b-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Pipeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Current Investment Pipeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our vetted pipeline reflects rigorous project selection based on margin of safety, capital recycling speed, and regulatory certainty. Each opportunity has been evaluated against our institutional investment criteria.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "all"
                  ? "bg-accent text-background"
                  : "bg-card border border-border text-foreground hover:border-accent"
              }`}
            >
              All Opportunities
            </button>
            <button
              onClick={() => setActiveFilter("vetted")}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "vetted"
                  ? "bg-accent text-background"
                  : "bg-card border border-border text-foreground hover:border-accent"
              }`}
            >
              Ready for Investment
            </button>
            <button
              onClick={() => setActiveFilter("active")}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "active"
                  ? "bg-accent text-background"
                  : "bg-card border border-border text-foreground hover:border-accent"
              }`}
            >
              Due Diligence Phase
            </button>
            <button
              onClick={() => setActiveFilter("featured")}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "featured"
                  ? "bg-accent text-background"
                  : "bg-card border border-border text-foreground hover:border-accent"
              }`}
            >
              Capital Raise
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Selection Criteria */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            Our Investment Selection Framework
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Risk-Adjusted Returns",
                description:
                  "We prioritize projects with the highest Return on Cost (ROC) and lowest break-even point, ensuring profitability even in downside scenarios.",
              },
              {
                number: "2",
                title: "Market Velocity",
                description:
                  "We target assets in prime locations with proven high absorption rates, minimizing holding periods and maximizing capital efficiency.",
              },
              {
                number: "3",
                title: "Regulatory Certainty",
                description:
                  "We favor opportunities with clear zoning and approval pathways, reducing timeline uncertainty and protecting projected sellable area.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-8">
                <div className="w-12 h-12 bg-accent text-background rounded-lg flex items-center justify-center font-bold text-lg mb-6">
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AGH Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            Why Invest With AGH
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Institutional Underwriting",
                description: "Rigorous financial modeling, scenario analysis, and risk evaluation backed by deep market expertise.",
              },
              {
                title: "Transparent Deal Structure",
                description: "Clear waterfall structures, fee alignment, and regular investor reporting throughout the investment period.",
              },
              {
                title: "Local Market Expertise",
                description: "Deep knowledge of Morocco's real estate fundamentals, regulatory environment, and buyer preferences.",
              },
              {
                title: "Full-Cycle Execution",
                description: "From acquisition through exit, we manage every phase of the investment lifecycle to maximize returns.",
              },
              {
                title: "Aligned Incentives",
                description: "Our team co-invests alongside partners in every venture, ensuring shared success and accountability.",
              },
              {
                title: "Capital Efficiency",
                description: "Strategic acquisitions at favorable prices, efficient construction execution, and accelerated sales cycles.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
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
            Ready to Explore Investment Opportunities?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how AGH can help you deploy capital into high-potential real estate investments with institutional-grade governance and transparent alignment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-background">
              Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Download Investment Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
