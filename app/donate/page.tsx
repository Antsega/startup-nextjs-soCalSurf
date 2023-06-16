'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from "@/components/Common/Breadcrumb";
import DonationButton from "@/components/Checkout/DonationButton"


const publicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <div style={{ textAlign: 'center', margin: '40px' }}>
        {/* Use the DonationButton component */}
        <DonationButton stripePublicKey={publicKey} stripeProductId="prod_O5dwfwvvxH6siw" />
      </div>
    </>
  );
};

export default ContactPage;
