"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // fecha o menu no mobile
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO OU ESPAÇO ESQUERDO */}
        <div className="w-10" />

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-serif">
          <Button variant="ghost" onClick={() => scrollToSection("home")}>
            HOME
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("sobre")}>
            SOBRE
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("projetos")}>
            PROJETOS
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contato")}>
            CONTATO
          </Button>
        </nav>

        {/* SOCIAL DESKTOP */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/gicarolinedev" target="_blank">
            <img src="/github.png" width="35" height="35" />
          </a>
          <a href="https://www.linkedin.com/in/giovanna-caroline-11875b2b8/" target="_blank">
            <img src="/linkedin.png" width="35" height="35" />
          </a>
          <a href="https://medium.com/@gicarolinecstd" target="_blank">
            <img src="/medium.png" width="20" height="20" />
          </a>
        </div>

        {/* MENU HAMBÚRGUER (MOBILE) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 text-lg font-serif">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("sobre")}>SOBRE</button>
          <button onClick={() => scrollToSection("projetos")}>PROJETOS</button>
          <button onClick={() => scrollToSection("contato")}>CONTATO</button>

          <div className="flex gap-4 mt-2">
            <a href="https://github.com/gicarolinedev" target="_blank">
              <img src="/github.png" width="32" />
            </a>
            <a href="https://www.linkedin.com/in/giovanna-caroline-11875b2b8/" target="_blank">
              <img src="/linkedin.png" width="32" />
            </a>
            <a href="https://medium.com/@gicarolinecstd" target="_blank">
              <img src="/medium.png" width="18" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
