import { useEffect } from "react";
import { useRouter } from "next/router";

interface ProjectRedirectProps {
  url: string;       // URL final do projeto
  title: string;     // Título do projeto
  delay?: number;    // Delay em ms antes de redirecionar (padrão 3000)
}

const ProjectRedirect: React.FC<ProjectRedirectProps> = ({ url, title, delay = 3000 }) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(url);
    }, delay);

    return () => clearTimeout(timer);
  }, [router, url, delay]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Redirecionando {title}...</h1>
        <p className="text-gray-600">Você será levado ao {title} em instantes.</p>
        <p className="text-sm text-gray-400 mt-2">
          Se não for redirecionado,{" "}
          <a href={url} className="text-blue-500 underline">
            clique aqui
          </a>.
        </p>
        <div className="border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin mx-auto mt-4"></div>
      </div>
    </div>
  );
};

export default ProjectRedirect;
