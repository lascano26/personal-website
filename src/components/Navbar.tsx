import { Link } from 'react-router';

export default function Navbar() {
  return (
    <>
      <style>{`
        .navbar-link {
          color: #1a1a1a;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          white-space: nowrap;
        }
        .navbar-link:visited {
          color: #1a1a1a;
        }
        .navbar-link:hover {
          color: #88C3F3;
        }
        @media (max-width: 768px) {
          .navbar-content {
            padding: 12px 16px !important;
          }
          .navbar-logo {
            width: 40px !important;
            height: 40px !important;
          }
          .navbar-title {
            font-size: 1rem !important;
          }
          .navbar-link {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
      <header
        style={{
          borderBottom: '8px solid #88C3F3',
          width: '100vw',
          margin: 0,
          marginLeft: 'calc(-50vw + 50%)',
          padding: 0,
          backgroundColor: '#FFFBEE',
          position: 'relative'
        }}
      >
        <div className="navbar-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', width: '100%', margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
            <img
              src="/src/assets/flower.png.webp"
              alt="Flower logo"
              className="navbar-logo"
              width={50}
              height={50}
              style={{ objectFit: 'contain' }}
            />
            <h1 className="text-xl font-bold navbar-title" style={{ whiteSpace: 'nowrap' }}>Lauren Lascano</h1>
          </div>
          <nav>
            <Link
              to="/projects"
              className="navbar-link"
            >
              My Projects
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
