import SocialIcons from './SocialIcons';

export default function MainCard() {
  return (
    <>
      <style>{`
        .project-link {
          color: #88C3F3;
          text-decoration: none;
          font-weight: bold;
        }
        .project-link:visited {
          color: #88C3F3;
        }
        .project-link:hover {
          color: #88C3F3;
        }
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .content-box {
            padding: 16px 24px !important;
            border-width: 6px !important;
          }
          .main-heading {
            font-size: 2rem !important;
          }
          .body-text {
            font-size: 1rem !important;
          }
          .image-container {
            flex-direction: column !important;
            align-items: center !important;
            min-height: auto !important;
          }
          .profile-image {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20px',
        paddingBottom: '48px',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        backgroundImage: 'url(/gingham_bkg.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="content-box" style={{
          border: '10px solid #88C3F3',
          borderRadius: '0',
          padding: '16px 64px',
          backgroundColor: '#FFFBEE',
          maxWidth: '1200px',
          width: '90%'
        }}>
          <div className="content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            marginBottom: '32px'
          }}>
            <div style={{ textAlign: 'left' }}>
              <h1 className="main-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 'bold' }}>
                Hi, I'm Lauren Lascano!
              </h1>
              <p className="body-text" style={{ fontSize: '1.25rem', marginBottom: '24px', lineHeight: '1.6' }}>
                I'm a senior at UNC Chapel Hill and ex-Apple SWE intern with a passion for fullstack development!
              </p>
              {/* Space for images below */}
              <div className="image-container" style={{ minHeight: '200px', marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <img
                  src="/IMG_2928.jpg"
                  alt="Lauren"
                  className="profile-image"
                  style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p className="body-text" style={{ fontSize: '1.25rem', marginBottom: '24px', lineHeight: '1.6' }}>
                I'm currently recruiting for full-time software engineer roles with a start date after May 2026.
              </p>
              <p className="body-text" style={{ fontSize: '1.25rem', marginBottom: '24px', lineHeight: '1.6' }}>
                <a href="/projects" className="project-link">
                  Click Here
                </a> to see my most recent projects and you can connect with me on the following platforms:
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
