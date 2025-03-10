import { useState } from 'react';
import './success-stories.css';

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Tech', 'E-commerce', 'SaaS', 'Fintech', 'Healthcare', 'Education'];
  
  const featuredStories = [
    {
      id: 1,
      title: 'TechFlow: From Startup Weekend to $2M Seed Round',
      founder: 'Alex Chen',
      industry: 'SaaS',
      description: 'What started as a simple idea at a local startup weekend evolved into a powerful workflow automation tool now used by over 500 companies worldwide. TechFlow founder shares how StartupEdu resources helped shape their business model and fundraising strategy.',
      metrics: [
        { value: '$2M', label: 'Seed Funding' },
        { value: '500+', label: 'Enterprise Clients' },
        { value: '18', label: 'Team Members' }
      ],
      image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=TechFlow'
    },
    {
      id: 2,
      title: 'GreenCart: Transforming Local Grocery Shopping',
      founder: 'Priya Sharma',
      industry: 'E-commerce',
      description: 'GreenCart connected local farmers with urban consumers, creating a sustainable marketplace for fresh produce. Using StartupEdu market analysis tools, they identified underserved neighborhoods and optimized their delivery routes, reducing food waste by 35%.',
      metrics: [
        { value: '$5.2M', label: 'Series A' },
        { value: '12K+', label: 'Monthly Users' },
        { value: '35%', label: 'Reduced Food Waste' }
      ],
      image: 'https://placehold.co/600x400/10B981/FFFFFF?text=GreenCart'
    },
    {
      id: 3,
      title: 'MediConnect: Revolutionizing Patient Care Coordination',
      founder: 'Dr. James Wilson',
      industry: 'Healthcare',
      description: 'After struggling with patient handoffs between departments, Dr. Wilson created MediConnect to streamline communication between healthcare providers. StartupEdu pitch deck templates and financial modeling tools helped secure partnerships with major hospital networks.',
      metrics: [
        { value: '68%', label: 'Improved Handoffs' },
        { value: '23', label: 'Hospital Partners' },
        { value: '$3.8M', label: 'Annual Revenue' }
      ],
      image: 'https://placehold.co/600x400/EF4444/FFFFFF?text=MediConnect'
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      text: "StartupEdu helped me validate my business idea and create a solid plan. The financial modeling templates saved me countless hours and helped me secure our first angel investment.",
      name: "Sarah Johnson",
      role: "Founder, EcoPack",
      avatar: "https://placehold.co/150x150/F472B6/FFFFFF?text=SJ",
      category: "E-commerce"
    },
    {
      id: 2,
      text: "The interactive tools made financial modeling so much easier to understand. I was able to create projections that actually made sense to investors, resulting in our successful seed round.",
      name: "Michael Torres",
      role: "CEO, DataStack",
      avatar: "https://placehold.co/150x150/3B82F6/FFFFFF?text=MT",
      category: "Tech"
    },
    {
      id: 3,
      text: "The pitch deck templates saved me countless hours of work! I used the feedback from StartupEdu community to refine my messaging, which ultimately helped us secure partnerships with major retailers.",
      name: "Priya Patel",
      role: "Founder, SocialGoods",
      avatar: "https://placehold.co/150x150/10B981/FFFFFF?text=PP",
      category: "SaaS"
    },
    {
      id: 4,
      text: "As a technical founder with limited business experience, the learning modules on fundraising were invaluable. They helped me understand how to structure our funding rounds and negotiate terms.",
      name: "David Lee",
      role: "CTO, FinSecure",
      avatar: "https://placehold.co/150x150/6366F1/FFFFFF?text=DL",
      category: "Fintech"
    },
    {
      id: 5,
      text: "StartupEdu market research tools helped us identify our target demographic with incredible precision. This allowed us to craft messaging that resonated deeply with our early adopters.",
      name: "Emma Rodriguez",
      role: "CMO, HealthTrack",
      avatar: "https://placehold.co/150x150/EC4899/FFFFFF?text=ER",
      category: "Healthcare"
    },
    {
      id: 6,
      text: "The community of fellow entrepreneurs on StartupEdu became my support network. The shared resources and advice helped me avoid common pitfalls as I launched my edtech platform.",
      name: "Marcus Johnson",
      role: "Founder, LearnFast",
      avatar: "https://placehold.co/150x150/8B5CF6/FFFFFF?text=MJ",
      category: "Education"
    }
  ];
  
  const filteredTestimonials = activeCategory === 'All' 
    ? testimonials 
    : testimonials.filter(item => item.category === activeCategory);
  
  return (
    <div className="success-stories-page">
      <h1>Startup Success Stories</h1>
      <p className="description">
        Discover how entrepreneurs used StartupEdu resources to build and scale successful startups across various industries.
      </p>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Real Founders. Real Results.</h2>
          <p>Learn from the journeys of successful entrepreneurs who turned their ideas into thriving businesses.</p>
        </div>
      </section>
      
      {/* Featured Stories */}
      <section className="featured-stories">
        <h2>Featured Success Stories</h2>
        
        {featuredStories.map(story => (
          <article key={story.id} className="featured-story">
            <img src={story.image} alt={story.title} className="story-image" />
            <div className="story-content">
              <h3>{story.title}</h3>
              <div className="story-meta">
                <span className="industry">{story.industry}</span>
                <span className="founder">Founded by {story.founder}</span>
              </div>
              <p>{story.description}</p>
              <div className="story-metrics">
                {story.metrics.map((metric, index) => (
                  <div key={index} className="metric">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
      
      {/* Story Categories */}
      <section className="story-categories">
        <h2>Browse by Industry</h2>
        <div className="category-tabs">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="testimonials-grid">
        <h2>Entrepreneur Testimonials</h2>
        <div className="testimonials">
          {filteredTestimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                {testimonial.text}
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Submit Story */}
      <section className="submit-story">
        <h2>Share Your Success Story</h2>
        <p>
          Have you used StartupEdu to build your startup? We would love to hear about your journey and share it with our community.
        </p>
        <a href="/submit-story" className="submit-button">Submit Your Story</a>
      </section>
    </div>
  );
}
