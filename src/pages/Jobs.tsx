import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Briefcase, Filter, Search } from "lucide-react";

const Jobs = () => {
  const jobCategories = [
    "Software Development",
    "Cybersecurity", 
    "Data Analytics",
    "Digital Marketing",
    "Product Management",
    "DevOps",
    "UI/UX Design",
    "Telecom Engineering"
  ];

  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "Zain Kuwait",
      location: "Kuwait City",
      type: "Full-time",
      salary: "KWD 1,500 - 2,200",
      description: "Join our digital transformation team to build next-generation telecom solutions.",
      skills: ["React", "Node.js", "AWS", "5G"],
      posted: "2 days ago"
    },
    {
      title: "Cybersecurity Analyst", 
      company: "Central Bank of Kuwait",
      location: "Kuwait City",
      type: "Full-time",
      salary: "KWD 1,200 - 1,800",
      description: "Protect critical financial infrastructure and ensure compliance.",
      skills: ["CISSP", "Penetration Testing", "Risk Assessment"],
      posted: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-4">Tech Careers in Kuwait</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover exciting technology opportunities with Kuwait's leading companies
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search jobs, companies, or skills..." className="pl-10" />
              </div>
              <Button><Filter className="h-4 w-4 mr-2" />Filter</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">{job.salary}</span>
                    <Button size="sm">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;