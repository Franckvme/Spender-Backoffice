import { ChevronDown } from "lucide-react";
import "./HeroSection.css";
import  { useState, useEffect } from 'react';


const HeroSection = () => {
  const currencies = [
    '$',   // Dollar américain
    '€',   // Euro
    '£',   // Livre sterling
    '¥',   // Yen japonais
    '₹',   // Roupie indienne
    '₽',   // Rouble russe
    '₩',   // Won sud-coréen
    '₪',   // Nouveau shekel israélien
    '₫',   // Dong vietnamien
    '₦',   // Naira nigérian
    '₵',   // Cedi ghanéen
    '₡',   // Colón costa-ricain
    '₴',   // Hryvnia ukrainienne
    '₸',   // Tenge kazakh
    '₺',   // Livre turque
    '₼',   // Manat azerbaïdjanais
    '₾',   // Lari géorgien
    '₿',   // Bitcoin
    'XAF', // Franc CFA d'Afrique centrale
    'XOF', // Franc CFA d'Afrique de l'Ouest
  ];

  const [currentCurrency, setCurrentCurrency] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCurrency(prev => (prev + 1) % currencies.length);
    }, 500); // Change toutes les 500ms

    return () => clearInterval(interval);
  }, [currencies.length]);

return (    
    <section className="hero-section">
      <div className="hero-background-blur"></div>

      <div className="hero-container">
        <div className="hero-text-area">
          <div className="hero-badge">✨ Nouveau : IA pour optimiser vos finances</div>
          
          <h1 className="hero-title animated-logo-title">
            <span className="animated-currency">
              {currencies[currentCurrency]}
            </span>
            <span className="animated-f-letter">S</span>
            <span className="animated-inwise">
              <span className="text-main">pender </span>
            </span>
          </h1>
          
          <h1 className="hero-title">
            Gérez vos finances <br />
            <span className="hero-title-gradient">en toute confiance</span>
          </h1>

          <p className="hero-subtitle-premium">
            Propulsé par l'IA, <strong>Spender </strong> analyse vos dépenses, optimise vos budgets 
            et anticipe vos besoins pour que <em>chaque euro compte</em>. 
            Prenez le contrôle de votre avenir financier, simplement et intelligemment.
          </p>

          <div className="hero-buttons">
            <button className="hero-primary-button">Commencer maintenant</button>
            <button className="hero-secondary-button">Tester Spender AI</button>
          </div>
        </div>

  <div className="hero-lottie-gallery">
    <div className="hero-lottie-item">
      <iframe
        src="https://lottie.host/?file=538c411b-7321-4e2a-bd7a-89a2c2af190c/yylwh4HZ4U.lottie"
        className="hero-lottie-frame"
        allowFullScreen
      ></iframe>
      <p className="lottie-caption">Prévision</p>
    </div>
    <div className="hero-lottie-item">
      <iframe
        src="https://lottie.host/?file=5159c1de-6241-4063-bb3d-a729925dc528/UkgHwB3hg4.lottie"
        className="hero-lottie-frame"
        allowFullScreen
      ></iframe>
      <p className="lottie-caption">Analyse</p>
    </div>
    <div className="hero-lottie-item">
      <iframe
        src="https://lottie.host/?file=f3b1a16e-f7db-4df2-b9af-bb9f04a44d1e/0Ai2aQzhq0.lottie"
        className="hero-lottie-frame"
        allowFullScreen
      ></iframe>
      <p className="lottie-caption">Gestion</p>
    </div>
    <div className="hero-lottie-item">
      <iframe 
        src="https://lottie.host/embed/d2dc146f-e506-4d21-b65f-f43bced444e4/yk9ixsHAXU.lottie"
        className="hero-lottie-frame"
        allowFullScreen
      ></iframe>
      <p className="lottie-caption">Optimisation</p> 
  </div>


  </div>

        
        <div className="hero-scroll-indicator">
          <ChevronDown className="hero-scroll-icon" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;