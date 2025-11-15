import React from "react";
import { Palette, Code, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";

const Services = () => {
  return (
    <section id="sobre" className="py-12 bg-black relative text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto relative">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Title + side blocks (left and right) */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center gap-8 lg:gap-16">

              {/* ANÁLISE DE SENVOLVIMENTO DE SISTEMAS */}
              <div className="hidden lg:flex flex-col items-start w-56 -mt-28">
                <div className="text-xs text-muted-foreground text-left space-y-1 font-serif mb-4">
                  Estudante de Análise e
                  <br/>
                  Desenvolvimento de Sistemas
                  <p className="text-primary mt-2">2025 - 2029</p>
                </div>

                {/* linha que "continua" até o centro com pontinho */}
                <div className="relative w-full h-[0.5px] bg-foreground mb-4">
                  <span className="absolute -right-2 top-1/2 w-1 h-1 bg-primary rounded-full -translate-y-1/2" />
                </div>

                <p className="text-sm text-foreground font-serif">
                  Descobri na programação um novo jeito de cuidar, criar e incluir.
                </p>
              </div>

              {/* CENTER title with decorative dot */}
              <div className="text-center">
                <h2 className="font-calora text-4xl md:text-6xl lg:text-7xl whitespace-nowrap">
                  Web Developer
                </h2>
                <p className="font-calora text-4xl md:text-6xl lg:text-6xl
                 text-primary italic">
                  & Advertising
                </p>
              </div>

              {/* PUBLICIDADE E PROPAGANDA*/}
              <div className="hidden lg:flex flex-col items-end w-56 -mt-8">
                <div className="text-xs text-muted-foreground text-right space-y-1 font-serif mb-4">
                  Estudante de Publicidade e  <br/> Propaganda
                  <p className="text-primary mt-2">2025 - 2029</p>
                </div>

                {/* linha que "continua" até o centro com pontinho */}
                <div className="relative w-full h-[0.5px] bg-foreground mb-4">
                  <span className="absolute -left-2 top-1/2 w-1 h-1 bg-primary rounded-full -translate-y-1/2" />
                </div>

                <p className="text-sm text-foreground font-serif">
                  Transformar ideias em imagens, cores e conceitos que 
                  despertam emoções e contam histórias.
                </p>
              </div>
            </div>
          </div>

          {/* DESCRIÇÃO  */}
          <p className="font-serif text-center text-muted-foreground max-w-2xl mx-auto mb-8 font-blacker">
            Designer e desenvolvedora que transforma ideias em experiências digitais. Trabalho com interfaces,
            branding e conteúdo com foco em impacto social.
          </p>

          {/* Service cards */}
          <div className="font-serif grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Palette className="w-4 h-4" />}
              title="WEB DESIGN"
              description="Designs funcionais e visualmente marcantes, 
              com foco em usabilidade e identidade."
            />

            <ServiceCard
              icon={<Code className="w-4 h-4" />}
              title="DEVELOPMENT"
              description="Implementação responsiva e performática com atenção a boas práticas."
            />

            <ServiceCard
              icon={<Search className="w-4 h-4" />}
              title="CONTENT & SEO"
              description="Conteúdo estratégico e otimização para alcançar seu público."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="bg-black/60 border border-primary/10 shadow-none">
      <CardContent className="p-6">
        <div className="text-primary mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Services;