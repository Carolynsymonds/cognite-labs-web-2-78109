import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import talentSelectionImage from "@/assets/approach-step1-talent-selection.png";
import forgeEliteImage from "@/assets/approach-step2-forge-elite.png";
import embedCapabilityImage from "@/assets/approach-step3-embed-capability.png";
import ongoingSupportImage from "@/assets/approach-step4-ongoing-support.png";
import sustainableValueImage from "@/assets/approach-step5-sustainable-value.png";
const Approach = () => {
  return <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">A Unique Engine for AI Transformation</h1>
          <p className="text-lg md:text-xl">We provide more than just talent, we deliver a transformation capability.</p>
          <p className="text-lg md:text-xl font-semibold my-4">
            Identify → Forge → Embed → Augment → Transform
          </p>
          <p className="text-lg md:text-xl">
            Our proven model is designed to embed sustainable, high-performing AI Capability directly into your organisation, ensuring you not only launch projects but build lasting competitive advantage.
          </p>
        </div>

        {/* The Five Stages */}
        <div className="mb-16">
          {/* Step 1 - Image Left */}
          <div className="flex flex-col-reverse md:flex-row-reverse gap-12 md:gap-16 items-center mb-24 md:mb-32">
            <div className="space-y-4 md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Recruit High-Potential AI Talent</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't start with graduates. Our process begins by identifying exceptional mid-career professionals
                with 5-10 years of proven experience in product, engineering, or data roles. We select for commercial
                acumen, leadership potential, and an ambition to drive change.
              </p>
            </div>
            <div className="relative md:w-1/2">
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <img src={talentSelectionImage} alt="Identifying high-potential AI talent from a diverse pool of professionals" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Step 2 - Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center mb-24 md:mb-32">
            <div className="space-y-4 md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Forge Elite AI Product Managers</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Candidates undergo a rigorous and proprietary AI Product Manager Skills Lab. This immersive program goes
                beyond theory, focusing on hands-on sprints and real-world projects to build mastery in AI/tool
                literacy, product leadership, and commercial business casing. All alongside understanding how to deliver
                AI transformation with empathy and emotional intelligence. The output is a "Cognite Certified AI Product
                Manager," ready to deliver value from day one.
              </p>
            </div>
            <div className="relative md:w-1/2">
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <img src={forgeEliteImage} alt="Transformation from mid-career professionals to elite AI Product Managers through the Skills Lab" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Step 3 - Image Left */}
          <div className="flex flex-col-reverse md:flex-row-reverse gap-12 md:gap-16 items-center mb-24 md:mb-32">
            <div className="space-y-4 md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Embed Transformation Capability</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your certified AI Product Manager is embedded into your organisation to lead and execute high-impact AI initiatives.
                They are designed to make an impact quickly, working either autonomously or with your existing teams to
                start delivering value from the outset. They operate as a single fulcrum for delivering measurable
                outcomes that drive core business levers.
              </p>
            </div>
            <div className="relative md:w-1/2">
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <img src={embedCapabilityImage} alt="AI Product Manager embedded as central transformation fulcrum within organizational systems and structure" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Step 4 - Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center mb-24 md:mb-32">
            <div className="space-y-4 md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 4</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Support from Best-in Class AI Leaders</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout their deployment, AI Product Managers are supported through mentoring, strategy sessions and continuous
                learning not only via the Cognite Labs community but with direct access to C-Suite Operators with
                decades of technology, product and AI experience.
              </p>
            </div>
            <div className="relative md:w-1/2">
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <img src={sustainableValueImage} alt="Sustainable value ecosystem showing continuous support and capability transfer orbiting around AI transformation" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Step 5 - Image Left */}
          <div className="flex flex-col-reverse md:flex-row-reverse gap-12 md:gap-16 items-center mb-24 md:mb-32">
            <div className="space-y-4 md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 5</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Ensure Sustainable Value</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our engagement is a partnership. Your AI Product Manager is continuously deploying skills, knowledge and tools into
                your organisation. We focus on capability transfer, up-skilling your teams, and building a culture of
                AI-driven innovation that lasts long after our initial engagement. At the end of a placement you can
                continue the partnership model or are welcome to engage placements as an internal hire.
              </p>
            </div>
            <div className="relative md:w-1/2">
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <img src={ongoingSupportImage} alt="Organic growth tree representing continuous mentoring, strategy support, and knowledge sharing from AI leaders" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Partner with Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/companies/advantage">Discover the AI Product Manager Advantage</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default Approach;