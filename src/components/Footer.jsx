import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Adresse */}
        <div className="footer-block">
          <p>18 Rue de Rabanesse,</p>
          <p>63000 Clermont-Ferrand</p>
        </div>

        {/* Contact */}
        <div className="footer-block">
          <p>04 73 91 73 00</p>
          <p>
            <a href="mailto:contact@soho-auvergne.com">
              contact@soho-auvergne.com
            </a>
          </p>
        </div>

        {/* Liens */}
        <div className="footer-block footer-links">
          <a href="#">Mentions légales</a>
          <span>–</span>
          <a href="#">Confidentialité</a>
          <span>–</span>
          <a href="#">Cookies</a>
        </div>
      </div>

      {/* Crédit */}
      <div className="footer-credit">
        Fait avec amour par <span>Numéria Communication</span>
      </div>
    </footer>
  );
}
