import { Palette, Code, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";

const Services = () => {
  return (
    <section id="sobre" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Vertical Text */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <p className="font-serif text-5xl tracking-widest text-foreground -rotate-90 origin-center whitespace-nowrap">
            OBJECTIVE.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title with decorative lines */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center gap-8 lg:gap-16">
              {/* Left description and line */}
              <div className="hidden lg:flex flex-col items-end w-56">
                <p className="text-sm text-foreground mb-3 font-serif">description</p>
                <div className="w-full h-[2px] bg-foreground mb-4"></div>
                <div className="text-xs text-muted-foreground text-right space-y-1">
                  <p>Estudante de Análise e</p>
                  <p>Desenvolvimento de Sistemas</p>
                  <p className="text-primary mt-2">2024 - 2026</p>
                </div>
              </div>

              {/* Center Title */}
              <div className="text-center">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-2 whitespace-nowrap">
                  Web Developer
                </h2>
                <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-primary italic">
                  & Advertising
                </p>
              </div>

              {/* Right description and line */}
              <div className="hidden lg:flex flex-col items-start w-56">
                <p className="text-sm text-foreground mb-3 font-serif">description</p>
                <div className="w-full h-[2px] bg-foreground mb-4"></div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Estudante de Publicidade</p>
                  <p>e Propaganda</p>
                  <p className="text-primary mt-2">2024 - 2028</p>
                </div>
              </div>
            </div>
          </div>
        
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            a brown skin girl driven by social impact and <span className="text-foreground font-semibold">deeply</span> believe in 
            technology as a catalyst for meaningful change
          </p>
        </div>
        
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
