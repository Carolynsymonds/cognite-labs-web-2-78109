import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import { CheckCircle } from "@phosphor-icons/react";
import carolynProfile from "@/assets/carolyn-profile.png";
const Profile = () => {
  const profileCriteria = ["Proven Experience: You have 5+ years of professional experience.", "Core Skills: You will learn the rounded skills of an AI Product Manager but we usually take on candidates with a strong foundation in a core component such as Data, Engineering, Product or Delivery in technology environment.", "AI & Tech Passion: You are comfortable with modern tech tools and have a genuine passion for learning and applying new AI tools, platforms, and technology.", "Commercial Literacy: You understand and can demonstrate an understanding of key commercial concepts including business casing, ROI and value propositions.", "An Outcomes-First Mindset: You are accountable for delivering measurable results, not just 'things'. You are motivated by seeing your work create tangible business impact and have an entrepreneurial mindset."];
  return <div className="min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">The Profile of a Future AI Leader</h1>
          <p className="text-lg md:text-xl">
            We are looking for a specific caliber of professional: ambitious, commercially-minded leaders who are driven
            by outcomes. This is a demanding path, and we select candidates who have the experience and aptitude to
            succeed. See if you fit the profile.
          </p>
        </div>

        {/* The Ideal Candidate Profile */}
        <section className="mb-16">
          <h2 className="mb-8 text-center">The Ideal Candidate Profile</h2>
          <ContentCard className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              {profileCriteria.map((criterion, index) => <li key={index} className="flex items-start gap-4">
                  <CheckCircle weight="duotone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{criterion}</p>
                </li>)}
            </ul>
          </ContentCard>
        </section>

        {/* Meet an AI PM */}
        <section className="mb-16">
          <h2 className="mb-8 text-center">Meet an AI PM</h2>
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
                Studied Computer Science completing an MSc in Artificial Intelligence. She brings
                eight years of commercial experience in technology, starting as a Software Engineer before transitioning
                into Product Management and Delivery roles. Carolyn has worked across healthcare and other industries,
                developing a deep understanding of how technology drives real-world impact.
              </p>
              <p className="text-lg leading-relaxed">
                Her experience strengthened her academic expertise in machine learning and applied AI, building a solid
                technical foundation to bridge strategy and execution. A passion for the opportunities AI offers led to
                training with Cognite Labs and developing the unique AI Product Manager skills to drive from strategic opportunity identification to MVP, Production and Measurable ROI; often as an autonomous unit of one.
              </p>
            </div>
          </ContentCard>
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Join a Cohort</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/talent/skills-lab">Learn About the Skills Lab</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default Profile;