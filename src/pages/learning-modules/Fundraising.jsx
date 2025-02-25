import PropTypes from 'prop-types';

export default function Fundraising({ isPreview = false }) {
  const chapterData = {
    title: "Fundraising and Networking",
    description: "Understanding fundraising strategies and building valuable connections",
    readTime: "25 min",
    thumbnail: "💰",
  };

 

  if (isPreview) {
    return (
      <div className="card-preview p-6">
        <div className="text-4xl mb-4">{chapterData.thumbnail}</div>
        <h3 className="text-xl font-semibold mb-2">{chapterData.title}</h3>
        <div className="text-sm text-gray-500 mb-2">Read time: {chapterData.readTime}</div>
      </div>
    );
  }

  return (
    <div className="chapter-content p-6">
      <div className="text-4xl mb-4">{chapterData.thumbnail}</div>
      <h1 className="text-3xl font-bold mb-4">{chapterData.title}</h1>
      <div className="chapter-info mb-6">
        <p className="text-sm text-gray-500">Read time: {chapterData.readTime}</p>
        <p className="text-gray-600 dark:text-gray-400">{chapterData.description}</p>
      </div>
      <div className="content prose dark:prose-invert">
        <h1 className="text-2xl font-bold mb-6">Fundraising and Networking Strategies</h1>
        
        <p className="mb-4">
          Fundraising and networking are two critical pillars for business growth and sustainability. Whether you&apos;re launching a startup or expanding an established company, securing the right funding and building a robust network can accelerate your journey to success. This guide explores key aspects of fundraising—including various funding types—and outlines effective networking strategies for connecting with investors, mentors, and industry partners.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Understanding Fundraising</h2>
        
        <p className="mb-4">
          Fundraising is the process of securing financial resources to support a company&apos;s operations, growth, or innovation. For many businesses, especially in the early stages, the ability to raise funds is critical to transitioning from a concept to a scalable venture.
        </p>

        <div className="video-container mb-6">
          <h3 className="text-lg font-semibold mb-3">How Startup Fundraising Works</h3>
          <iframe
          
            src="https://www.youtube.com/embed/zBUhQPPS9AY"
            title="How to Raise Money for Your Startup"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          ></iframe>
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://www.ycombinator.com/library/4A-a-guide-to-seed-fundraising"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
           A guide to seed fundraising
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Benefits of Effective Fundraising</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Capital Injection:</strong> Provides funds needed for development, marketing, and hiring</li>
          <li><strong>Market Validation:</strong> Signals potential to credible investors</li>
          <li><strong>Strategic Guidance:</strong> Gains valuable expertise from investors</li>
          <li><strong>Risk Sharing:</strong> Distributes risks among stakeholders</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Types of Funding</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">Common Funding Sources</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Bootstrapping:</strong>
            <ul className="pl-6 mt-2">
              <li>Uses personal savings and reinvested profits</li>
              <li>Maintains full control without diluting ownership</li>
              <li>Encourages lean operations</li>
            </ul>
          </li>
          <li>
            <strong>Angel Investment:</strong>
            <ul className="pl-6 mt-2">
              <li>Investment from affluent individuals</li>
              <li>Provides mentorship and industry contacts</li>
              <li>Requires equity sharing</li>
            </ul>
          </li>
          <li>
            <strong>Venture Capital:</strong>
            <ul className="pl-6 mt-2">
              <li>Significant funding for high-growth potential</li>
              <li>Brings expertise in scaling operations</li>
              <li>Demands substantial equity and control</li>
            </ul>
          </li>
          <li>
            <strong>Crowdfunding:</strong>
            <ul className="pl-6 mt-2">
              <li>Raises funds from many individual backers</li>
              <li>Validates market interest directly</li>
              <li>Requires strong marketing campaign</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Networking Strategies</h2>

        <div className="video-container mb-6">
          <h3 className="text-lg font-semibold mb-3">Effective Networking</h3>
          <iframe
            
            src="https://www.youtube.com/embed/OVf5c7NthSw"
            title="Effective Networking Strategies for Entrepreneurs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          ></iframe>
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://online.hbs.edu/blog/post/networking-for-entrepreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
           Networking for Entrepreneurs: 5 Tips & Strategies
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Key Networking Approaches</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Industry Events:</strong> Attend conferences, trade shows, and seminars</li>
          <li><strong>Digital Platforms:</strong> Leverage LinkedIn and industry-specific forums</li>
          <li><strong>Professional Associations:</strong> Join relevant organizations and groups</li>
          <li><strong>Mentorship:</strong> Build relationships with experienced professionals</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">Overcoming Networking Challenges</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Set Clear Objectives:</strong> Define networking goals and targets</li>
          <li><strong>Practice Your Pitch:</strong> Develop a concise, effective introduction</li>
          <li><strong>Be Authentic:</strong> Focus on building genuine relationships</li>
          <li><strong>Stay Persistent:</strong> Maintain regular engagement and follow-up</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Conclusion</h2>
        <p className="mb-6">
          Success in business often depends on both securing adequate funding and building strong networks. By understanding various funding options and implementing effective networking strategies, entrepreneurs can create a foundation for sustainable growth. Remember that fundraising and networking are ongoing processes that require patience, persistence, and authentic engagement with your business community.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Harvard Business Review. (2014). <em>How to Raise Money for Your Startup</em>.</p>
          <p>Entrepreneur. (2023). <em>Effective Networking Tips for Professionals</em>.</p>
          <p>Blank, S. (2013). <em>The Startup Owner&apos;s Manual</em>. K&S Ranch.</p>
          <p>Ries, E. (2011). <em>The Lean Startup</em>. Crown Business.</p>
        </div>
      </div>
    </div>
  );
}

Fundraising.propTypes = {
  isPreview: PropTypes.bool
};
