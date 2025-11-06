import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import cogniteLogo from "@/assets/cognite-logo.png";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "For Companies",
    items: [{
      name: "Our Approach",
      href: "/companies/approach"
    }, {
      name: "The AI Product Manager Advantage",
      href: "/companies/advantage"
    }, {
      name: "Solutions & Specialisms",
      href: "/companies/solutions"
    }, {
      name: "Case Studies",
      href: "/companies/case-studies"
    }]
  }, {
    name: "For Talent",
    items: [{
      name: "Your Path",
      href: "/talent/path"
    }, {
      name: "The AI Product Manager Profile",
      href: "/talent/profile"
    }, {
      name: "The AI Product Manager Skills Lab",
      href: "/talent/skills-lab"
    }]
  }, {
    name: "About Us",
    href: "/about"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 bg-background backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={cogniteLogo} alt="Cognite Labs Logo" className="h-10 w-10" />
            <span className="font-heading text-2xl font-bold text-foreground">Cognite Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map(item => "items" in item ? <div key={item.name} className="relative group">
                  <button className="text-sm font-heading font-medium text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card rounded-lg shadow-lg border border-border overflow-hidden">
                    {item.items.map(subItem => <Link key={subItem.href} to={subItem.href} className={`block px-4 py-3 text-sm font-heading hover:bg-muted transition-colors ${isActive(subItem.href) ? "bg-muted text-primary font-semibold" : "text-foreground"}`}>
                        {subItem.name}
                      </Link>)}
                  </div>
                </div> : <Link key={item.name} to={item.href} className={`text-sm font-heading font-medium transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}>
                  {item.name}
                </Link>)}
            <Button asChild size="sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-primary">
            {mobileMenuOpen ? <X weight="duotone" size={24} /> : <List weight="duotone" size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navigation.map(item => "items" in item ? <div key={item.name} className="space-y-2">
                  <p className="font-heading font-semibold text-foreground">{item.name}</p>
                  <div className="pl-4 space-y-2">
                    {item.items.map(subItem => <Link key={subItem.href} to={subItem.href} onClick={() => setMobileMenuOpen(false)} className={`block py-2 text-sm font-heading ${isActive(subItem.href) ? "text-primary font-semibold" : "text-foreground"}`}>
                        {subItem.name}
                      </Link>)}
                  </div>
                </div> : <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)} className={`block py-2 font-heading font-medium ${isActive(item.href) ? "text-primary" : "text-foreground"}`}>
                  {item.name}
                </Link>)}
            <Button asChild className="w-full" size="sm">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>}
      </nav>
    </header>;
};
export default Header;