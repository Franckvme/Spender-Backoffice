import  { useState } from 'react';
import { Menu  } from "lucide-react";
import './Navbar.css';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <span className="animated-inwise-nav">
              <span className="text-main-nav">Spender </span>
            </span>   
            <br />
            <div className="ai-subtitle">
          <span className="ai-text">Propulsé par l'IA</span>
            </div>          
            </div>
          {/* Desktop Navigation */}
          <nav className="nav-links">
            <button onClick={() => scrollTo("home")} className="nav-link">Home</button>
            <button onClick={() => scrollTo("home")} className="nav-link">What's Spender ?</button>

            <button onClick={() => scrollTo("features")} className="nav-link">Fonctionnalités</button>
            <button onClick={() => scrollTo("pricing")} className="nav-link">Tarifs</button>
            <button onClick={() => scrollTo("login")} className="nav-link">Connexion</button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="nav-right">

          <button className="cta-btn">Créer un compte</button>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-link">Accueil</a>
          <a href="#features" className="mobile-link">Fonctionnalités</a>
          <a href="#pricing" className="mobile-link">Tarifs</a>
          <a href="#login" className="mobile-link">Connexion</a>
          <button className="mobile-cta">Créer un compte</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;