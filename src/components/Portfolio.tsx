import { Card } from "@/components/ui/card";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const Portfolio = () => {
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <ProjectCard 
            image={project1}
            category="WEB DESIGN"
            title="Brand Identity"
          />
          
          <ProjectCard 
            image={project2}
            category="PRINT DESIGN"
            title="Editorial Layout"
          />
          
          <ProjectCard 
            image={project3}
            category="PHOTOGRAPHY"
            title="Photography Series"
          />
          
          <ProjectCard 
            image={project4}
            category="WEB DESIGN"
            title="Digital Experience"
          />
          
          <ProjectCard 
            image={project5}
            category="CREATIVE"
            title="Content Design"
          />
          
          <ProjectCard 
            image={project6}
            category="CONTENT"
            title="Product Packaging"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  image, 
  category, 
  title 
}: { 
  image: string; 
  category: string; 
  title: string;
}) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-primary uppercase tracking-wider mb-2">{category}</p>
        <h3 className="font-serif text-xl font-bold">{title}</h3>
      </div>
    </Card>
  );
};

export default Portfolio;
