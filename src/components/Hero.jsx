import React from 'react';
import { Download } from 'lucide-react';
import { APP_CONFIG } from '../config';

// Android Bot SVG Icon
function AndroidIcon({ size = 26, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1v-9H6v9zm-2-9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1zm16 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1zM7.5 5.25l-1.3-1.3a.75.75 0 011.06-1.06l1.52 1.52A7.47 7.47 0 0112 4c1.15 0 2.24.26 3.22.71l1.52-1.52a.75.75 0 011.06 1.06l-1.3 1.3C18.15 6.78 19 8.78 19 11H5c0-2.22.85-4.22 2.5-5.75zM9 8.5a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
  );
}

export default function Hero({ onInstallClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-canvas-wrapper">
        {/* Full visual hero artwork canvas */}
        <img 
          src="/assets/farmforge-hero-bg.png" 
          alt="FarmForge Agricultural Design Canvas" 
          className="hero-canvas-img"
        />

        {/* Real Interactive Overlay Controls over Hero Canvas */}
        <div className="hero-overlay-container">
          {/* Main Hero CTA Button Overlay */}
          <div className="hero-cta-overlay-wrapper">
            <button
              type="button"
              className="btn-install-hero-overlay"
              onClick={onInstallClick}
              aria-label="Install FarmForge Android App"
            >
              <AndroidIcon size={28} className="btn-android-icon" />
              <span className="btn-hero-text">Install FarmForge</span>
              <Download size={22} className="btn-hero-download" />
            </button>

            <div className="version-tag-overlay">
              Latest Version: {APP_CONFIG.version} &nbsp;|&nbsp; Android Only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
