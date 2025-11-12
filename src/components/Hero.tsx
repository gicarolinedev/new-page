import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="font-serif text-7xl md:text-8xl font-bold">
              Hello<span className="text-primary">.</span>
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-0.5 bg-primary"></div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                <img 
                  src={profileImg} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl">
              I'm <span className="text-primary font-serif">Your Name</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A passionate creative professional specializing in design and development. 
              Transforming ideas into beautiful digital experiences.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
          
          {/* Right side - Skills */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl mb-8">My Skills.</h3>
            
            <div className="space-y-6">
              <SkillBar name="Photoshop" percentage={95} />
              <SkillBar name="JavaScript" percentage={88} />
              <SkillBar name="Figma" percentage={92} />
              <SkillBar name="Illustrator" percentage={90} />
              <SkillBar name="HTML/CSS" percentage={95} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="text-primary">⚙</span>
          {name}
        </span>
        <span className="text-sm text-primary">{percentage}%</span>
      </div>
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
