import React from 'react';
import Button from '../../components/UI/Button';
import useSEO from '../../hooks/useSEO';
import './GrantProposalAI.css';

const GrantProposalAI = () => {
  useSEO({
    title: 'Grant Proposal AI — Write Full Proposals in 20 Seconds',
    description: 'AI-powered grant writer built inside Google Docs. Stop spending days on proposals — generate a full draft instantly.',
    keywords: 'AI grant writing, grant proposals, AI Google Docs, grant writer tool, automated grant writing'
  });

  const stripeUrl = import.meta.env.VITE_STRIPE_PAYMENT_URL || '#';

  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'Free',
      features: [
        '5 reports included',
        'Works inside Google Docs',
        'Works for 1 month',
        'Basic support'
      ],
      buttonText: 'Get Started Free',
      variant: 'secondary',
      link: '#'
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/ month',
      features: [
        'Unlimited proposals',
        'Works inside Google Docs',
        'Saves mission & org details',
        'Priority Support',
        'Cancel anytime'
      ],
      buttonText: 'Buy Now',
      variant: 'primary',
      link: stripeUrl
    }
  ];

  const problems = [
    { icon: '❌', text: 'Hours writing proposals from scratch' },
    { icon: '❌', text: 'Expensive grant writers cost $5,000+' },
    { icon: '❌', text: 'Missed deadlines from slow turnaround' },
    { icon: '❌', text: 'Copy-pasting between tools all day' }
  ];

  const steps = [
    { number: '01', title: 'Paste RFP', description: 'Paste the grant RFP into the Google Docs sidebar' },
    { number: '02', title: 'Click Generate', description: 'Click the "Generate" button' },
    { number: '03', title: 'Complete Proposal', description: 'A full draft appears instantly in your Google Doc' }
  ];

  return (
    <div className="grant-proposal-ai page-enter">
      {/* Hero */}
      <section className="gai-hero container">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__badge">AI-Powered Proposal Tool</div>
        <h1 className="gai-hero__title">
          Write Grant Proposals in <span className="gradient-text">20 Seconds</span>
        </h1>
        <p className="gai-hero__subtitle">
          AI-powered grant writer built inside Google Docs. 
          Stop spending days on proposals — generate a 
          full draft instantly.
        </p>
        <div className="gai-hero__actions">
          <Button href={stripeUrl} external size="lg" icon="🚀" variant="primary">
            Try Pro — $49/month
          </Button>
          <Button href="#pricing" size="lg" variant="secondary">
            View Plans
          </Button>
        </div>
        
        <div className="gai-hero__demo glass">
          <img src="/brand/grant_writer_demo.png" alt="AI Grant Writer Dashboard" />
        </div>
      </section>

      {/* Problem */}
      <section className="gai-problem">
        <div className="container">
          <h2 className="gai-problem__title">
            Grant writing is <span className="gradient-text">killing your team</span>
          </h2>
          <div className="gai-problem__grid">
            {problems.map((p, i) => (
              <div key={i} className="gai-problem__card glass stagger-children">
                <span className="gai-problem__icon">{p.icon}</span>
                <p className="gai-problem__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container gai-how-it-works">
        <h2 className="gai-how-it-works__title">3 Simple Steps</h2>
        <div className="gai-how-it-works__steps stagger-children">
          {steps.map((step, i) => (
            <div key={i} className="gai-step">
              <span className="gai-step__number">{step.number}</span>
              <div className="gai-step__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="gai-pricing">
        <div className="container">
          <h2 className="gai-pricing__title">Simple Pricing for Every Team</h2>
          <p className="gai-pricing__subtitle">Start for free or upgrade for unlimited power</p>
          
          <div className="gai-pricing__grid stagger-children">
            {plans.map((plan, i) => (
              <div key={i} className={`gai-pricing__card glass animate-fade-in-up ${plan.variant === 'primary' ? 'gai-pricing__card--featured' : ''}`}>
                <div className="gai-pricing__plan-name">{plan.name}</div>
                <div className="gai-pricing__price">{plan.price}</div>
                <span className="gai-pricing__period">{plan.period}</span>
                
                <div className="gai-pricing__features">
                  {plan.features.map((f, j) => (
                    <div key={j} className="gai-pricing__feature">
                      <span className="gai-pricing__check">✅</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                
                <Button href={plan.link} external size="lg" variant={plan.variant} style={{ width: '100%' }}>
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
         <Button href={stripeUrl} external size="lg" icon="🚀" variant="primary">
            Get Started with Pro — $49/month
          </Button>
      </section>
    </div>
  );
};

export default GrantProposalAI;
