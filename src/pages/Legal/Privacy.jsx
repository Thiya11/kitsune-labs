import React from 'react';
import useSEO from '../../hooks/useSEO';
import './Legal.css';

const Privacy = () => {
  useSEO({
    title: 'Privacy Policy',
    description: 'Learn how kitsunechaos Lab collects, uses, and protects your personal data.'
  });

  return (
    <div className="legal-page page-enter">
      <div className="container">
        <article className="legal-content">
          <h1>Privacy <span className="gradient-text">Policy</span></h1>
          <span className="legal-last-updated">Last Updated: March 22, 2026</span>

          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, subscribe to a plan, or contact support. This may include:</p>
            <ul>
              <li>Name and email address.</li>
              <li>Billing information (processed securely through Stripe).</li>
              <li>Content you input into our tools for generation purposes.</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and send related information.</li>
              <li>Send technical notices, updates, and support messages.</li>
              <li>Respond to your comments and questions.</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Storage and Security</h2>
            <p>We implement reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access. For AI tools, your input data is processed temporarily to generate output and is not used to train global AI models unless explicitly stated.</p>
          </section>

          <section>
            <h2>4. Third-Party Services</h2>
            <p>We use third-party services like Stripe for payment processing and Google for authentication. These services have their own privacy policies, and we recommend you review them.</p>
          </section>

          <section>
            <h2>5. Cookies</h2>
            <p>We use cookies to maintain your session and improve your experience. You can disable cookies in your browser settings, but some features of our services may not function properly as a result.</p>
          </section>

          <section>
            <h2>6. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@kitsunechaos.com.</p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Privacy;
