import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import { BookOpen, Lightning, Trophy } from "@phosphor-icons/react";

const SkillsLab = () => {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">The AI Product Manager Skills Lab: <span className="text-muted-foreground">From Theory to Impact to Future Career</span></h1>
          <p className="text-lg md:text-xl">
            This is where your transformation begins. Our fully immersive Skills Lab is an intensive, hands-on program
            designed to forge your existing experience into an elite AI Product Management skillset. You will learn by
            doing, working on real-world projects in agile sprints.
          </p>
        </div>

        {/* The Curriculum Overview */}
        <section className="mb-16">
          <h2 className="mb-8 text-center">The Curriculum Overview</h2>

          <div className="space-y-6">
            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <BookOpen weight="duotone" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-3">Phase 1: Foundations</h3>
                  <p className="text-lg">
                    We build your core AI literacy. You will master core AI toolchains and platforms, the principles of
                    responsible AI, Product Leadership, Data Literacy and ML alongside fit for purpose strategy tools
                    like our AI Business Case Canvas and Opportunity Identification Models.
                  </p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Lightning weight="duotone" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-3">Phase 2: Sprint Labs</h3>
                  <p className="text-lg">
                    In small pods, you will tackle real-world AI use cases, such as automating workflows, AI powered NPD,
                    Hyper-personalisation and Agentic Workflows. This is where you apply your skills practically and
                    learn to deliver in rapid, iterative cycles.
                  </p>
                </div>
              </div>
            </ContentCard>

            <ContentCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Trophy weight="duotone" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-3">Phase 3: Capstone Project</h3>
                  <p className="text-lg">
                    You will build a proof-of-concept for a Capstone project, culminating in a live demo and a formal
                    business presentation to stakeholders.
                  </p>
                </div>
              </div>
            </ContentCard>
          </div>
        </section>

        {/* Your New Credential */}
        <section className="mb-16">
          <ContentCard className="bg-transparent border-2 border-primary/30 text-center max-w-3xl mx-auto">
            <Trophy weight="duotone" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="mb-4">Your New Credential</h2>
            <p className="text-lg">
              Upon successful completion, you will earn the <strong>Cognite Certified AI Product Manager</strong> status
              — a powerful credential that signals your readiness to lead and deliver in the AI economy.
            </p>
            <p className="text-lg mt-4">
              And your development doesn't stop here; it's the beginning of your two-year journey of continuous learning
              and mentorship.
            </p>
          </ContentCard>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/contact">Join a Cohort</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillsLab;
