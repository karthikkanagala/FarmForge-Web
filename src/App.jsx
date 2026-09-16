import React, { useState, useEffect } from 'react';
import { APP_CONFIG, SITE_LINKS, APP_DOWNLOAD_URL, APK_DOWNLOAD_URL } from './config';
import { 
  Smartphone, 
  Download, 
  AlertTriangle, 
  X, 
  Menu, 
  TrendingUp, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  ArrowDown, 
  FileText, 
  Settings, 
  Monitor, 
  Apple, 
  Mail 
} from 'lucide-react';

// Android Bot SVG Icon
function AndroidIcon({ size = 24, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1v-9H6v9zm-2-9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1zm16 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1zM7.5 5.25l-1.3-1.3a.75.75 0 011.06-1.06l1.52 1.52A7.47 7.47 0 0112 4c1.15 0 2.24.26 3.22.71l1.52-1.52a.75.75 0 011.06 1.06l-1.3 1.3C18.15 6.78 19 8.78 19 11H5c0-2.22.85-4.22 2.5-5.75zM9 8.5a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
  );
}

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

  const installSteps = [
    {
      step: 1,
      title: 'Tap Install',
      desc: 'Click the Install FarmForge button above.',
      icon: Download
    },
    {
      step: 2,
      title: 'Download APK',
      desc: 'The app will download to your device.',
      icon: Download
    },
    {
      step: 3,
      title: 'Open the File',
      desc: 'Open the downloaded APK from your notifications or Downloads folder.',
      icon: FileText
    },
    {
      step: 4,
      title: 'Allow & Install',
      desc: 'Allow installation if Android asks, then install FarmForge.',
      icon: Settings
    },
  ];

  return (
    <div className="farmforge-page">
      
      {/* ==========================================
          1. HERO SECTION WITH OVERLAY NAVBAR
         ========================================== */}
      <header id="home" className="hero-section">
        {/* Full-width Hero Canvas Artwork */}
        <div className="hero-canvas-container">
          <img
            src="/assets/farmforge-artwork.jpg"
            className="design-image"
            alt="FarmForge Agricultural Platform - Better Decisions. Brighter Harvests."
          />

          {/* Overlaid Navbar sitting directly on top of the hero image */}
          <nav className="overlay-nav" aria-label="Main Navigation">
            <div className="overlay-nav-inner">
              <Logo />

              <div className="overlay-nav-links desktop-only">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="overlay-nav-item">Home</a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="overlay-nav-item">About</a>
                <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="overlay-nav-item">Features</a>
                <a href="#support" onClick={(e) => scrollToSection(e, 'support')} className="overlay-nav-item">Support</a>
              </div>

              <div className="overlay-nav-cta desktop-only">
                <a
                  href="#install"
                  onClick={(e) => scrollToSection(e, 'install')}
                  className="overlay-nav-install-btn"
                  aria-label="Install App"
                >
                  <span>Install App</span>
                  <Download size={16} />
                </a>
              </div>

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                className="mobile-menu-toggle mobile-only"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </nav>

          {/* Hero CTA Button Click Overlay */}
          <a
            href="#install"
            onClick={handleInstallClick}
            className="overlay-hero-install-btn"
            aria-label="Install FarmForge Android App"
            title="Install FarmForge"
          >
            <span className="sr-only">Install FarmForge</span>
          </a>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
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
                <AndroidIcon size={20} />
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
          <div className="features-grid">
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
          3. HOW TO INSTALL FARMFORGE (#install)
         ========================================== */}
      <section id="install" className="installation-section" aria-label="How to Install FarmForge">
        <div className="section-container">
          <div className="install-section-header">
            <h2 className="install-main-title">How to Install FarmForge</h2>
            <p className="install-subtitle">Get started in just a few simple steps.</p>
          </div>

          {/* 4 Step Cards with Hover Lift Animations */}
          <div className="install-steps-grid">
            {installSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={step.step}>
                  <div className="install-card" tabIndex={0} role="article">
                    <div className="step-badge">{step.step}</div>
                    <div className="install-icon-wrapper">
                      <StepIcon size={28} className="install-card-icon" />
                    </div>
                    <h3 className="install-card-title">{step.title}</h3>
                    <p className="install-card-desc">{step.desc}</p>
                  </div>

                  {/* Desktop Step Arrow */}
                  {idx < installSteps.length - 1 && (
                    <div className="step-arrow-wrapper desktop-only" aria-hidden="true">
                      <ArrowRight size={22} className="step-arrow-icon" />
                    </div>
                  )}

                  {/* Mobile Vertical Indicator */}
                  {idx < installSteps.length - 1 && (
                    <div className="step-arrow-wrapper mobile-only" aria-hidden="true">
                      <ArrowDown size={22} className="step-arrow-icon" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ==========================================
              4. DEVICE INFORMATION PANELS
             ========================================== */}
          <div className="device-panels-grid">
            {/* Left Panel: Android */}
            <div className="device-panel android-panel" tabIndex={0}>
              <div className="device-panel-icon android-icon-bg">
                <AndroidIcon size={36} />
              </div>
              <div className="device-panel-text">
                <h3 className="device-panel-title">Built for Android</h3>
                <p className="device-panel-main">
                  FarmForge is currently available only for Android devices.
                </p>
                <p className="device-panel-sub">
                  Open this page on your Android phone and tap the Install button to download the app.
                </p>
              </div>
            </div>

            {/* Right Panel: iPhone / Computer */}
            <div className="device-panel non-android-panel" tabIndex={0}>
              <div className="device-panel-icon-group">
                <div className="device-panel-icon other-icon-bg">
                  <Apple size={28} />
                </div>
                <div className="device-panel-icon other-icon-bg">
                  <Monitor size={28} />
                </div>
              </div>
              <div className="device-panel-text">
                <h3 className="device-panel-title">Using an iPhone or a Computer?</h3>
                <p className="device-panel-main">
                  FarmForge is currently available for Android only.
                </p>
                <p className="device-panel-sub">
                  Please open this page on an Android mobile device to install the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. ABOUT SECTION (#about)
         ========================================== */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-card">
            <h2 className="about-title">Empowering Agricultural Communities</h2>
            <p className="about-desc">
              FarmForge connects agricultural producers with verified buyers, delivering transparent real-time market prices, climate resilience data, and collective bargaining tools for sustainable farming tomorrows.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. SUPPORT SECTION (#support)
         ========================================== */}
      <section id="support" className="support-section">
        <div className="section-container">
          <div className="support-card">
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
          7. FOOTER SECTION
         ========================================== */}
      <footer className="site-footer">
        <div className="section-container">
          <div className="footer-top-row">
            {/* Left: Brand Branding */}
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
