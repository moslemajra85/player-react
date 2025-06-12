import React from 'react';

const Footer = () => (
  <footer
    className="d-flex flex-column align-items-center justify-content-center py-4"
    style={{
      background: 'linear-gradient(90deg, #2c5364 0%, #0f2027 100%)',
      color: '#fff',
      marginTop: '2rem',
    }}
  >
    <div className="mb-2">
      <i
        className="bi bi-trophy-fill mx-2"
        style={{ fontSize: 28, color: '#ffb347' }}
      ></i>
      <i
        className="bi bi-joystick mx-2"
        style={{ fontSize: 28, color: '#4fd1c5' }}
      ></i>
      <i
        className="bi bi-dribbble mx-2"
        style={{ fontSize: 28, color: '#ea4c89' }}
      ></i>
      <i
        className="bi bi-twitter-x mx-2"
        style={{ fontSize: 28, color: '#1da1f2' }}
      ></i>
      <i
        className="bi bi-instagram mx-2"
        style={{ fontSize: 28, color: '#e1306c' }}
      ></i>
      <i
        className="bi bi-facebook mx-2"
        style={{ fontSize: 28, color: '#1877f3' }}
      ></i>
      <i
        className="bi bi-youtube mx-2"
        style={{ fontSize: 28, color: '#ff0000' }}
      ></i>
    </div>
    <div style={{ fontSize: 14 }}>
      &copy; {new Date().getFullYear()} Football Players App
    </div>
  </footer>
);

export default Footer;
