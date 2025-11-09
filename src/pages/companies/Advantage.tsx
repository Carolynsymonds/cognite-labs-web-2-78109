import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import { Brain, Target, CurrencyDollar } from "@phosphor-icons/react";
import carolynProfile from "@/assets/carolyn-profile.png";
const Advantage = () => {
  return <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">
            Capability, Training, and Execution.{" "}
            <span className="text-[hsl(var(--warm-grey))]">Embedded Through a Single Linchpin Role</span>
          </h1>
          <p className="text-lg md:text-xl">
            While over 80% of AI projects fail to deliver a return, these failures rarely stem from the technology
            itself. They fail because of a gap between business goals, technical execution, and commercial reality. The
            AI Product Manager is the role purpose-built to bridge that gap without having to immediately scale complex
            teams or develop multiple skills centres.
          </p>
        </div>

        {/* Three Core Literacies */}
        <section className="mb-16">
          <h2 className="text-center mb-12">Benefit from three core skillsets in one</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ContentCard className="text-center">
              <Brain weight="duotone" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="mb-4">AI & Technology Fluency</h3>
              <p>Mastery of modern toolsets, LLMs, and data workflows to understand the art of the possible.</p>
            </ContentCard>

            <ContentCard className="text-center">
              <Target weight="duotone" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="mb-4">Product Management Mastery</h3>
              <p>
                A disciplined approach to defining problems, leading agile sprints, and aligning stakeholders.
              </p>
            </ContentCard>

            <ContentCard className="text-center">
              <CurrencyDollar weight="duotone" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="mb-4">Commercial & Business Literacy</h3>
              <p>
                The ability to build a business case, model ROI, and ensure every technical decision serves a commercial
                KPI.
              </p>
            </ContentCard>
          </div>
        </section>

        {/* Lean, Fast, and Simple */}
        <section className="mb-16">
          <ContentCard className="bg-muted/30">
            <h2 className="mb-6">Lean, Fast, and Simple: De-Risking AI Delivery</h2>
            <p className="text-lg mb-4">
              Traditional AI projects often become slow and complex, requiring large teams and suffering from
              communication delays. Our AI Product Managers are the antidote. Their end-to-end skillset means they can execute with a
              lean, agile approach, making projects simple and fast.
            </p>
            <p className="text-lg mb-4">
              They can work autonomously to deliver an MVP or integrate seamlessly alongside your existing domain experts, accelerating impact while your organisation's broader capabilities develop over time.
            </p>
            <p className="text-lg">
              This model simplifies project delivery, collapses timelines, and gets you to demonstrable ROI faster.
            </p>
          </ContentCard>
        </section>

        {/* Meet an AI PM */}
        <section className="mb-16">
          <ContentCard className="flex flex-col md:flex-row-reverse gap-6">
            <img 
              src={carolynProfile} 
              alt="Carolyn's Profile" 
              className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 mx-auto md:mx-0 object-contain"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-2">Carolyn</h3>
              <p className="text-sm text-muted-foreground mb-4">AI Product Manager</p>
              <p className="text-lg leading-relaxed mb-4">
                Studied Computer Science completing an MSc in Artificial Intelligence. She
                brings eight years of commercial experience in technology, starting as a Software Engineer before
                transitioning into Product Management and Delivery roles. Carolyn has worked across healthcare and other
                industries, developing a deep understanding of how technology drives real-world impact.
              </p>
              <p className="text-lg leading-relaxed">
                Her experience strengthened her academic expertise in machine learning and applied AI, building a solid
                technical foundation to bridge strategy and execution. A passion for the opportunities AI offers led to
                training with Cognite Labs and developing the unique AI Product Manager skills to now move from strategic opportunity
                identification to MVP, Production and Measurable ROI often as an autonomous unit of one.
              </p>
            </div>
          </ContentCard>
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Partner with Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/companies/solutions">Discover Solutions and Specialisms</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default Advantage;