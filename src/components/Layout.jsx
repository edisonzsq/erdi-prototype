import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkspace = location.pathname.startsWith('/workspace');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="layout">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-adb">ADB</span>
            <span className="logo-erdi">ERDI Data Portal</span>
          </Link>
          <nav className="main-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <a href="https://adb-demo2.webflow.io/country-outlook/philippines" target="_blank" rel="noopener noreferrer">Indicators</a>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
            <a href="https://adb-demo2.webflow.io/country-outlook/philippines" target="_blank" rel="noopener noreferrer">Countries</a>
            <Link to="/publications" className={location.pathname === '/publications' ? 'active' : ''}>Publications</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
            {user && (
              <>
                <Link to="/workspace" className={location.pathname.startsWith('/workspace') ? 'active' : ''}>Workspace</Link>
                <span className="user-menu">
                  <span className="user-name">{user.email}</span>
                  <button type="button" className="btn-logout" onClick={handleLogout}>Log out</button>
                </span>
              </>
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
