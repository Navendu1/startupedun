import PropTypes from 'prop-types';

export default function MarketingFundamentals({ isPreview = false }) {
  const chapterData = {
    title: "Marketing Fundamentals",
    description: "Basic marketing strategies for startups",
    readTime: "15 min",
    thumbnail: "📣",
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
        <h1 className="text-2xl font-bold mb-6">Marketing Fundamentals: Essential Strategies for Startups</h1>
        
        <p className="mb-4">
          Marketing is a <strong>critical function</strong> for startups, helping them build brand awareness, attract customers, and generate revenue. While <strong>modern digital marketing</strong> strategies have transformed how businesses reach consumers, <strong>traditional marketing methods</strong> still hold value in certain industries (Kotler & Keller, 2016). This section explores fundamental marketing strategies for startups, focusing on <strong>marketing strategy development, digital marketing channels, content marketing, social media marketing, customer acquisition strategies, and traditional marketing techniques</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Marketing Strategy Development</h2>
        <p className="mb-4">
          A <strong>marketing strategy</strong> outlines how a startup promotes its products or services to reach its target audience effectively. A strong marketing plan ensures that the company <strong>allocates resources efficiently</strong> and maximizes impact (Solomon et al., 2018).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Steps in Developing a Marketing Strategy</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Define Business Goals:</strong> Identify key objectives such as brand awareness, lead generation, or sales growth (Kotler & Keller, 2016)</li>
          <li><strong>Identify Target Audience:</strong> Understand customer demographics, behavior, and preferences</li>
          <li><strong>Conduct Competitive Analysis:</strong> Study competitors to identify strengths, weaknesses, and market opportunities (Porter, 2008)</li>
          <li><strong>Develop a Unique Value Proposition:</strong> Highlight what makes the startup different and why customers should choose it (Trout & Rivkin, 2010)</li>
          <li><strong>Choose the Right Marketing Channels:</strong> Select online and offline platforms that effectively reach the target audience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Digital Marketing Channels</h2>
        <p className="mb-4">
          Digital marketing is essential for startups due to its <strong>cost-effectiveness and wide reach</strong> (Chaffey & Smith, 2022).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Search Engine Optimization (SEO)</h3>
        <p className="mb-4">
          SEO involves optimizing a website to rank higher in <strong>Google search results</strong>, increasing organic traffic (Fishkin & Enge, 2019).
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>On-page SEO:</strong> Optimizing content, keywords, and meta descriptions</li>
          <li><strong>Off-page SEO:</strong> Building backlinks from reputable sources</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Digital Marketing Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Pay-Per-Click (PPC) Advertising:</strong> Use Google Ads or social media ads to target specific audiences (Chaffey & Smith, 2022)</li>
          <li><strong>Email Marketing:</strong> Build an email list for newsletters, promotions, and updates (Godin, 2018)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Content Marketing Basics</h2>
        <p className="mb-4">
          Content marketing focuses on creating <strong>valuable, relevant, and consistent content</strong> to attract and retain a target audience (Pulizzi, 2020).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Types of Content Marketing</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Blog Articles:</strong> Educate and inform potential customers about industry trends and product benefits</li>
          <li><strong>Videos:</strong> Engage users through tutorials, testimonials, and brand storytelling (Kotler & Keller, 2016)</li>
          <li><strong>E-books & Whitepapers:</strong> Provide in-depth knowledge and generate leads</li>
          <li><strong>Infographics:</strong> Visually communicate complex information quickly</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Social Media Marketing</h2>
        <p className="mb-4">
          Social media platforms are powerful tools for <strong>brand awareness, customer engagement, and direct sales</strong> (Tuten & Solomon, 2020).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Platform Selection and Strategy</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Facebook & Instagram:</strong> Ideal for consumer brands, visual content, and paid advertising</li>
          <li><strong>LinkedIn:</strong> Best for B2B startups and professional networking (Chaffey & Smith, 2022)</li>
          <li><strong>Twitter/X:</strong> Useful for real-time updates and industry conversations</li>
          <li><strong>TikTok & YouTube:</strong> Great for video marketing and engaging younger audiences</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Customer Acquisition Strategies</h2>
        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Marketing Approaches</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Inbound Marketing:</strong> Attracts customers through SEO, content marketing, and social media (Pulizzi, 2020)</li>
          <li><strong>Outbound Marketing:</strong> Actively reaches out through paid ads, cold emails, and direct sales</li>
          <li><strong>Referral Programs:</strong> Encourage existing customers to refer friends</li>
          <li><strong>Influencer Marketing:</strong> Partner with industry influencers to promote products</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Traditional Marketing Techniques</h2>
        <p className="mb-4">
          While digital marketing dominates, traditional methods remain valuable in certain industries (Kotler & Keller, 2016).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">6.1 Traditional Marketing Methods</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Print Advertising:</strong> Newspapers, magazines, flyers, and brochures</li>
          <li><strong>TV and Radio:</strong> Traditional broadcast advertising for wider reach</li>
          <li><strong>Direct Mail:</strong> Targeted physical mail campaigns</li>
          <li><strong>Trade Shows:</strong> Face-to-face marketing at industry events (Solomon et al., 2018)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Conclusion</h2>
        <p className="mb-6">
          Marketing is a <strong>vital aspect</strong> of startup success. By focusing on <strong>strategic planning, digital marketing, content creation, social media engagement, customer acquisition, and traditional marketing methods</strong>, startups can build strong brands and attract loyal customers. A well-executed marketing plan helps startups <strong>scale efficiently and compete effectively</strong> in their industries.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Chaffey, D., & Smith, P. (2022). <em>Digital Marketing: Strategy, Implementation, and Practice</em>. Pearson.</p>
          <p>Fishkin, R., & Enge, E. (2019). <em>The Art of SEO</em>. O&apos;Reilly Media.</p>
          <p>Godin, S. (2018). <em>This is Marketing: You Can&apos;t Be Seen Until You Learn to See</em>. Portfolio.</p>
          <p>Kotler, P., & Keller, K. L. (2016). <em>Marketing Management</em> (15th ed.). Pearson.</p>
          <p>Porter, M. E. (2008). <em>Competitive Strategy: Techniques for Analyzing Industries and Competitors</em>. Free Press.</p>
          <p>Pulizzi, J. (2020). <em>Content Inc</em>. McGraw-Hill.</p>
          <p>Solomon, M. R., Marshall, G. W., & Stuart, E. W. (2018). <em>Marketing: Real People, Real Choices</em>. Pearson.</p>
          <p>Tuten, T. L., & Solomon, M. R. (2020). <em>Social Media Marketing</em>. Sage.</p>
        </div>
      </div>
    </div>
  );
}

MarketingFundamentals.propTypes = {
  isPreview: PropTypes.bool
};
