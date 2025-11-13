// ...existing code...
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 font-serif flex items-center justify-between">
        {/* left spacer (keeps nav centered) */}
        <div className="w-10" />

        {/* center navigation */}
        <nav className="flex items-center gap-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("home")}
            className="text-muted-foreground hover:text-foreground"
          >
            HOME
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("sobre")}
            className="text-muted-foreground hover:text-foreground"
          >
            SOBRE
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("projetos")}
            className="text-muted-foreground hover:text-foreground"
          >
            PROJETOS
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contato")}
            className="text-muted-foreground hover:text-foreground"
          >
            CONTATO
          </Button>
        </nav>

{/* Social icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/gicarolinedev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-90"
          >
            <img src="/public/github.png" alt="GitHub" width="35" height="35" />
          </a>

          <a
            href="https://www.linkedin.com/in/giovanna-caroline-11875b2b8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-90"
          >
            <img src="/public/linkedin.png" alt="LinkedIn" width="35" height="35" />
          </a>

          <a
            href="https://medium.com/@SEU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="hover:opacity-90"
          >
            <img src="/public/medium.png" alt="Medium" width="20" height="20" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;