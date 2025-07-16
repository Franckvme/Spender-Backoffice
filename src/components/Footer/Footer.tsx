import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>S</span>
              </div>
              <span className="footer-logo-text">Spender </span>
            </div>
            <p className="footer-description">
              Votre partenaire de confiance pour une gestion financière intelligente et sécurisée.
            </p>
            <div className="footer-social">
              <a href="https://x.com/Memphisthe47" className="footer-social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.57-2.11-9.96-5.02-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.56 2.21 9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.55z"/>
                            </svg>
              </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 2.003.24 2.47.403a4.92 4.92 0 011.69 1.09 4.924 4.924 0 011.09 1.69c.163.467.346 1.264.403 2.47.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.206-.24 2.003-.403 2.47a4.92 4.92 0 01-1.09 1.69 4.924 4.924 0 01-1.69 1.09c-.467.163-1.264.346-2.47.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.057-2.003-.24-2.47-.403a4.92 4.92 0 01-1.69-1.09 4.924 4.924 0 01-1.09-1.69c-.163-.467-.346-1.264-.403-2.47C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.057-1.206.24-2.003.403-2.47a4.92 4.92 0 011.09-1.69 4.924 4.924 0 011.69-1.09c.467-.163 1.264-.346 2.47-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.75.129 4.681.326 3.758.691 2.79 1.074 1.926 1.692 1.207 2.41.488 3.13-.13 3.993-.514 4.961-.879 5.884-.976 6.954-.936 8.256-.874 9.535-.863 9.944-.863 12s.011 2.465.073 3.744c.04 1.302.137 2.372.422 3.295.384.968 1.002 1.831 1.72 2.55.718.718 1.582 1.336 2.55 1.72.923.285 1.993.382 3.295.422C8.333 23.988 8.742 24 12 24s3.667-.012 4.947-.07c1.302-.04 2.372-.137 3.295-.422.968-.384 1.831-1.002 2.55-1.72.718-.718 1.336-1.582 1.72-2.55.285-.923.382-1.993.422-3.295.058-1.28.07-1.689.07-4.947s-.012-3.667-.07-4.947c-.04-1.302-.137-2.372-.422-3.295-.384-.968-1.002-1.831-1.72-2.55-.718-.718-1.582-1.336-2.55-1.72-.923-.285-1.993-.382-3.295-.422C15.667.012 15.258 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
              </svg>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.762-1.604-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.292-1.553 3.298-1.23 3.298-1.23.653 1.653.241 2.873.118 3.176.767.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.625-5.479 5.921.43.37.823 1.096.823 2.21v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

              <a href="https://x.com/Memphisthe47" className="footer-social-link">
                             <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="footer-section">
            <h3 className="footer-section-title">Produit</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Fonctionnalités</a>
              <a href="#" className="footer-link">Application mobile</a>
              <a href="#" className="footer-link">Tarifs</a>
              <a href="#" className="footer-link">Sécurité</a>
              <a href="#" className="footer-link">API</a>
            </div>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="footer-section-title">Support</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Centre d'aide</a>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Communauté</a>
              <a href="#" className="footer-link">Status</a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 Spender . Tous droits réservés.
          </div>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Politique de confidentialité</a>
            <a href="#" className="footer-legal-link">Conditions d'utilisation</a>
            <a href="#" className="footer-legal-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;