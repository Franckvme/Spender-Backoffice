import { useEffect, useRef } from 'react';
import { 
  PieChart, 
  CircleDollarSign, 
  LayoutDashboard, 
  Coins,
  TrendingUp,
  Shield,
  Bell,
  CreditCard,
  Target,
  BarChart3,
  Wallet,
  Receipt,
  Calculator,
  Calendar,
  Users,
  Globe,
  Smartphone,
  Lock,
  Settings,
  FileText,
  Award,
  Zap
} from 'lucide-react';

import './FeatureCards.css';
const features = [
  {
    icon: PieChart,
    title: "Suivi de budget",
    description: "Analysez vos dépenses par catégorie et respectez vos objectifs budgétaires avec des alertes intelligentes.",
    color: "emerald"
  },
  {
    icon: LayoutDashboard,
    title: "Analyse des dépenses",
    description: "Visualisez vos habitudes de consommation avec des graphiques détaillés et des insights personnalisés.",
    color: "blue"
  },
  {
    icon: CircleDollarSign,
    title: "Gestion multi-comptes",
    description: "Centralisez tous vos comptes bancaires et cartes de crédit dans une interface unique et sécurisée.",
    color: "indigo"
  },
  {
    icon: Coins,
    title: "Objectifs d'épargne",
    description: "Définissez et suivez vos objectifs financiers avec des recommandations pour optimiser votre épargne.",
    color: "teal"
  },
  {
    icon: TrendingUp,
    title: "Prévisions intelligentes",
    description: "Anticipez vos finances avec des prédictions basées sur l'IA et vos habitudes de dépenses.",
    color: "emerald"
  },
  {
    icon: Shield,
    title: "Sécurité bancaire",
    description: "Protection maximale avec chiffrement de niveau bancaire et authentification multi-facteurs.",
    color: "blue"
  },
  {
    icon: Bell,
    title: "Alertes personnalisées",
    description: "Recevez des notifications intelligentes pour vos échéances, dépassements et opportunités d'épargne.",
    color: "indigo"
  },
  {
    icon: CreditCard,
    title: "Cartes virtuelles",
    description: "Créez des cartes virtuelles sécurisées pour vos achats en ligne et gérez les limites de dépenses.",
    color: "teal"
  },
  {
    icon: Target,
    title: "Planification financière",
    description: "Créez des plans personnalisés pour atteindre vos objectifs : vacances, maison, retraite.",
    color: "emerald"
  },
  {
    icon: BarChart3,
    title: "Rapports avancés",
    description: "Générez des rapports détaillés avec des insights actionables pour optimiser vos finances.",
    color: "blue"
  },
  {
    icon: Wallet,
    title: "Portefeuille digital",
    description: "Gérez tous vos moyens de paiement dans un portefeuille numérique ultra-sécurisé.",
    color: "indigo"
  },
  {
    icon: Receipt,
    title: "Scan de reçus",
    description: "Numérisez et catégorisez automatiquement vos reçus avec reconnaissance IA.",
    color: "teal"
  },
  {
    icon: Calculator,
    title: "Calculateurs financiers",
    description: "Outils de calcul pour prêts, investissements, épargne et planification fiscale.",
    color: "emerald"
  },
  {
    icon: Calendar,
    title: "Planificateur de paiements",
    description: "Organisez et automatisez vos paiements récurrents et échéances importantes.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Comptes familiaux",
    description: "Partagez et gérez les finances familiales avec des autorisations personnalisées.",
    color: "indigo"
  },
  {
    icon: Globe,
    title: "Multi-devises",
    description: "Gérez vos finances internationales avec conversion automatique et taux en temps réel.",
    color: "teal"
  },
  {
    icon: Smartphone,
    title: "App mobile premium",
    description: "Accédez à toutes vos fonctionnalités depuis notre application mobile primée.",
    color: "emerald"
  },
  {
    icon: Lock,
    title: "Coffre-fort numérique",
    description: "Stockez vos documents financiers importants dans un coffre-fort ultra-sécurisé.",
    color: "blue"
  },
  {
    icon: Settings,
    title: "Automatisation intelligente",
    description: "Automatisez vos finances avec des règles personnalisées et de l'intelligence artificielle.",
    color: "indigo"
  },
  {
    icon: FileText,
    title: "Export et conformité",
    description: "Exportez vos données et restez conforme aux réglementations fiscales locales.",
    color: "teal"
  },
  {
    icon: Award,
    title: "Programme de récompenses",
    description: "Gagnez des points et des cashbacks sur vos bonnes habitudes financières.",
    color: "emerald"
  },
  {
    icon: Zap,
    title: "Paiements instantanés",
    description: "Effectuez des virements instantanés et des paiements en temps réel partout dans le monde.",
    color: "blue"
  }
];

const FeatureCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Vitesse de défilement (pixels par frame)
    const cardWidth = 320 + 32; // largeur de carte + gap

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through all cards
      if (scrollPosition >= cardWidth * features.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <h2 className="features-title">
            Fonctionnalités qui font la différence
          </h2>
          <p className="features-subtitle">
            Des outils puissants et intuitifs pour transformer votre relation avec l'argent
          </p>
        </div>

        {/* Features Scroll Container */}
        <div className="features-scroll-container">
          <div 
            ref={scrollRef}
            className="features-grid"
            style={{
              display: 'flex',
              gap: '2rem',
              willChange: 'transform',
              width: `${(320 + 32) * features.length * 2}px` // Double width for seamless loop
            }}
          >
            {/* Render features twice for seamless infinite scroll */}
            {[...features, ...features].map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div 
                  key={index} 
                  className={`feature-card ${feature.color}`}
                  style={{ minWidth: '320px', flexShrink: 0 }}
                >
                  <div className={`feature-icon-wrapper ${feature.color}`}>
                    <Icon className="feature-icon" />
                  </div>
                  <h3 className="feature-title">
                    {feature.title}
                  </h3>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-hint">
            <span>Survolez pour mettre en pause</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="features-cta">
          <div className="cta-button">
            Découvrir toutes nos fonctionnalités
            <span className="cta-arrow">→</span>
          </div>
        </div>
      </div> 
    </section>
  );
}
export default FeatureCards;