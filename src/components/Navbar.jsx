import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Menu items list
  const navLinks = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Services', href: '#services' },
    { id: 4, name: 'Contact', href: '#contact' },
  ];

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (name) => {
    setActiveItem(name);
    closeMenu();
  };

  return (
    <>
      {/* Top Navbar Header */}
      <header className="navbar">
        <div className="navbar-container">
          
          {/* Logo */}
          <a href="#home" className="logo" onClick={() => handleLinkClick('Home')}>
            <span className="logo-badge">N</span>
            <span className="logo-text">Navbar<span className="accent-text">App</span></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeItem === link.name ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="desktop-btn-container">
            <button 
              type="button" 
              className="btn-create" 
              onClick={() => alert('Create Account clicked!')}
            >
              Create Account
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            type="button" 
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className={`bar ${isOpen ? 'bar-1' : ''}`}></span>
            <span className={`bar ${isOpen ? 'bar-2' : ''}`}></span>
            <span className={`bar ${isOpen ? 'bar-3' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Tablet Menu: Full-width green background with X close icon & horizontal links */}
      <div className={`tablet-menu ${isOpen ? 'open' : ''}`}>
        <div className="tablet-menu-inner">
          <ul className="tablet-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`tablet-link ${activeItem === link.name ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="tablet-right">
            <button 
              type="button" 
              className="tablet-btn" 
              onClick={() => { closeMenu(); alert('Create Account clicked!'); }}
            >
              Create Account
            </button>
            <button 
              type="button" 
              className="close-icon-btn" 
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Full-screen green vertical menu with centered items & bottom button */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-logo">NavbarApp</span>
          <button 
            type="button" 
            className="close-icon-btn" 
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`mobile-link ${activeItem === link.name ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-footer">
          <button 
            type="button" 
            className="mobile-create-btn"
            onClick={() => { closeMenu(); alert('Create Account clicked!'); }}
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
