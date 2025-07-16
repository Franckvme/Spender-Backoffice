import { useEffect, useState } from 'react';
import { Users, CircleDollarSign, ArrowUp } from 'lucide-react';
import './StatsSection.css';

const stats = [
  {
    icon: Users,
    number: 15000,
    suffix: "+",
    label: "Utilisateurs actifs",
    description: "Nous font confiance chaque jour"
  },
  {
    icon: CircleDollarSign,
    number: 3000000,
    suffix: "€",
    label: "Patrimoine géré",
    description: "Sécurisé et optimisé"
  },
  {
    icon: ArrowUp,
    number: 99.9,
    suffix: "%",
    label: "Disponibilité",
    description: "Uptime garanti"
  }
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <span>
      {suffix === "€" ? suffix : ""}{formatNumber(count)}{suffix !== "€" ? suffix : ""}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Section Header */}
        <div className="stats-header">
          <h2 className="stats-title">
            Des chiffres qui parlent
          </h2>
          <p className="stats-description">
            Rejoignez des milliers d'utilisateurs qui ont transformé leur gestion financière
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stats-card">
                <div className="stats-icon">
                  <Icon size={32} color="#059669" />
                </div>
                <div className="stats-number">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="stats-label">
                  {stat.label}
                </h3>
                <p className="stats-description-text">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="stats-trust">
          <p className="stats-trust-text">Approuvé par</p>
          <div className="stats-trust-brands">
            <div className="stats-trust-brand">TechCrunch</div>
            <div className="stats-trust-brand">Forbes</div>
            <div className="stats-trust-brand">Les Échos</div>
            <div className="stats-trust-brand">BFM Business</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;