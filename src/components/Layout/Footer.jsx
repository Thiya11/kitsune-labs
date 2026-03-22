import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/brand/favicon.ico" alt="Kitsune Chaos" className="footer__logo-img" />
              <span>
                kitsune<span className="gradient-text">Chaos</span>
              </span>
            </Link>
            <p className="footer__tagline">
              Developing in the shadows.
            </p>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-group">
              <h4 className="footer__nav-title">Navigate</h4>
              <Link to="/" className="footer__nav-link">Home</Link>
              <Link to="/projects" className="footer__nav-link">Projects</Link>
              <Link to="/about" className="footer__nav-link">About</Link>
            </div>
            <div className="footer__nav-group">
              <h4 className="footer__nav-title">Support</h4>
              <Link to="/support" className="footer__nav-link">Support</Link>
              <Link to="/terms" className="footer__nav-link">Terms</Link>
              <Link to="/privacy" className="footer__nav-link">Privacy</Link>
              <Link to="/cancellation" className="footer__nav-link">Cancellation</Link>
            </div>
            <div className="footer__nav-group">
              <h4 className="footer__nav-title">Connect</h4>
              <a href="https://github.com/Thiya11" target="_blank" rel="noopener noreferrer" className="footer__nav-link">GitHub</a>
              <a href="https://www.linkedin.com/in/thiyagu-arunachalam-b6a901159/" target="_blank" rel="noopener noreferrer" className="footer__nav-link">LinkedIn</a>
              <a href="https://x.com/chaos_kits38889" target="_blank" rel="noopener noreferrer" className="footer__nav-link">X (Twitter)</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} kitsunechaos Lab. Developed by <a href="https://www.linkedin.com/in/thiyagu-arunachalam-b6a901159/" target="_blank" rel="noopener noreferrer" className="footer__dev-link">Thiyagu Arunachalam</a>.
          </p>
          <p className="footer__tech">
            React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
