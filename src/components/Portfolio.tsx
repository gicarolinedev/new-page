import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMAGENS DE DESIGN
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import logotip1 from "@/assets/logotip1.png";


// IMAGENS DE PROGRAMAÇÃO
import dev1 from "@/assets/dev1.jpg";
import dev2 from "@/assets/dev2.jpg";
import dev3 from "@/assets/dev3.jpg";

const Portfolio = () => {
  // PROJETOS DE DESIGN
  const designProjects = [
    { image: project1, category: "Photoshoot", title: "Ensaio Fotográfico para AFFRONTÉ" },
    { image: project2, category: "Social Media", title: "Publicidade Fictícia Natura EKOS com IA + Photoshop" },
    { image: project3, category: "Social Media", title: "Publicidade Fictícia para RHODE com IA + Photoshop" },
    { image: project4, category: "Social Media", title: "Publicidade Fictícia Sallve om IA + Photoshop" },
    { image: project5, category: "Social Media", title: "Social Media Para Trancistas" },
    { image: project6, category: "", title: "Product Packaging" },
    { image: logotip1, category: "Logotipos", title: "Logotipo para AFFRONTÉ" },
  ];

  // PROJETOS DE PROGRAMAÇÃO
  const devProjects = [
    { image: dev1, category: "Frontend", title: "Landing Page Moderna" },
    { image: dev2, category: "Backend", title: "Sistema de Gestão Completo" },
    { image: dev3, category: "Frontend", title: "App de Tarefas em React Native" },
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            SEE MY PROJECTS<span className="text-accent">...</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* ABAS PRINCIPAIS */}
        <Tabs defaultValue="design" className="w-full">

          <TabsList className="mx-auto flex justify-center mb-10 gap-4">
            <TabsTrigger value="design" className="px-6 py-2 text-sm">DESIGN</TabsTrigger>
            <TabsTrigger value="dev" className="px-6 py-2 text-sm">PROGRAMAÇÃO</TabsTrigger>
          </TabsList>

          {/* --- ABA: DESIGN --- */}
          <TabsContent value="design">
            <Tabs defaultValue="all" className="mb-6">

              {/* Sub-abas Design */}
              <TabsList className="flex justify-center gap-4 mb-6">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="Logotipos">Logotipos</TabsTrigger>
                <TabsTrigger value="Social Media">Social Media</TabsTrigger>
                <TabsTrigger value="Templates">Templates</TabsTrigger>
                <TabsTrigger value="Photoshoot">Photoshoot</TabsTrigger>
              </TabsList>

              {["all", "Logotipos", "Social Media", "Templates", "Photoshoot"].map((filter) => (
                <TabsContent key={filter} value={filter}>
                  <ProjectCarousel
                    projects={filter === "all" ? designProjects : designProjects.filter(p => p.category === filter)}
                  />
                </TabsContent>
              ))}

            </Tabs>
          </TabsContent>

          {/* --- ABA: PROGRAMAÇÃO --- */}
          <TabsContent value="dev">
            <Tabs defaultValue="all" className="mb-6">

              {/* Sub-abas Programação */}
              <TabsList className="flex justify-center gap-4 mb-6">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="Frontend">Frontend</TabsTrigger>
                <TabsTrigger value="Backend">Backend</TabsTrigger>
              </TabsList>

              {["all", "Frontend", "Backend"].map((filter) => (
                <TabsContent key={filter} value={filter}>
                  <ProjectCarousel
                    projects={filter === "all" ? devProjects : devProjects.filter(p => p.category === filter)}
                  />
                </TabsContent>
              ))}

            </Tabs>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

// CARROSSEL DE PROJETOS
const ProjectCarousel = ({ projects }: { projects: any[] }) => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            <ProjectCard {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// CARTÃO DE PROJETO
const ProjectCard = ({
  image,
  category,
  title,
}: {
  image: string;
  category: string;
  title: string;
}) => {
  const aspectRatio = "aspect-[4/5]";

  return (
    <Card
      className="group overflow-hidden bg-card border-border 
      hover:border-primary/50 transition-all cursor-pointer flex flex-col"
    >
      <div className={`${aspectRatio} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 
          transition-transform duration-500"
        />
      </div>

      <div className="p-6 h-32 flex flex-col justify-start">
        <p className="text-xs text-primary uppercase tracking-wider mb-2">
          {category}
        </p>

        <h3 className="font-serif text-xl font-bold leading-tight">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default Portfolio;
