import { Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-secondary/20 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating meaningful digital experiences through design and code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className=" mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="font-text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projetos")}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  PROJECTS
                </button>
              </li>
            </ul>
          </div>

          {/* Connect -> ENVIAR EMAIL PARA MIM */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>

            {/* MEU */}
            <a
              href="mailto:seu.email@exemplo.com?subject=Contato%20pelo%20Site&body=Olá%2C%20gostaria%20de%20entrar%20em%20contato%20sobre%20..."
              className="block rounded-lg bg-black/50 border border-border p-6 hover:bg-black/60 transition-colors"
              aria-label="Enviar email"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 
                rounded-full bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Enviar e-mail</p>
                  <p className="text-muted-foreground text-sm">gicarolinecstd@gmail.com</p>
                </div>
              </div>
            </a>

            <p className="mt-4 text-sm text-muted-foreground">
              Mande um e-mail pra falar comigo se gostou de algo por aqui, será um prazer 
              falar com você!
            </p>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;