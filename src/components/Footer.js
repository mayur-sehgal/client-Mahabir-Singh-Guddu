// components/Footer.js
import React from 'react';
const Footer = ({ colors }) => (
  <footer style={{ backgroundColor: colors.primary, color: 'white', textAlign: 'center', padding: '20px' }}>
    <p>&copy; {new Date().getFullYear()} Mahabir Singh Guddu | All Rights Reserved.</p>
    <p style={{ fontSize: '0.8rem', color: colors.secondary }}>Cultural Preservation through Art.</p>
  </footer>
);
export default Footer;