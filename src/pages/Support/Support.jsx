import React from 'react';
import useSEO from '../../hooks/useSEO';
import Button from '../../components/UI/Button';
import './Support.css';

const Support = () => {
  useSEO({
    title: 'Support — Help & FAQ',
    description: 'Get support, find answers to frequently asked questions, and learn how to use kitsunechaos tools.'
  });

  const faqs = [
    {
      q: 'How does Grant Proposal AI work?',
      a: 'It uses advanced AI models to analyze your grant RFP and generate a baseline draft directly in your Google Doc sidebar. You can then refine and edit the proposal to match your voice.'
    },
    {
      q: 'Does it work with any grant?',
      a: 'Yes, as long as you have the text or PDF of the RFP, you can paste it into the sidebar for analysis.'
    },
    {
      q: 'Is my data secure?',
      a: 'We do not store your Google Docs content. The AI only processes the text to generate the proposal when you click "Generate".'
    },
    {
      q: 'How do I cancel my subscription?',
      a: 'You can cancel anytime via the link in your Stripe email or by visiting our Cancellation Policy page.'
    }
  ];

  return (
    <div className="support-page page-enter">
      <div className="container">
        <div className="support__header">
          <h1> <span className="gradient-text">Support</span></h1>
          <p>We're here to help you get the most out of your experiments.</p>
        </div>

        <section className="support__faq">
          <h2 className="support__section-title">Frequently Asked Questions</h2>
          <div className="support__faq-grid stagger-children">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-card glass animate-fade-in-up">
                <h3 className="faq-card__question">{faq.q}</h3>
                <p className="faq-card__answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="support__contact">
          <div className="support__contact-card glass animate-fade-in-up">
            <h2 className="support__contact-title">Still Need Help?</h2>
            <p className="support__contact-text">
              If your question isn't answered here, feel free to reach out. We typically respond within 24-48 hours.
            </p>
            <div className="support__contact-actions">
              <Button href="mailto:support@kitsunechaos.com" size="lg" variant="primary" icon="✉️">
                Email Support
              </Button>
              <Button href="https://x.com/chaos_kits38889" external size="lg" variant="secondary" icon="𝕏">
                Twitter Support
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
