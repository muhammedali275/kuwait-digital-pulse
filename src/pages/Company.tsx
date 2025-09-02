import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Company = () => {
  const { slug } = useParams();
  
  const getCompanyName = (slug: string | undefined) => {
    switch (slug) {
      case 'zain':
        return 'Zain Kuwait';
      case 'stc':
        return 'stc Kuwait';
      case 'ooredoo':
        return 'Ooredoo Kuwait';
      case 'cbk':
        return 'Central Bank of Kuwait';
      default:
        return 'Company';
    }
  };

  const companyName = getCompanyName(slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-4">{companyName}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Latest news, updates, and insights from {companyName}
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Content Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              This section will be populated with {companyName} news through automation
            </p>
            <Button variant="outline">Configure Data Source</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Company;