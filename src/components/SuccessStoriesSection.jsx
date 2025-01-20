export default function SuccessStoriesSection() {
  return (
    <section className="success-stories">
      <h2>Success Stories & Testimonials</h2>
      <div className="stories-grid">
        <div className="story-card">
          <blockquote>
            &ldquo;StartupEdu helped me validate my idea and create a solid business plan.&rdquo;
          </blockquote>
          <div className="author">- Sarah, Founder of EcoPack</div>
        </div>
        <div className="story-card">
          <blockquote>
            &ldquo;The interactive tools made financial modeling so much easier to understand.&rdquo;
          </blockquote>
          <div className="author">- Michael, Tech Startup Founder</div>
        </div>
        <div className="story-card">
          <blockquote>
            &ldquo;The pitch deck templates saved me countless hours of work!&rdquo;
          </blockquote>
          <div className="author">- Priya, Social Entrepreneur</div>
        </div>
      </div>
    </section>
  );
}
