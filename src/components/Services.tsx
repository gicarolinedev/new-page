import { Palette, Code, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm text-primary uppercase tracking-wider mb-2">SERVICES</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-2">
            Web Developer
          </h2>
          <p className="font-serif text-3xl md:text-4xl text-primary italic">
            & Advertising
          </p>
        </div>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          A passionate professional driven by social impact and deeply believes in 
          technology as a catalyst for meaningful change.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard 
            icon={<Palette className="w-8 h-8" />}
            title="WEB DESIGN"
            description="Creating beautiful and functional designs that capture your brand's essence. From wireframes to final mockups, every detail matters in crafting the perfect user experience."
            link="ABOUT WEB DESIGN →"
          />
          
          <ServiceCard 
            icon={<Code className="w-8 h-8" />}
            title="DEVELOPMENT"
            description="Building responsive and performant websites using modern technologies and best practices. Clean code architecture, and attention to detail ensure your project stands the test of time."
            link="ABOUT WEBFLOW →"
          />
          
          <ServiceCard 
            icon={<Search className="w-8 h-8" />}
            title="CONTENT & SEO"
            description="Optimizing your content for search engines while maintaining quality and relevance. Strategic planning and execution to improve your online visibility and reach."
            link="ABOUT SEO →"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string;
}) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all group">
      <CardContent className="p-8 space-y-4">
        <div className="text-primary">{icon}</div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <a 
          href="#" 
          className="text-sm text-primary hover:underline inline-block mt-4"
        >
          {link}
        </a>
      </CardContent>
    </Card>
  );
};

export default Services;
