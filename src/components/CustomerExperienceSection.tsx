import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkle, TrendUp, Brain } from "@phosphor-icons/react";
export default function CustomerExperienceSection() {
  const scrollToNextSection = () => {
    const section = document.getElementById('outcomes-section');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <section id="customer-experience" className="py-12 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Left side - text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-semibold">Immediate Impact. Enduring Capability.</h2>
            <p className="text-lg leading-relaxed">Most AI efforts fail not because of technology, but because execution sits too far from strategy. Cognite Labs bridges that gap by embedding AI-Native Product Managers inside your teams. Each one combines product, data, and AI fluency in a single role, turning strategy into results without adding major headcount or heavyweight consultancy.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center sm:justify-center">
              <Button size="lg" onClick={scrollToNextSection}>
                Learn More
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right side - features */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <h3 className="flex items-center gap-2 font-medium mb-2">
                <Sparkle weight="duotone" size={20} className="text-primary" />
                Deliver Fast
              </h3>
              <p className="text-base">AI Product Managers focus on execution. They are hands-on practitioners who surface opportunities, quickly proving value through doing. Learn, iterate and scale new processes, approaches and features at speed.</p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-medium mb-2">
                <TrendUp weight="duotone" size={20} className="text-primary" />
                Work Lean
              </h3>
              <p className="text-base">AI Product Managers can take opportunities from idea to MVP solo, with minimal reliance on large teams, creating unmatched speed to value and acting as AI champions who unlock the value of your domain and function experts.</p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-medium mb-2">
                <Brain weight="duotone" size={20} className="text-primary" />
                Build Capability
              </h3>
              <p className="text-base">Teams learn by doing not by being advised. AI Product Managers  deploy transformation by embedding new tools, skills and knowledge as they work alongside teams. </p>
            </div>

            {/* Floating badge */}
            <div className="mt-8">
              
            </div>
          </div>
        </div>
      </div>
    </section>;
}