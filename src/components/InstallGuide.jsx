import React from 'react';

export default function InstallGuide() {
  const steps = [
    {
      number: 1,
      title: 'Tap Install',
      desc: 'Click the Install FarmForge button above.',
    },
    {
      number: 2,
      title: 'Download APK',
      desc: 'The app will download to your device.',
    },
    {
      number: 3,
      title: 'Open the File',
      desc: 'Open the downloaded APK from your notifications or Downloads folder.',
    },
    {
      number: 4,
      title: 'Allow & Install',
      desc: 'Allow installation if Android asks, then install FarmForge.',
    },
  ];

  return (
    <section id="about" className="install-section">
      <div className="install-canvas-wrapper">
        <img 
          src="/assets/farmforge-install-bg.png" 
          alt="How to Install FarmForge Visual Canvas" 
          className="install-canvas-img" 
        />

        {/* Real Accessible Step & Platform Overlays */}
        <div className="install-overlay-content">
          <div className="steps-overlay-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-overlay-box" tabIndex={0}>
                <span className="sr-only">
                  Step {step.number}: {step.title} - {step.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="platform-overlay-grid">
            <div className="platform-overlay-box android-box" tabIndex={0}>
              <span className="sr-only">
                Built for Android: FarmForge is currently available only for Android devices. Open this page on your Android phone and tap the Install button to download the app.
              </span>
            </div>

            <div className="platform-overlay-box other-box" tabIndex={0}>
              <span className="sr-only">
                Using an iPhone or a Computer? FarmForge is currently available for Android only. Please open this page on an Android mobile device to install the app.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
