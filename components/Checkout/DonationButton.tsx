// components/DonationButton.tsx

import React from 'react';

const DonationButton = ({ stripePublicKey }) => {

  const handleDonation = async () => {
    console.log('handleDonation called'); // Add this log

    try {
      // Fetch the Checkout Session from your API
      console.log('Fetching checkout session'); // Add this log
      const response = await fetch('../../pages/api/checkout_sessions.js', {
        method: 'POST',
      });
      const session = await response.json();
      console.log('Checkout session:', session); // Add this log

      // Redirect to Stripe Checkout
      console.log('Redirecting to Stripe'); // Add this log
      const stripe = (window as any).Stripe(stripePublicKey);
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error redirecting to Stripe checkout:', error);
      }

    } catch (error) {
      console.error('Error creating a checkout session:', error);
    }
  };

  return (
    <button
      onClick={handleDonation}
      className="donation-button"
      style={{
        fontSize: '16px',
        padding: '12px 24px',
        background: '#677bc4',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Donate
    </button>
  );
};

export default DonationButton;
