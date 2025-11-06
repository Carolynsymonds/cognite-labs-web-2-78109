import { Link } from "react-router-dom";
import { Envelope } from "@phosphor-icons/react";
import cogniteLogo from "@/assets/cognite-logo.png";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <Link to="/" className="inline-block">
              <img src={cogniteLogo} alt="Cognite Labs Logo" className="h-16 w-16 mb-3" />
            </Link>
            <Link to="/" className="font-heading text-xl font-bold text-foreground">
              Cognite Labs
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-heading">Building transformation capability for the AI era.</p>
          </div>

          {/* For Companies */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">For Companies</h3>
            <ul className="space-y-2 text-sm font-heading">
              <li>
                <Link to="/companies/approach" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/companies/advantage" className="text-muted-foreground hover:text-primary transition-colors">
                  The AI Product Manager Advantage
                </Link>
              </li>
              <li>
                <Link to="/companies/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Solutions & Specialisms
                </Link>
              </li>
              <li>
                <Link to="/companies/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* For Talent */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">For Talent</h3>
            <ul className="space-y-2 text-sm font-heading">
              <li>
                <Link to="/talent/path" className="text-muted-foreground hover:text-primary transition-colors">
                  Your Path
                </Link>
              </li>
              <li>
                <Link to="/talent/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  The AI Product Manager Profile
                </Link>
              </li>
              <li>
                <Link to="/talent/skills-lab" className="text-muted-foreground hover:text-primary transition-colors">
                  The AI Product Manager Skills Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
          <h3 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-heading text-muted-foreground hover:text-primary transition-colors">
              <Envelope weight="duotone" size={16} />
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center font-heading">
            © {new Date().getFullYear()} Cognite Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;