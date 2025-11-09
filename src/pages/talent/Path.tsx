import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import { Target as FocusIcon, Users, Rocket, Trophy } from "@phosphor-icons/react";

const Path = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">Don't Just Adapt to the AI Era. Lead It.</h1>
          <p className="text-lg md:text-xl">
            You've built a career in product, engineering, data or as an entrepreneur. You've proven you can deliver.
            But the landscape is changing at an unprecedented pace, and the greatest opportunities now lie at the
            intersection of technology, tools and business strategy.
          </p>
          <p className="text-lg md:text-xl mt-4">
            A traditional career path is no longer the fastest route to impact. The Cognite Labs AI Leadership Path is
            not a graduate or training scheme. It is a career accelerator for experienced professionals ready to become
            the architects of the AI-driven future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ContentCard>
            <FocusIcon weight="duotone" size={48} className="text-primary mb-4" />
            <h2 className="mb-4">Make AI Your Full-Time Focus</h2>
            <p className="text-lg">
              Stop stealing hours from your day job to keep up with AI. This is your opportunity to make it your entire
              focus. For the next two years, your role will be to live and breathe AI transformation, delivering
              high-impact projects full-time.
            </p>
            <p className="text-lg mt-4">
              The professionals who dedicate themselves now will define the richest career prospects for the future. This
              is your chance to build deep, sustainable relevance.
            </p>
          </ContentCard>

          <ContentCard>
            <Users weight="duotone" size={48} className="text-primary mb-4" />
            <h2 className="mb-4">Continuous Growth with C-Suite Mentorship</h2>
            <p className="text-lg">
              This is more than just training and a placement; it's a sustained partnership. Throughout your entire
              journey, you will receive direct support and mentorship from the C-Suite experts at Cognite Labs.
            </p>
            <p className="text-lg mt-4">
              You'll be part of a community of peers, but with a crucial advantage: ongoing guidance from senior leaders
              who have shaped AI strategy at the highest levels.
            </p>
          </ContentCard>

          <ContentCard>
            <Rocket weight="duotone" size={48} className="text-primary mb-4" />
            <h2 className="mb-4">Deliver Real-World Impact from Day One</h2>
            <p className="text-lg">
              After completing our intensive Skills Lab, you will be deployed into one of our partner organisations to
              solve their most critical challenges. This is your opportunity to apply your new skills on high-profile
              projects, build an unparalleled portfolio, and drive measurable transformation for industry leaders.
            </p>
          </ContentCard>

          <ContentCard>
            <Trophy weight="duotone" size={48} className="text-primary mb-4" />
            <h2 className="mb-4">Join an Elite Cohort of Transformation Leaders</h2>
            <p className="text-lg">
              We are highly selective. You will be part of a curated cohort of experienced, high-potential peers from
              diverse professional backgrounds. This powerful network, combined with our C-Suite advisory support, will
              be an invaluable asset throughout your career.
            </p>
          </ContentCard>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Join a Cohort</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/talent/profile">Learn About AI Product Managers</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Path;
