import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, User, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { label: t('header.kuwaitNews'), href: "/kuwait-news" },
    { label: t('header.telecom5g'), href: "/telecom-5g" },
    { label: t('header.bankingFintech'), href: "/banking-fintech" },
    { label: t('header.cybersecurity'), href: "/cybersecurity" },
    { label: t('header.startups'), href: "/startups" },
    { label: t('header.enterpriseIT'), href: "/enterprise-it" },
    { label: t('header.jobs'), href: "/jobs" },
  ];

  const companies = [
    { label: "Zain", href: "/company/zain" },
    { label: "stc", href: "/company/stc" },
    { label: "Ooredoo", href: "/company/ooredoo" },
    { label: "CBK", href: "/company/cbk" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className={cn("flex items-center space-x-4", language === 'ar' && "space-x-reverse")}>
            <a href="/" className="flex flex-col items-center">
              <span className="text-xs font-medium text-muted-foreground mb-1">Kuwait</span>
              <span className="font-heading text-xl font-bold text-primary">{t('header.logo')}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                {t('header.companies')}
              </button>
              <div className="invisible group-hover:visible absolute top-full left-0 mt-2 w-48 rounded-md border bg-card p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                {companies.map((company) => (
                  <a
                    key={company.href}
                    href={company.href}
                    className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-sm"
                  >
                    {company.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className={cn("flex items-center space-x-4", language === 'ar' && "space-x-reverse")}>
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="hidden md:flex"
            >
              <Globe className="h-4 w-4 mr-2" />
              {t('common.language')}
            </Button>

            {/* Search */}
            <div className="hidden md:flex">
              {isSearchOpen ? (
                <div className={cn("flex items-center space-x-2", language === 'ar' && "space-x-reverse")}>
                  <Input
                    type="search"
                    placeholder={t('header.search')}
                    className="w-64"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* User Menu */}
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className={cn("ml-2 hidden md:inline", language === 'ar' && "ml-0 mr-2")}>{t('header.signIn')}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="border-t py-4">
            <div className="flex flex-col space-y-3">
              {/* Mobile Search */}
              <div className="md:hidden">
                <Input
                  type="search"
                  placeholder={t('header.search')}
                  className="w-full"
                />
              </div>

              {/* Mobile Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="md:hidden justify-start"
              >
                <Globe className="h-4 w-4 mr-2" />
                {t('common.language')}
              </Button>

              {/* Mobile Navigation */}
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="border-t pt-3">
                <div className="px-3 py-1 text-sm font-semibold text-muted-foreground">
                  {t('header.companies')}
                </div>
                {companies.map((company) => (
                  <a
                    key={company.href}
                    href={company.href}
                    className="block px-6 py-2 text-base text-foreground/80 hover:text-primary"
                  >
                    {company.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;