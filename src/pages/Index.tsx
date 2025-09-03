import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users, BarChart3 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const Index = () => {
  const { language, t } = useLanguage();
  
  // Mock data for demo
  const latestArticles = [
    {
      title: "Zain Kuwait Launches Revolutionary 5G Smart City Initiative",
      excerpt: "Zain Kuwait announced a comprehensive smart city project leveraging 5G technology to transform urban infrastructure and citizen services across major Kuwaiti cities.",
      author: "Ahmed Al-Rashid",
      publishedAt: "3 hours ago",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=400&fit=crop",
      category: "5G & Telecom",
      categoryColor: "blue" as const,
      featured: true,
      href: "/article/zain-kuwait-5g-smart-city"
    },
    {
      title: "CBK Digital Banking Platform Sees 300% Growth in Mobile Transactions",
      excerpt: "The Central Bank of Kuwait reports unprecedented adoption of digital banking services, with mobile transactions tripling in the past quarter.",
      author: "Fatima Al-Sabah",
      publishedAt: "6 hours ago",
      readTime: "3 min read",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      category: "Banking & FinTech",
      categoryColor: "green" as const,
      href: "/article/cbk-digital-banking-growth"
    },
    {
      title: "Kuwait's Cybersecurity Framework: New Regulations for 2024",
      excerpt: "Government introduces comprehensive cybersecurity guidelines for private sector organizations to protect against evolving digital threats.",
      author: "Omar Hassan",
      publishedAt: "8 hours ago",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      category: "Cybersecurity",
      categoryColor: "purple" as const,
      href: "/article/kuwait-cybersecurity-framework-2024"
    },
    {
      title: "Startup Spotlight: Kuwaiti Fintech Secures $5M Series A",
      excerpt: "Local financial technology startup KuwaitPay closes significant funding round to expand digital payment solutions across the GCC region.",
      author: "Layla Al-Ahmad",
      publishedAt: "12 hours ago",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      category: "Startups",
      categoryColor: "orange" as const,
      href: "/article/kuwaiti-fintech-series-a-funding"
    },
    {
      title: "stc Kuwait Announces Fiber Optic Network Expansion",
      excerpt: "Telecommunications provider stc Kuwait reveals plans to extend high-speed fiber internet access to underserved areas across the country.",
      author: "Mohammed Al-Otaibi",
      publishedAt: "1 day ago",
      readTime: "6 min read",
      category: "Infrastructure",
      categoryColor: "blue" as const,
      href: "/article/stc-kuwait-fiber-expansion"
    },
    {
      title: "AI in Healthcare: Kuwait's Digital Health Initiative",
      excerpt: "Ministry of Health launches pilot program integrating artificial intelligence in diagnostic procedures and patient care management systems.",
      author: "Dr. Nada Al-Mutawa",
      publishedAt: "1 day ago",
      readTime: "8 min read",
      category: "Healthcare Tech",
      categoryColor: "green" as const,
      href: "/article/kuwait-ai-healthcare-initiative"
    }
  ];

  const stats = [
    { icon: TrendingUp, label: t('home.dailyReaders'), value: "25K+", color: "text-tech-blue" },
    { icon: Clock, label: t('home.articlesPublished'), value: "500+", color: "text-tech-green" },
    { icon: Users, label: t('home.techCompanies'), value: "150+", color: "text-tech-purple" },
    { icon: BarChart3, label: t('home.marketReports'), value: "50+", color: "text-tech-orange" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Stats Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`mx-auto mb-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-2">{t('home.latestNews')}</h2>
                <p className="text-muted-foreground">{t('home.stayUpdated')}</p>
              </div>
              <Button variant="outline" className="btn-professional">
                {t('home.viewAllArticles')}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Interviews Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-2">{t('home.executiveInterviews')}</h2>
                <p className="text-muted-foreground">{t('home.techLeaders')}</p>
              </div>
              <Button variant="outline" className="btn-professional">
                {t('home.viewAllInterviews')}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="text-muted-foreground text-sm mb-4">No interviews available yet</div>
                <p className="text-sm text-muted-foreground">Check back soon for exclusive interviews with industry leaders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section - Reserved Space */}
        <section className="bg-muted/10 py-8 border-t border-b">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Sponsored Content</p>
              <div className="mt-4 h-20 bg-muted/30 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Sponsor space reserved</span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Spotlight */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">{t('home.companySpotlight')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('home.companyDescription')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Zain Kuwait", "stc Kuwait", "Ooredoo Kuwait", "CBK"].map((company) => (
                <div key={company} className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xl">
                      {company.split(' ')[0].substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{company}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.viewCompanyHub')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
              <h2 className="font-heading text-3xl font-bold mb-4">{t('home.stayInLoop')}</h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                {t('home.newsletterDescription')}
              </p>
              <div className={cn("flex flex-col sm:flex-row gap-4 max-w-md mx-auto", language === 'ar' && "sm:flex-row-reverse")}>
                <input
                  type="email"
                  placeholder={t('footer.enterEmail')}
                  className="flex-1 px-4 py-3 rounded-lg text-foreground"
                />
                <Button variant="secondary" size="lg" className="btn-professional">
                  {t('home.subscribeNow')}
                </Button>
              </div>
              <p className="text-primary-foreground/70 text-sm mt-4">
                {t('home.joinProfessionals')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
