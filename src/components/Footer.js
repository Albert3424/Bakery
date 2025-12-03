import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line"></div> {}
      <div className="footer-content">
        <p>&copy; {currentYear} The Bakery Shop. Все права защищены.</p>
        <p>
          <a href="/privacy-policy" className="footer-link">Политика конфиденциальности</a> |{' '}
          <a href="/terms-of-service" className="footer-link">Условия использования</a>
        </p>
        {}
        {}
      </div>
    </footer>
  );
}

export default Footer;
