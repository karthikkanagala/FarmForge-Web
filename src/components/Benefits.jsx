import React from 'react';

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: 'Real Market Insights',
      description: 'Get the latest market prices and demand trends.',
    },
    {
      id: 2,
      title: 'Trusted Buyers',
      description: 'Connect with verified buyers and build long-term partnerships.',
    },
    {
      id: 3,
      title: 'Better Decisions',
      description: 'Make informed choices with real-time data.',
    },
    {
      id: 4,
      title: 'Higher Returns',
      description: 'Get fair prices and increase your profits.',
    },
  ];

  return (
    <section id="features" className="benefits-section">
      <div className="benefits-canvas-wrapper">
        <img 
          src="/assets/farmforge-benefits-bg.png" 
          alt="Four FarmForge Benefits Canvas" 
          className="benefits-canvas-img" 
        />

        {/* Real Accessible Overlay Cards */}
        <div className="benefits-overlay-grid">
          {benefits.map((item) => (
            <div key={item.id} className="benefit-overlay-card" tabIndex={0}>
              <span className="sr-only">{item.title}: {item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
