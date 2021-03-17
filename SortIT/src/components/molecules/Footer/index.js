import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer  style={{textAlign:"center!important;"}} className="Footer">
      <section>
      <p>
        {' '}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"

        >
          SortIT @2021
        </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
