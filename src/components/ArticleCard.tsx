import { Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  imageUrl?: string;
  category: string;
  categoryColor?: "blue" | "green" | "purple" | "orange";
  featured?: boolean;
  href: string;
}

const ArticleCard = ({
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  imageUrl,
  category,
  categoryColor = "blue",
  featured = false,
  href,
}: ArticleCardProps) => {
  const categoryColors = {
    blue: "bg-tech-blue text-white",
    green: "bg-tech-green text-white",
    purple: "bg-tech-purple text-white",
    orange: "bg-tech-orange text-white",
  };

  return (
    <Card 
      className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <a href={href} className="block">
        {imageUrl && (
          <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-48"}`}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge className={categoryColors[categoryColor]}>
                {category}
              </Badge>
            </div>
          </div>
        )}
        
        <CardContent className={`p-6 ${featured ? "md:p-8" : ""}`}>
          <div className="space-y-3">
            {!imageUrl && (
              <Badge className={categoryColors[categoryColor]}>
                {category}
              </Badge>
            )}
            
            <h3 className={`font-heading font-semibold line-clamp-3 group-hover:text-primary transition-colors ${
              featured ? "text-xl md:text-2xl" : "text-lg"
            }`}>
              {title}
            </h3>
            
            <p className={`text-muted-foreground line-clamp-3 ${
              featured ? "text-base" : "text-sm"
            }`}>
              {excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{publishedAt}</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </a>
    </Card>
  );
};

export default ArticleCard;