import { Palette, Code, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";

const Services = () => {
  return (
    <section id="sobre" className="py-6 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Vertical Text */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <p className="font-serif text-5xl tracking-widest text-foreground -rotate-90 origin-center whitespace-nowrap">
            {/* Texto opcional */}
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Profile Image */}
          <div className="flex justify-center mb-2 mt-3">
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
              
              {/* ANÁLISE E DESENVOLVIMENTO DE SISTEMAS */}
              <div className="hidden lg:flex flex-col items-end w-56">
                <p className="text-sm text-foreground mb-4 font-serif">
                  Sou apaixonada por tecnologia e adoro transformar ideias 
                  em soluções práticas. Estudo Análise e Desenvolvimento de 
                  Sistemas e estou sempre buscando aprender mais sobre 
                  programação, design e inovação.</p>
                <div className="relative w-full h-[2px] bg-foreground mb-4">
                  <span className="absolute -right-2 top-1/2 w-1 h-1 bg-primary rounded-full -translate-y-1/2"></span>
                </div>
                <div className="text-xs text-muted-foreground text-right space-y-1 font-serif">
                  <p>Estudante de Análise e</p>
                  <p>Desenvolvimento de Sistemas</p>
                  <p className="text-primary mt-2">2024 - 2026</p>
                </div>
              </div>

              {/* TEXTO DO CENTRO */}
              <div className="text-center">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-2 whitespace-nowrap">
                  Web Developer
                </h2>
                <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-primary italic">
                  & Advertising
                </p>
              </div>

              {/* DESCRIÇÃO DA DIREITA E LINHA DECORATIVA */}
              <div className="hidden lg:flex flex-col items-start w-56 h-90">
                <p className="text-sm text-foreground mb-1 font-serif">
                  Sempre gostei de observar o mundo através das lentes de uma câmera. 
                  A fotografia sempre foi uma das minhas maiores paixões e, com o tempo, 
                  descobri que podia unir esse olhar criativo ao universo da Publicidade e 
                  Propaganda. Gosto de transformar ideias em imagens, cores e conceitos 
                  que despertem emoções e contem histórias.</p>
                <div className="relative w-full h-[2px] bg-foreground mb-4">
                  {/*PONTOS DECORATIVOS */}
                  <span className="absolute -left-2 top-1/2 w-1 h-1 bg-primary rounded-full -translate-y-1/2"></span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1 font-serif">
                  <p>Estudante de Publicidade</p>
                  <p>e Propaganda</p>
                  <p className="text-primary mt-2">2024 - 2028</p>
                </div>
              </div>

            </div>
          </div>
        
        {/*TEXTO DESCRITIVO ABAIXO DO TÍTULO */}
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-20">
            
          </p>
        </div>
        
        {/* Service cards */}
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
