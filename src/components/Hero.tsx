import { Download, Palette, Code, Figma, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import profileSmall from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-serif font-bold text-foreground">
                Hello<span className="text-accent">.</span>
              </h1>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-0.5 bg-accent" />
                <div className="flex items-center space-x-4">
                  <img
                    src={profileSmall}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-2 border-accent shadow-lg"
                  />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground">
                    I'm <span className="text-accent">Giovanna!</span>
                  </h2>
                </div>
              </div>
            </div>

{/* DESCRIÇÃO INICIAL */}
            <p className="text-muted-foreground text-lg max-w-xl font-serif">
              a brown skin girl driven by <span className="text-accent">social impact</span> and deeply believe in
              technology as a catalyst for meaningful change.
            </p>
{/*BOTÃO DE DOWNLOAD FUNCIONAL*/}
  <a href="/CVGIOVANNACAROLINE.docx" download>
            <Button
              size="lg"
              className=" mt-5 bg-accent hover:bg-accent/90 text-background font-semibold 
              shadow-lg hover:shadow-xl transition-all 
              duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            </a>
          </div>

          {/* SKILLS COM LEVELS*/}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              My Skills<span className="text-accent">.</span>
            </h3>

            <div className="space-y-5">
              {[
                { name: "Photoshop", level: 98, icon: Palette },
                { name: "JavaScript", level: 70, icon: Code },
                { name: "Figma", level: 52, icon: Figma },
                { name: "Illustrator", level: 60, icon: Pen },
                { name: "HTML/CSS", level: 95, icon: Code },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center 
                      transition-all duration-300 group-hover:bg-accent/20">
                        <skill.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-accent font-semibold text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-1.5 bg-secondary/50" />
                </div>
              ))}
            </div>

            {/* Botão "Veja mais" */}
            <button className="mt-4 border border-accent text-accent px-4 py-2
             rounded hover:bg-accent hover:text-white transition-colors font-serif">
             See more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
