import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import { Lightbulb } from "@phosphor-icons/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import leadershipProfile1 from "@/assets/leadership-profile-1.png";
import leadershipProfile2 from "@/assets/leadership-profile-2.png";
const About = () => {
  return <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">Building the Transformation Capability for the AI Era</h1>
        </div>

        {/* Our Founding Story */}
        <section className="mb-16">
          <ContentCard className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our Founding Story</h2>
            <div className="space-y-4 text-lg">
              <p>Cognite Labs was founded to solve the single biggest problem we witnessed as C-Suite leaders and technologists: the gap between AI ambition and real-world outcomes. We saw companies spend millions on AI, only to see projects stall, talent misaligned, and value left on the table.</p>
              <p>The problem wasn't the technology; it was a challenge of skills and capability.</p>
              <p>
                We built Cognite Labs on a single, powerful belief: the future will be shaped not by companies that
                simply <em>use</em> AI, but by those that build a deep, native capability to innovate and execute{" "}
                <em>at the speed</em> of AI.
              </p>
              <p>
                While consulting firms sell advice and agencies sell technical manpower, we deliver what's actually
                missing: embedded transformation leadership. We build the AI workforce of the future and place it at the
                heart of your organisation.
              </p>
            </div>
          </ContentCard>
        </section>

        {/* Meet the Leadership */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Led from the front</h2>
          <ContentCard className="max-w-4xl mx-auto mb-8">
            <p className="text-lg">
              Our approach is defined by our experience. The Cognite Labs leadership and advisory team is composed of
              C-suite leaders, technologists, and product experts who have spent decades leading transformation and
              delivering AI led innovations at the highest levels of business.
            </p>
            <p className="text-lg mt-4">
              It is this expertise that underpins our training, our methodology, and the continuous mentorship we provide
              to every AI Product Manager we deploy.
            </p>
          </ContentCard>

          <div className="space-y-8 max-w-4xl mx-auto">
            <ContentCard className="flex flex-col md:flex-row gap-6">
              <img 
                src={leadershipProfile1} 
                alt="Titus Sharpe" 
                className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 mx-auto md:mx-0 object-contain"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2">Titus Sharpe</h3>
                <p className="text-sm text-muted-foreground mb-3">CEO</p>
                <p className="mb-4">
                  Titus is an entrepreneur who has spent his career at the intersection of advanced technology and high-growth business. His journey in AI began during his PhD studies in collaborative robotics, but a drive to apply technology to real-world business challenges led him to launch the first of four successful ventures.
                </p>
                <p className="mb-4">
                  Titus has founded and scaled multiple companies with revenues exceeding £100m, earning the #1 spot on the Sunday Times Tech Track and being named 'Entrepreneur of the Year'.
                </p>
                <p>
                  This experience building and scaling high-growth tech companies gave Titus a first-hand view of the critical gap between AI ambition and measurable business outcomes. He co-founded Cognite Labs to solve this problem, building the "C-suite-mentored" transformation capability he knew was missing from the market. A passionate advocate for values-based leadership, Titus has also built a 'Best Company to Work For' and brings that focus on culture and mentorship to his leadership of Cognite Labs and the development of every AI Product Manager.
                </p>
              </div>
            </ContentCard>

            <ContentCard className="flex flex-col md:flex-row-reverse gap-6">
              <img 
                src={leadershipProfile2} 
                alt="Paul Jakimciw" 
                className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 mx-auto md:mx-0 object-contain"
              />
              <div className="flex-1 text-center md:text-right">
                <h3 className="mb-2">Paul Jakimciw</h3>
                <p className="text-sm text-muted-foreground mb-3">Chief AI Officer</p>
                <p className="mb-4">
                  Paul is a C-suite leader who helps founders, boards, and investors build and scale AI-driven ventures that create real-world impact. With a decade focused squarely on AI, he has a proven track record of productizing advanced technology and navigating complex markets. As Chief Product & Chief Business Officer at Ada Health, Paul was instrumental in scaling the company into the world's leading diagnostic AI, reaching over 14 million users and demonstrating how to deliver AI value safely and effectively in highly regulated sectors.
                </p>
                <p>
                  His expertise in AI adoption and organisational design is sought by boards and founding teams (Veta Health, CLM, Naya). Prior to his focus on AI-native companies, Paul was Group CEO & Partner at Albion, helping scale iconic global technology businesses like Skype, Betfair, and Zoopla. Paul brings a rare, practitioner's view of what it takes to bridge the gap from ambitious AI strategy to scalable, real-world business impact. He is passionate about advising on company AI strategies as well as mentoring the next generation to unlock the positive, transformative impact of AI.
                </p>
              </div>
            </ContentCard>
          </div>
        </section>

        {/* More Than a Name */}
        <section className="mb-16">
          <ContentCard className="max-w-3xl mx-auto text-center bg-muted/30">
            <Lightbulb weight="duotone" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="mb-4">Cognite = Cognition + Ignite</h2>
            
            <p className="text-lg mt-4">
              Our name reflects our purpose. We combine the deep cognition required to understand and master artificial
              intelligence with the hands-on ability to ignite real, measurable transformation within organisations.
            </p>
          </ContentCard>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/contact">Ready to Partner With Us?</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default About;