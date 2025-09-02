import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, TrendingUp, Globe } from "lucide-react";
import heroImage from "@/assets/hero-tech-kuwait.jpg";

const HeroSection = () => {
  const featuredArticle = {
    title: "Kuwait's Digital Transformation: Leading the Gulf's Tech Revolution",
    excerpt: "Exploring how Kuwait is positioning itself as a regional technology hub through strategic digital initiatives, smart city projects, and innovative fintech solutions.",
    author: "Sarah Al-Kuwari",
    publishedAt: "2 hours ago",
    category: "Digital Transformation",
    href: "/article/kuwait-digital-transformation-2024"
  };

  const trendingTopics = [
    { label: "5G Expansion", count: "12 articles", href: "/tag/5g" },
    { label: "Digital Banking", count: "8 articles", href: "/tag/digital-banking" },
    { label: "Smart Cities", count: "15 articles", href: "/tag/smart-cities" },
    { label: "Cybersecurity", count: "6 articles", href: "/tag/cybersecurity" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Breaking News Badge */}
            <div className="flex items-center space-x-2">
              <Badge variant="destructive" className="animate-pulse">
                BREAKING
              </Badge>
              <span className="text-sm text-muted-foreground">
                Live coverage of Kuwait's tech ecosystem
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stay Ahead of 
                <span className="text-primary block">Kuwait's Tech</span>
                Revolution
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Your premier source for technology news, digital innovation insights, 
                and startup stories from Kuwait and the broader Gulf region.
              </p>
            </div>

            {/* Featured Article Preview */}
            <div className="bg-card border rounded-lg p-6 shadow-custom">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-tech-blue text-white">
                  {featuredArticle.category}
                </Badge>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>Trending #1</span>
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-2 line-clamp-2">
                {featuredArticle.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  By {featuredArticle.author} • {featuredArticle.publishedAt}
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href={featuredArticle.href}>
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Latest News
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Kuwait Digital Technology"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm">Live Updates</span>
                </div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">News Coverage</div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-tech-green">150+</div>
                <div className="text-sm font-semibold">Tech Companies</div>
                <div className="text-xs text-muted-foreground">Featured</div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="mt-8">
              <h3 className="font-heading font-semibold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Trending Topics
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {trendingTopics.map((topic) => (
                  <a
                    key={topic.href}
                    href={topic.href}
                    className="bg-card border rounded-lg p-3 hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <div className="font-medium text-sm">{topic.label}</div>
                    <div className="text-xs text-muted-foreground">{topic.count}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;