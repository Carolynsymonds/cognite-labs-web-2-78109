import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import CustomerExperienceSection from "@/components/CustomerExperienceSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightning, Target, Users, TrendUp, Rocket, CurrencyDollar, Trophy, ArrowRight } from "@phosphor-icons/react";
import heroImage from "@/assets/hero-image.png";
import opportunityGapImage from "@/assets/opportunity-gap.png";
import ecoExpertsLogo from "@/assets/logos/eco-experts.png";
import mvfLogo from "@/assets/logos/mvf.png";
import spaceCommLogo from "@/assets/logos/space-comm-expo.png";
import tenzingLogo from "@/assets/logos/tenzing.png";
const Home = () => {
  const scrollToNextSection = () => {
    const section = document.getElementById('customer-experience');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[12fr_9fr] gap-12 md:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h1>
                AI Delivered. <span className="text-[hsl(var(--warm-grey))]">From Within.</span>
              </h1>
              
              <p className="text-lg md:text-xl">We embed experienced AI Product Managers inside your business to deliver outcomes fast and to build capability that lasts.</p>
              
              <p className="text-lg md:text-xl">AI Product Managers provide AI capability and execution, fast. They bridge the gap between ambition and outcomes, delivering measurable transformation without large teams and complexity.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={scrollToNextSection}>
                  Learn More
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Visual Placeholder */}
            <div className="relative flex items-center justify-center h-full">
              <img src={heroImage} alt="AI Transformation Visual" className="w-full h-full object-contain" />
            </div>
            
          </div>
        </div>
      </section>

      

      {/* Customer Experience Section */}
      <CustomerExperienceSection />

      {/* Benefits at a Glance */}
      <section id="outcomes-section" className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-10">Drive Outcomes Not Experiments</h2>

          <Accordion type="multiple" className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="opportunities" className="bg-card rounded-2xl shadow-sm border border-border/50">
              <AccordionTrigger className="px-8 pt-8 pb-4 hover:no-underline">
                <div className="flex items-start gap-4 text-left">
                  <Target weight="duotone" size={32} className="text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Find the opportunities that matter</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="pl-12">From opportunity identification to pilot in weeks. AI Product Managers drive delivery across customer facing propositions and internal functions. We can deploy Lead AI Product Managers working company wide or specialists in innovation types (like Hyper-personalisation or Voice) or sector specific specialists including Finance and Law.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="capability" className="bg-card rounded-2xl shadow-sm border border-border/50">
              <AccordionTrigger className="px-8 pt-8 pb-4 hover:no-underline">
                <div className="flex items-start gap-4 text-left">
                  <Users weight="duotone" size={32} className="text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Drive AI Capability and Company Transformation from Within</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="pl-12">
                  Build a scalable AI capability inside your organisation. Our trained AI PMs up-skill your teams and
                  leave behind lasting AI fluency, so your organisation keeps innovating long after the first project.
                  Access bespoke tools, libraries and training that can be easily adopted to wider teams.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="costs" className="bg-card rounded-2xl shadow-sm border border-border/50">
              <AccordionTrigger className="px-8 pt-8 pb-4 hover:no-underline">
                <div className="flex items-start gap-4 text-left">
                  <CurrencyDollar weight="duotone" size={32} className="text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Lower Costs</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="pl-12">
                  Deliver more with less. AI PMs streamline workflows, automate manual processes, and cut development
                  costs by focusing on impact-driven priorities not endless experimentation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="revenue" className="bg-card rounded-2xl shadow-sm border border-border/50">
              <AccordionTrigger className="px-8 pt-8 pb-4 hover:no-underline">
                <div className="flex items-start gap-4 text-left">
                  <TrendUp weight="duotone" size={32} className="text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Unlock Value Creation and Drive New Revenue</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="pl-12">AI Product Managers use new toolchains and ways of working that can unlock new markets, customer segments and make opportunities once unviable, viable. AI Product Managers create and deploy strategies that help you outpace competitors and drive core company KPIs.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Our Transformation Engine */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="mb-8">Built for impact, not overhead.</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We built a system to develop the AI talent critical to driving impact at speed. We don't just recruit; we forge essential future facing capability and embed it directly into your organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContentCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-heading font-bold text-lg">
                  1
                </div>
                <h3 className="mb-0 text-xl">Identify Potential</h3>
              </div>
              <p>
                We select exceptional mid-career professionals with proven experience in product, engineering, and data.
              </p>
            </ContentCard>

            <ContentCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-heading font-bold text-lg">
                  2
                </div>
                <h3 className="mb-0 text-xl">Forge Capability</h3>
              </div>
              <p>
                Candidates undergo our rigorous, hands-on "AI PM Skills Lab" to build an elite, end-to-end skillset.
              </p>
            </ContentCard>

            <ContentCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-heading font-bold text-lg">
                  3
                </div>
                <h3 className="mb-0 text-xl">Embed Leadership</h3>
              </div>
              <p>
                Your certified AI Product Manager is deployed into your organisation to lead and execute high-impact AI initiatives.
              </p>
            </ContentCard>

            <ContentCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-heading font-bold text-lg">
                  4
                </div>
                <h3 className="mb-0 text-xl">Augment & Scale</h3>
              </div>
              <p>
                We provide continuous expert mentorship to our AI Product Managers in-role and a proven framework for up-skilling your
                wider team.
              </p>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-10">Powering AI Transformation for Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-90">
            <img src={mvfLogo} alt="MVF" className="h-24 md:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={ecoExpertsLogo} alt="The Eco Experts" className="h-24 md:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={tenzingLogo} alt="Tenzing" className="h-24 md:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={spaceCommLogo} alt="Space-Comm Expo" className="h-24 md:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          
          {/* CTA after logos */}
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl mb-6">Talk to us about embedded AI capability</h3>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-left mb-12 text-primary-foreground">Learn More</h2>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-6xl mx-auto">
            <div className="flex flex-col h-full">
              <h3 className="text-primary-foreground">For Companies</h3>
              <p className="text-xl text-primary-foreground/90 mt-8 flex-grow">
                Accelerate AI adoption and transformation.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="w-full md:w-auto">
                  <Link to="/companies/approach">
                    Learn More <ArrowRight weight="duotone" size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-primary-foreground">For Talent</h3>
              <p className="text-xl text-primary-foreground/90 mt-8 flex-grow">
                Future-proofed careers, become an AI leader.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="w-full md:w-auto">
                  <Link to="/talent/path">
                    Join a Cohort <ArrowRight weight="duotone" size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;