import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkspace = location.pathname.startsWith('/workspace');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="layout">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-adb">ADB</span>
            <span className="logo-erdi">ERDI Data Portal</span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
            <Link to="/indicators" className={location.pathname === '/indicators' ? 'active' : ''} onClick={closeMenu}>Indicators</Link>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''} onClick={closeMenu}>Dashboard</Link>
            <Link to="/countries" className={location.pathname.startsWith('/countries') ? 'active' : ''} onClick={closeMenu}>Countries</Link>
            <Link to="/publications" className={location.pathname === '/publications' ? 'active' : ''} onClick={closeMenu}>Publications</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About Us</Link>
            <span className="nav-cta">
              <a
                href="https://de.statsuite.dev.adb-aibd.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta-btn"
                onClick={closeMenu}
              >
                Data Explorer
              </a>
              {user ? (
                <Link to="/workspace" className={`nav-cta-btn nav-cta-primary ${location.pathname.startsWith('/workspace') ? 'active' : ''}`} onClick={closeMenu}>
                  Workspace
                </Link>
              ) : (
                <Link to="/login" className="nav-cta-btn nav-cta-primary" onClick={closeMenu}>
                  Login to Workspace
                </Link>
              )}
            </span>
            {user && (
              <span className="user-menu">
                <span className="user-name">{user.email}</span>
                <button type="button" className="btn-logout" onClick={handleLogout}>Log out</button>
              </span>
            )}
          </nav>
        </div>
      </header>
      <main className={isWorkspace ? 'main workspace-main' : 'main'}>
        <Outlet />
      </main>
      {!isWorkspace && (
        <footer className="site-footer">
          <div className="footer-inner">
            <p>© Asian Development Bank. This portal provides access to macroeconomic and socioeconomic data for Asia and the Pacific.</p>
          </div>
        </footer>
      )}
    </div>
  );
}
