import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { SITE_LINKS } from '../config';

export function Logo() {
  return (
    <a href={SITE_LINKS.home} className="brand-logo" aria-label="FarmForge Home">
      <div className="logo-icon-wrapper">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-icon">
          <path d="M20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C28.84 36 36 28.84 36 20C36 11.16 28.84 4 20 4ZM10 20C10 14.48 14.48 10 20 10C24.12 10 27.65 12.5 29.17 16.06C25.04 15.65 21.1 17.5 19 21C17.5 23.5 17 26.5 17.5 29.2C13.2 28.1 10 24.4 10 20Z" fill="#15803D"/>
          <path d="M20.5 35.8C25.2 35.2 29.2 32.5 31.5 28.5C31.5 23.5 27.5 19.5 22.5 19.5C19.5 19.5 16.8 21 15.2 23.3C14 25.1 13.5 27.3 13.8 29.5C15.5 33.3 19 35.5 20.5 35.8Z" fill="#853512"/>
          <path d="M18 12C24 12 28.5 16 28.5 22C28.5 24 27.8 26 26.5 27.5C24.5 23.5 21.5 21.5 17.5 21.5C14.5 21.5 12 23 11 25.5C11.5 18 14 12 18 12Z" fill="#22C55E"/>
        </svg>
      </div>
      <div className="brand-text-container">
        <span className="brand-title">FarmForge</span>
        <span className="brand-tagline">Better Decisions. Brighter Harvests.</span>
      </div>
    </a>
  );
}

export default function Navbar({ onInstallClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />

        {/* Desktop Navigation Links & Install App Button */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href={SITE_LINKS.home} className="nav-link">Home</a></li>
            <li><a href={SITE_LINKS.about} className="nav-link">About</a></li>
            <li><a href={SITE_LINKS.features} className="nav-link">Features</a></li>
            <li><a href={SITE_LINKS.support} className="nav-link">Support</a></li>
          </ul>

          <button 
            type="button" 
            className="btn-install-nav" 
            onClick={onInstallClick}
            aria-label="Install App"
          >
            <span>Install App</span>
            <Download size={16} />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <Logo />
              <button 
                type="button" 
                className="btn-close-menu" 
                onClick={closeMenu}
                aria-label="Open navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                <li><a href={SITE_LINKS.home} onClick={closeMenu}>Home</a></li>
                <li><a href={SITE_LINKS.about} onClick={closeMenu}>About</a></li>
                <li><a href={SITE_LINKS.features} onClick={closeMenu}>Features</a></li>
                <li><a href={SITE_LINKS.support} onClick={closeMenu}>Support</a></li>
              </ul>

              <button
                type="button"
                className="btn-install-mobile"
                onClick={() => {
                  closeMenu();
                  onInstallClick();
                }}
              >
                <span>Install App</span>
                <Download size={18} />
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
