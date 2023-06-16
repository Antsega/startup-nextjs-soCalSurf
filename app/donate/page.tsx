'use client'
import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

const DonationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Donation Page"
        description="Support our mission and contribute to a better world. Your generosity makes a difference."
      />

      <div className="donation-container" style={donationContainerStyle}>
        <h2 style={headingStyle}>Make a Donation</h2>
        <p style={paragraphStyle}>
          Your donation helps us to continue our efforts and make a positive impact. We appreciate your support!
        </p>
        <div style={buttonContainerStyle}>
          <button style={donationButtonStyle} onClick={() => alert("Thank you for your donation!")}>Donate Now</button>
        </div>
      </div>
    </>
  );
};

const donationContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px',
  textAlign: 'center'
};

const headingStyle: React.CSSProperties = {
  fontSize: '32px',
  marginBottom: '20px'
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '18px',
  marginBottom: '30px'
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center'
};

const donationButtonStyle: React.CSSProperties = {
  fontSize: '20px',
  padding: '15px 30px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none'
};

export default DonationPage;
