import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EnterpriseIT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-4">Enterprise IT</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise technology solutions and IT infrastructure in Kuwait
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Content Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              This section will be populated with enterprise IT news through automation
            </p>
            <Button variant="outline">Configure Data Source</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnterpriseIT;