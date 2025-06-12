import React from 'react';

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg"
    style={{
      background: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)',
      padding: '0.75rem 2rem',
    }}
  >
    <a
      className="navbar-brand d-flex align-items-center text-white"
      href="#"
      style={{ fontWeight: 600, fontSize: 22 }}
    >
      <i
        className="bi bi-rocket-takeoff-fill me-2"
        style={{ fontSize: 28, color: '#ffb347' }}
      ></i>
      RocketPlayers
    </a>
    <div className="ms-auto">
      <ul className="navbar-nav flex-row gap-3">
        <li className="nav-item">
          <a className="nav-link text-white nav-link-custom" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white nav-link-custom" href="#">
            Players
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white nav-link-custom" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
    <style>
      {`
        .nav-link-custom {
          transition: color 0.2s, background 0.2s;
          border-radius: 4px;
          padding: 0.5rem 1rem;
        }
        .nav-link-custom:hover {
          color: #fff !important;
          background: #1e3c72;
          text-decoration: none;
        }
      `}
    </style>
  </nav>
);

export default Navbar;
