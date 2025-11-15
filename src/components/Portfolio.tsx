import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      category: "BRANDING & PHOTOSHOOT",
      title: "Ensaio Fotográfico",
      href: "/project1",
    },
    {
      image: project2,
      category: "IA CREATION DESIGN & PUBLICITY",
      title: "Publicidade Fictítia para Natura EKOS com IA + Photoshop",
    },
    {
      image: project3,
      category: "DESIGN & PHOTOSHOP",
      title: "Flyer Fictício Para Trancistas Com Photoshop",
    },
    {
      image: project4,
      category: "IA CREATION DESIGN & PUBLICITY",
      title: "Publicidade Fictícia para Sallve",
    },
    {
      image: project5,
      category: "CREATIVE",
      title: "Content Design",
    },
    {
      image: project6,
      category: "CONTENT",
      title: "Product Packaging",
    },
  ];

  return (
    <section id="projetos" className="py-16">
      <div className="container mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            SEE MY PROJECTS<span className="text-accent">...</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Carrossel */}
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
      </div>
    </section>
  );
};

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
      {/* Imagem */}
      <div className={`${aspectRatio} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 
          transition-transform duration-500"
        />
      </div>

      {/* Container do texto com tamanho fixo */}
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
