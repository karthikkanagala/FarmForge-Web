import React from 'react';
import { SITE_LINKS } from '../config';

export default function Footer() {
  return (
    <footer id="support" className="site-footer">
      <div className="footer-canvas-wrapper">
        <img 
          src="/assets/farmforge-footer-bg.png" 
          alt="FarmForge Footer Background Canvas" 
          className="footer-canvas-img" 
        />

        {/* Real Interactive Footer Overlays */}
        <div className="footer-overlay-container">
          {/* Logo link overlay */}
          <a 
            href={SITE_LINKS.home} 
            className="footer-logo-overlay-link" 
            aria-label="FarmForge Home"
          ></a>

          {/* Navigation Links Overlay */}
          <nav className="footer-nav-overlay" aria-label="Footer Navigation">
            <a href={SITE_LINKS.home} className="footer-nav-item">Home</a>
            <a href={SITE_LINKS.about} className="footer-nav-item">About</a>
            <a href={SITE_LINKS.support} className="footer-nav-item">Support</a>
            <a href={SITE_LINKS.privacy} className="footer-nav-item">Privacy</a>
            <a href={SITE_LINKS.terms} className="footer-nav-item">Terms</a>
          </nav>

          {/* Social Links Overlay */}
          <div className="footer-social-overlay">
            <a 
              href={SITE_LINKS.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-overlay-link" 
              aria-label="Facebook"
            ></a>
            <a 
              href={SITE_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-overlay-link" 
              aria-label="LinkedIn"
            ></a>
            <a 
              href={SITE_LINKS.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-overlay-link" 
              aria-label="YouTube"
            ></a>
            <a 
              href={SITE_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-overlay-link" 
              aria-label="Instagram"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
