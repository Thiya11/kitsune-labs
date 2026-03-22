import React from 'react';
import useSEO from '../../hooks/useSEO';
import './Legal.css';

const Cancellation = () => {
  useSEO({
    title: 'Cancellation Policy',
    description: 'Learn how to cancel your subscription and our refund policy.'
  });

  return (
    <div className="legal-page page-enter">
      <div className="container">
        <article className="legal-content">
          <h1>Cancellation <span className="gradient-text">Policy</span></h1>
          <span className="legal-last-updated">Last Updated: March 22, 2026</span>

          <section>
            <h2>1. Subscription Cancellation</h2>
            <p>You may cancel your subscription at any time. To cancel, please log in to your account and navigate to the "Billing" section, or use the link provided in your Stripe confirmation email.</p>
          </section>

          <section>
            <h2>2. Billing Cycles</h2>
            <p>Subscriptions are billed in advance on a monthly or annual basis. When you cancel, you will maintain access to the service until the end of your current billing cycle. No further charges will be made after cancellation.</p>
          </section>

          <section>
            <h2>3. Refund Policy</h2>
            <p>We do not offer refunds for partial subscription periods. However, if you are unsatisfied with the service, please contact us within 48 hours of your charge, and we will do our best to resolve the issue.</p>
          </section>

          <section>
            <h2>4. Plan Changes</h2>
            <p>You can upgrade or downgrade your plan at any time. Upgrades are applied immediately and prorated. Downgrades are applied at the end of the current billing cycle.</p>
          </section>

          <section>
            <h2>5. Service Suspension</h2>
            <p>We reserve the right to suspend or terminate access to our services for any account found to be in violation of our Terms and Conditions.</p>
          </section>

          <section>
            <h2>6. Contact Support</h2>
            <p>If you have any issues with cancellation or billing, please reach out to us at support@kitsunechaos.com.</p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Cancellation;
