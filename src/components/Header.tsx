import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-center gap-8">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('home')}
            className="text-muted-foreground hover:text-foreground"
          >
            HOME
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('sobre')}
            className="text-muted-foreground hover:text-foreground"
          >
            SOBRE
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('projetos')}
            className="text-muted-foreground hover:text-foreground"
          >
            PROJETOS
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contato')}
            className="text-muted-foreground hover:text-foreground"
          >
            CONTATO
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
