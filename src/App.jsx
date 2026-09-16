import React, { useState, useEffect } from 'react';
import { APP_CONFIG, SITE_LINKS, APP_DOWNLOAD_URL, APK_DOWNLOAD_URL } from './config';
import { 
  Smartphone, 
  Download, 
  AlertTriangle, 
  X, 
  Menu, 
  ArrowRight, 
  ArrowDown, 
  Mail, 
  TrendingUp, 
  Users, 
  BarChart3, 
  ShieldCheck 
} from 'lucide-react';

// FarmForge Brand Logo Component
function Logo() {
  return (
    <a href="#home" className="brand-logo" aria-label="FarmForge Home">
      <div className="logo-icon-wrapper">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-icon" aria-hidden="true">
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

export default function App() {
  const [isAndroid, setIsAndroid] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Detect if visitor is on an Android device
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const android = /Android/i.test(userAgent);
    setIsAndroid(android);
  }, []);

  const handleInstallClick = (e) => {
    if (e) e.preventDefault();

    if (isAndroid) {
      triggerApkDownload();
    } else {
      // Non-Android visitor -> Show notice modal
      setShowNoticeModal(true);
    }
  };

  const triggerApkDownload = () => {
    setShowNoticeModal(false);

    const downloadUrl = APK_DOWNLOAD_URL || APP_DOWNLOAD_URL;
    if (!downloadUrl || downloadUrl.includes("REPLACE_WITH_REAL_APK_URL")) {
      setToastMessage({
        type: 'info',
        text: 'APK download link pending configuration in src/config.js'
      });
      setTimeout(() => setToastMessage(null), 5000);
      return;
    }

    window.location.href = downloadUrl;
  };

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showInfoToast = (e, msg) => {
    if (e) e.preventDefault();
    setToastMessage({ type: 'info', text: msg });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const featuresList = [
    {
      id: 1,
      title: 'Real Market Insights',
      desc: 'Get the latest market prices and demand trends.',
      icon: TrendingUp
    },
    {
      id: 2,
      title: 'Trusted Buyers',
      desc: 'Connect with verified buyers and build long-term partnerships.',
      icon: Users
    },
    {
      id: 3,
      title: 'Better Decisions',
      desc: 'Make informed choices with real-time data.',
      icon: BarChart3
    },
    {
      id: 4,
      title: 'Higher Returns',
      desc: 'Get fair prices and increase your profits.',
      icon: ShieldCheck
    },
  ];

  return (
    <div className="farmforge-page">

      {/* ==========================================
          1. HERO SECTION WITH OVERLAY NAVBAR
         ========================================== */}
      <header id="home" className="hero-section">
        <div className="hero-wrapper">
          {/* Official High-Resolution Hero Artwork Canvas */}
          <img
            src="/assets/farmforge-hero.jpeg"
            className="hero-artwork-img"
            alt="FarmForge Agricultural Platform - Better Decisions. Brighter Harvests."
          />

          {/* Overlaid Navbar sitting directly on top of the hero image */}
          <nav className="hero-navbar" aria-label="Main Navigation">
            <div className="navbar-container">
              <div className="nav-links desktop-only">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="nav-item">Home</a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-item">About</a>
                <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="nav-item">Features</a>
                <a href="#support" onClick={(e) => scrollToSection(e, 'support')} className="nav-item">Support</a>
              </div>

              <div className="nav-cta desktop-only">
                <a
                  href="#install"
                  onClick={handleInstallClick}
                  className="btn-nav-install"
                  aria-label="Install App"
                >
                  <span>Install App</span>
                  <Download size={16} />
                </a>
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                className="mobile-menu-toggle mobile-only"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </nav>

          {/* Overlaid Interactive "Install FarmForge" CTA Button */}
          <a
            href="#install"
            onClick={handleInstallClick}
            className="hero-install-cta-btn"
            aria-label="Install FarmForge Android App"
            title="Install FarmForge"
          >
            <img
              src="/assets/farmforge-install-button.png"
              alt="Install FarmForge"
              className="hero-install-btn-img"
            />
          </a>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <Logo />
              <button
                type="button"
                className="btn-close-menu"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a></li>
                <li><a href="#support" onClick={(e) => scrollToSection(e, 'support')}>Support</a></li>
                <li><a href="#install" onClick={(e) => scrollToSection(e, 'install')}>Install Guide</a></li>
              </ul>

              <button
                type="button"
                className="btn-install-mobile"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleInstallClick(e);
                }}
              >
                <span>Install FarmForge App</span>
                <Download size={18} />
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* ==========================================
          2. FEATURE STRIP SECTION (#features)
         ========================================== */}
      <section id="features" className="features-strip-section" aria-label="Key Features">
        <div className="section-container">
          {/* Desktop Feature Strip Asset */}
          <div className="feature-strip-wrapper desktop-only">
            <img
              src="/assets/farmforge-feature-strip.png"
              alt="Real Market Insights, Trusted Buyers, Better Decisions, Higher Returns"
              className="feature-strip-img"
            />
          </div>

          {/* Responsive Feature Cards for Tablet & Mobile */}
          <div className="features-grid mobile-only">
            {featuresList.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="feature-card" tabIndex={0}>
                  <div className="feature-icon-badge">
                    <IconComp size={24} />
                  </div>
                  <div className="feature-card-content">
                    <h3 className="feature-card-title">{item.title}</h3>
                    <p className="feature-card-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. HOW TO INSTALL + ABOUT + SUPPORT
             Single unified section with banner as CSS background
         ========================================== */}
      <section id="install" className="install-help-bg-section" aria-label="Install FarmForge, About and Support">
        <div className="section-container">

          {/* 4 Interactive Step Cards with Smooth Hover Transitions */}
          <div className="install-steps-grid">
            <div className="step-card-wrapper">
              <div className="step-card" tabIndex={0} role="article" aria-label="Step 1: Tap Install">
                <img src="/assets/farmforge-install-step-1.png" alt="Step 1: Tap Install - Click the Install FarmForge button above." className="step-img" />
              </div>
              <div className="step-arrow-wrapper desktop-only" aria-hidden="true">
                <ArrowRight size={26} className="step-arrow-icon" />
              </div>
              <div className="step-arrow-wrapper mobile-only" aria-hidden="true">
                <ArrowDown size={24} className="step-arrow-icon" />
              </div>
            </div>

            <div className="step-card-wrapper">
              <div className="step-card" tabIndex={0} role="article" aria-label="Step 2: Download APK">
                <img src="/assets/farmforge-install-step-2.png" alt="Step 2: Download APK - The app will download to your device." className="step-img" />
              </div>
              <div className="step-arrow-wrapper desktop-only" aria-hidden="true">
                <ArrowRight size={26} className="step-arrow-icon" />
              </div>
              <div className="step-arrow-wrapper mobile-only" aria-hidden="true">
                <ArrowDown size={24} className="step-arrow-icon" />
              </div>
            </div>

            <div className="step-card-wrapper">
              <div className="step-card" tabIndex={0} role="article" aria-label="Step 3: Open the File">
                <img src="/assets/farmforge-install-step-3.png" alt="Step 3: Open the File - Open the downloaded APK from your notifications or Downloads folder." className="step-img" />
              </div>
              <div className="step-arrow-wrapper desktop-only" aria-hidden="true">
                <ArrowRight size={26} className="step-arrow-icon" />
              </div>
              <div className="step-arrow-wrapper mobile-only" aria-hidden="true">
                <ArrowDown size={24} className="step-arrow-icon" />
              </div>
            </div>

            <div className="step-card-wrapper">
              <div className="step-card" tabIndex={0} role="article" aria-label="Step 4: Allow and Install">
                <img src="/assets/farmforge-install-step-4.png" alt="Step 4: Allow & Install - Allow installation if Android asks, then install FarmForge." className="step-img" />
              </div>
            </div>
          </div>

          {/* Device Information Panels */}
          <div className="device-info-wrapper">
            <img
              src="/assets/farmforge-iphone-computer-info.png"
              alt="Built for Android & Using an iPhone or a Computer?"
              className="device-info-img"
            />
          </div>

          {/* About Sub-section */}
          <div id="about" className="about-card">
            <h2 className="about-title">Empowering Agricultural Communities</h2>
            <p className="about-desc">
              FarmForge connects agricultural producers with verified buyers, delivering transparent real-time market prices, climate resilience data, and collective bargaining tools for sustainable farming tomorrows.
            </p>
          </div>

          {/* Support Sub-section */}
          <div id="support" className="support-card">
            <div className="support-content">
              <h2 className="support-title">Need Help or Have Questions?</h2>
              <p className="support-desc">
                Contact FarmForge support for assistance with installation, account setup, or market pricing features.
              </p>
            </div>
            <div className="support-cta">
              <a
                href="mailto:support@farmforge.com"
                onClick={(e) => showInfoToast(e, 'Opening email client (support@farmforge.com)...')}
                className="btn-support-contact"
              >
                <Mail size={18} />
                <span>Contact Support</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          7. FULL-WIDTH FOOTER SECTION
         ========================================== */}
      <footer className="site-footer">
        <div className="section-container">
          <div className="footer-top-row">
            {/* Left: Brand Logo */}
            <div className="footer-brand">
              <Logo />
            </div>

            {/* Center: Main Footer Navigation Links */}
            <nav className="footer-nav" aria-label="Footer Navigation">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="footer-link">Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="footer-link">About</a>
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="footer-link">Features</a>
              <a href="#support" onClick={(e) => scrollToSection(e, 'support')} className="footer-link">Support</a>
              <a href="#privacy" onClick={(e) => showInfoToast(e, 'Privacy Policy')} className="footer-link">Privacy</a>
              <a href="#terms" onClick={(e) => showInfoToast(e, 'Terms of Service')} className="footer-link">Terms</a>
            </nav>

            {/* Right: Social Media Buttons */}
            <div className="footer-socials">
              <a 
                href={SITE_LINKS.facebook} 
                onClick={(e) => showInfoToast(e, 'Facebook Page')}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="social-btn"
              >
                FB
              </a>
              <a 
                href={SITE_LINKS.linkedin} 
                onClick={(e) => showInfoToast(e, 'LinkedIn Profile')}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-btn"
              >
                IN
              </a>
              <a 
                href={SITE_LINKS.youtube} 
                onClick={(e) => showInfoToast(e, 'YouTube Channel')}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="social-btn"
              >
                YT
              </a>
              <a 
                href={SITE_LINKS.instagram} 
                onClick={(e) => showInfoToast(e, 'Instagram Profile')}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-btn"
              >
                IG
              </a>
            </div>
          </div>

          <div className="footer-bottom-row">
            <div className="footer-copyright">
              © 2024 FarmForge. All rights reserved.
            </div>

            <div className="footer-tagline-group">
              <span className="footer-tagline-text">Sustainable Agriculture. Stronger Communities.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status">
          <AlertTriangle size={20} className="toast-icon" />
          <span>{toastMessage.text}</span>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToastMessage(null)}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Non-Android Device Notice Modal */}
      {showNoticeModal && (
        <div className="modal-overlay" onClick={() => setShowNoticeModal(false)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowNoticeModal(false)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="modal-icon-badge">
                <Smartphone size={32} />
              </div>
              <h3 id="modal-title" className="modal-title">Android Device Required</h3>
            </div>

            <div className="modal-body">
              <p className="modal-main-msg">
                FarmForge is currently available for <strong>Android</strong> only.
              </p>
              <p className="modal-sub-msg">
                Please open this page on an Android mobile device to install the app.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn-modal-primary"
                onClick={() => setShowNoticeModal(false)}
              >
                Got It
              </button>

              <button
                type="button"
                className="btn-modal-secondary"
                onClick={triggerApkDownload}
              >
                <Download size={16} />
                <span>Download APK Anyway</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
