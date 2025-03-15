import { Link } from 'react-router-dom';

export default function SuccessStoriesSection() {
  const story = {
    title: "✨ Startup Success Stories",
    description: "Discover inspiring journeys of entrepreneurs just like you in your area! 🚀 Learn from their experiences and get motivated by relatable success stories from your nearby startup community. 💡"
  };

  return (
    <section id="success-stories" className="success-stories">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0 2rem'
      }}>
          <Link 
            to="/success-stories"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="story-card" style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              maxWidth: '400px',
              padding: '2.5rem',
              background: 'linear-gradient(145deg, #f3f4f6 0%, #ffffff 100%)',
              position: 'relative'
            }}>
            <style>
              {`
                .story-card:hover {
                  transform: translateY(-8px);
                  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                  background: 'linear-gradient(145deg, #ffffff 0%, #f3f4f6 100%)';
                }
                .story-card::after {
                  content: '→';
                  position: absolute;
                  right: 1.5rem;
                  top: 50%;
                  transform: translateY(-50%);
                  font-size: 1.5rem;
                  opacity: 0;
                  transition: all 0.3s ease;
                }
                .story-card:hover::after {
                  opacity: 1;
                  right: 1rem;
                }
              `}
            </style>
              <div>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  background: 'linear-gradient(to right, #2563eb, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {story.title}
                </h3>
                <p style={{
                  color: '#4b5563',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {story.description}
                </p>
              </div>
            </div>
          </Link>
      </div>
      <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link 
          to="/success-stories" 
          className="view-more-button"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--primary, #3B82F6)',
            color: 'white',
            borderRadius: '0.375rem',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
        >
          View All Success Stories
        </Link>
      </div>
    </section>
  );
}
