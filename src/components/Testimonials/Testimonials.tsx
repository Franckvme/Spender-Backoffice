import './Testimonials.css';

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Entrepreneure",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    content: "Spender m'a permis de reprendre le contrôle de mes finances d'entreprise. L'interface est intuitive et les insights sont précieux.",
    rating: 5
  },
  {
    name: "Thomas Martin",
    role: "Consultant",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    content: "Grâce à Spender, j'ai économisé plus de 200€ par mois en optimisant mes dépenses. Un outil indispensable !",
    rating: 5
  },
  {
    name: "Sophie Bernard",
    role: "Directrice Marketing",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
    content: "La synchronisation automatique avec mes comptes bancaires est un vrai gain de temps. Je recommande vivement.",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="testimonial-rating">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="testimonial-star" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Ce que disent nos utilisateurs
          </h2>
          <p className="testimonials-description">
            Découvrez comment Spender transforme la vie financière de milliers de personnes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Content */}
              <blockquote className="testimonial-content">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="testimonial-author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="testimonials-cta">
          <div className="testimonials-cta-badge">
            <span className="testimonials-cta-dot"></span>
            Rejoignez-les dès aujourd'hui
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;