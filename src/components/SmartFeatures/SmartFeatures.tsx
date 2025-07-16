import './SmartFeatures.css';

const features = [
  {
    lottie: "https://lottie.host/?file=730a86e0-7afb-4fcb-ab38-703b090b3876/7wFkPvnlxT.lottie",
    title: "Analyse intelligente",
    description: "Comprenez vos habitudes de dépenses grâce à une IA qui analyse automatiquement vos transactions."
  },
  {
    lottie: "https://lottie.host/?file=8c9a0e69-2dbf-4cb5-b770-4ec65234d7b9/zJKMlfOFsb.lottie",
    title: "Prévisions éfficaces",
    description: "Recevez des prévisions personnalisées basées sur vos comportements passés et vos objectifs."
  },
  {
    lottie: "https://lottie.host/?file=e13f49a3-ef28-43fc-b4df-823f466af339/O5yRQhIlBg.lottie",
    title: "Conseils automatisés",
    description: "Des recommandations en temps réel pour économiser plus et gérer mieux."
  },
  {
    lottie: "https://lottie.host/?file=7a27e4f9-0eae-4eb4-96a7-4ef3671f1028/bcvTTDT2hn.lottie",
    title: "Alertes intelligentes",
    description: "Soyez informé au bon moment pour ne rien rater d’important dans vos finances."
  }
];

const SmartFeatures = () => (
  <section className="smart-section" id="features">
    <h2 className="smart-title">Pourquoi choisir Spender ?</h2>
    <p className="smart-subtitle">
      Libérez le potentiel de vos finances grâce à l’intelligence artificielle.
    </p>
    <div className="smart-grid">
      {features.map((f, i) => (
        <div key={i} className="smart-card">
          <iframe
            src={f.lottie}
            className="smart-lottie"
            allowFullScreen
          ></iframe>
          <h3 className="smart-card-title">{f.title}</h3>
          <p className="smart-card-desc">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SmartFeatures;
