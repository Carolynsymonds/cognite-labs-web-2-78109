import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import { Buildings, Phone, Megaphone, Scales, ChartLine } from "@phosphor-icons/react";
const Solutions = () => {
  return <div className="min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">AI Leadership for Your Specific Challenge</h1>
          <p className="text-lg md:text-xl">
            AI transformation is not one-size-fits-all. We provide AI Product Managers fit for your context - AI Generalists or those
            with the specific domain expertise and functional skills to solve your most pressing identified challenges
            and unlock your greatest opportunities.
          </p>
        </div>

        {/* Deployment Introduction */}
        <section className="mb-16">
          <ContentCard className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Short term impact. Long term value.</h2>
            <p className="text-lg leading-relaxed">
              Accelerate your AI readiness and drive enterprise value without the cost and risk of having to scale a large team on day one. AI Product Managers create direct execution capability, as well as acting as AI Champions and up-skilling the company. They are supported by Cognite's Expert AI Leaders, who can also engage with your leadership teams to define strategy. AI Product Managers are deployed on a fixed term contract within a governing MSA. Placements typically last 24 months with clear breaks and reviews to provide flexibility.
            </p>
          </ContentCard>
        </section>

        {/* By Specialism */}
        <section className="mb-16">
          <h2 className="mb-8 text-center">Solutions by Need</h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Our AI Product Managers can be trained and deployed with deep expertise relevant to specific needs:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Buildings weight="duotone" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Senior AI Product Managers</h3>
                  <p>
                    Strategic AI Product Leaders who can connect with your business strategy, surface AI opportunities
                    and execute quickly. Capable of thinking and operating across functions and domains with strategic
                    agility.
                  </p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Phone weight="duotone" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Voice & Call Centre AI Product Manager</h3>
                  <p>
                    Specialists who deploy the latest in Voice AI to automate workflows, unlock efficiencies, and create
                    new growth opportunities in customer-facing operations.
                  </p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Megaphone weight="duotone" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Marketing & Hyper-Personalisation AI Product Manager</h3>
                  <p>
                    Leaders who combine data, creative, and technology skills to design and deploy ROI-driving
                    hyper-personalisation campaigns.
                  </p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Scales weight="duotone" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">AI Product Manager - Law</h3>
                  <p>
                    Experts in legal use cases and platforms like Harvey and Ivo, driving efficiency and new working
                    practices for legal teams.
                  </p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <ChartLine weight="duotone" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">AI Product Manager - Finance</h3>
                  <p>
                    Experts in financial use cases and key domain specific platforms like Hebbia, ensuring effective
                    adoption and ROI.
                  </p>
                </div>
              </div>
            </ContentCard>
          </div>
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Partner with Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/companies/case-studies">See Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default Solutions;