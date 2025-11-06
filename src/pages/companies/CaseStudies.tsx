import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import ecoExpertsLogo from "@/assets/logos/eco-experts.png";
import mvfLogo from "@/assets/logos/mvf.png";
import tenzingLogo from "@/assets/logos/tenzing.png";
import spaceCommLogo from "@/assets/logos/space-comm-expo.png";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "The Eco Experts",
      logo: ecoExpertsLogo,
      industry: "Business Services / Utilities",
      title: "Hyper-personalisation",
      backgroundColor: "bg-[#0A3D4E]",
      logoSize: "max-h-60",
      overview:
        "Our AI Product Manager identified an opportunity to generate new value using the efficiency of AI to re-engage dormant leads. They used NLP-driven segmentation and predictive timing models to re-engage contacts → +28% conversion from previously inactive leads → New 7-figure revenue stream unlocked.",
    },
    {
      client: "MVF",
      logo: mvfLogo,
      industry: "SaaS",
      title: "Launching New Adjacent Products for US Restaurateurs",
      backgroundColor: "bg-[#1F1535]",
      logoSize: "max-h-48",
      overview:
        "AI Product Managers identified market gaps and simulated customer intent to accelerate new product launches. → New SaaS product line launched in 10 weeks → £2.5M projected ARR uplift → 40% shorter development cycle",
    },
    {
      client: "Tenzing",
      logo: tenzingLogo,
      industry: "Private Equity / Mid-Market",
      title: "Scaling AI Transformation Portfolio-Wide",
      backgroundColor: "bg-[#CC4F55]",
      logoSize: "max-h-48",
      overview:
        "Cognite Labs partners with leading PE Firm Tenzing to power their AI Sherpa Program. AI Product Managers are deployed cross portfolio to accelerate AI transformation, unlock growth and protect from disruption risk.",
    },
    {
      client: "Space-Comm",
      logo: spaceCommLogo,
      industry: "Events",
      title: "Workflow Automation, Personalisation, and Growth",
      backgroundColor: "bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900",
      logoSize: "max-h-60",
      overview:
        "AI Product Managers developed segmentation and outreach automation for exhibitors and attendees → 3× higher engagement → 20% growth in exhibitor renewals → Fully automated marketing workflows dramatically increasing the capability and reach of the existing team.",
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">Delivering Measurable Impact</h1>
          <p className="text-lg md:text-xl">
            See how our embedded AI Product Managers are creating tangible value for our partners across diverse sectors
            by delivering lean, fast, and simple solutions to complex business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <ContentCard key={index} className="overflow-hidden p-0">
              {/* Hero Section with Colored Background */}
              <div className={`relative h-72 ${study.backgroundColor} flex flex-col p-8 rounded-t-2xl`}>
                {/* Industry Badge */}
                <div className="mb-auto">
                  <span className="inline-block px-4 py-1.5 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                {/* Logo - Centered in remaining space */}
                <div className="flex-1 flex items-center justify-center px-4">
                  <img 
                    src={study.logo} 
                    alt={study.client}
                    className={`${study.logoSize} w-auto object-contain brightness-0 invert drop-shadow-2xl`}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  {study.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {study.overview}
                </p>
              </div>
            </ContentCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
