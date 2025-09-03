import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('footer.sections'),
      links: [
        { label: t('header.kuwaitNews'), href: "/kuwait-news" },
        { label: t('header.telecom5g'), href: "/telecom-5g" },
        { label: t('header.bankingFintech'), href: "/banking-fintech" },
        { label: t('header.cybersecurity'), href: "/cybersecurity" },
        { label: t('header.enterpriseIT'), href: "/enterprise-it" },
        { label: t('header.startups'), href: "/startups" },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.reviews'), href: "/reviews" },
        { label: t('footer.howToGuides'), href: "/how-to" },
        { label: t('footer.dataCharts'), href: "/data-charts" },
        { label: t('footer.events'), href: "/events" },
        { label: t('footer.jobs'), href: "/jobs" },
        { label: t('footer.opinion'), href: "/opinion" },
      ],
    },
    {
      title: t('footer.companies'),
      links: [
        { label: "Zain Kuwait", href: "/company/zain" },
        { label: "stc Kuwait", href: "/company/stc" },
        { label: "Ooredoo Kuwait", href: "/company/ooredoo" },
        { label: "CBK", href: "/company/cbk" },
        { label: t('footer.allCompanies'), href: "/companies" },
      ],
    },
    {
      title: t('footer.about'),
      links: [
        { label: t('footer.aboutUs'), href: "/about" },
        { label: t('footer.contact'), href: "/contact" },
        { label: t('footer.privacy'), href: "/privacy" },
        { label: t('footer.terms'), href: "/terms" },
        { label: t('footer.advertise'), href: "/advertise" },
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
              {t('footer.description')}
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-heading font-semibold">{t('footer.stayUpdated')}</h4>
              <div className={cn("flex space-x-2", language === 'ar' && "space-x-reverse")}>
                <Input 
                  type="email" 
                  placeholder={t('footer.enterEmail')} 
                  className="flex-1"
                />
                <Button>{t('footer.subscribe')}</Button>
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
              © {currentYear} KuwaitDigitalBox. {t('footer.allRights')}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;