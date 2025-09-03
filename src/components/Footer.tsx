import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Sections",
      links: [
        { label: "Kuwait News", href: "/kuwait-news" },
        { label: "Telecom & 5G", href: "/telecom-5g" },
        { label: "Banking & FinTech", href: "/banking-fintech" },
        { label: "Cybersecurity", href: "/cybersecurity" },
        { label: "Enterprise IT", href: "/enterprise-it" },
        { label: "Startups", href: "/startups" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Reviews", href: "/reviews" },
        { label: "How-to Guides", href: "/how-to" },
        { label: "Data & Charts", href: "/data-charts" },
        { label: "Events", href: "/events" },
        { label: "Jobs", href: "/jobs" },
        { label: "Opinion", href: "/opinion" },
      ],
    },
    {
      title: "Companies",
      links: [
        { label: "Zain Kuwait", href: "/company/zain" },
        { label: "stc Kuwait", href: "/company/stc" },
        { label: "Ooredoo Kuwait", href: "/company/ooredoo" },
        { label: "CBK", href: "/company/cbk" },
        { label: "All Companies", href: "/companies" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Advertise", href: "/advertise" },
      ],
    },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="font-bold text-primary-foreground text-sm">KDB</span>
              </div>
              <span className="font-heading text-xl font-bold">
                Kuwait<span className="text-primary">Digital</span>Box
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Kuwait's leading source for technology news, digital transformation insights, 
              and innovation stories shaping the region's future.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-heading font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Kuwait City, Kuwait</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+965 xxxx xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@kuwaitdigitalbox.com</span>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {currentYear} KuwaitDigitalBox. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;