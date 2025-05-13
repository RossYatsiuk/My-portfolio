import './Footer.css';
import { FaGithub, FaSteamSymbol, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <p>WebSites:</p>
    <div className="social-icons">
      <a href="https://github.com/RossYatsiuk" target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} />
      </a>
      <a href="https://t.me/MercyStyle" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane size={28} />
      </a>
       <a href="https://steamcommunity.com/id/medreable/" target="_blank" rel="noopener noreferrer">
        <FaSteamSymbol size={28} />
      </a>
    </div>
  </footer>
);

export default Footer;
