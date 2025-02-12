import PropTypes from 'prop-types';

export default function BusinessModelDevelopment({ isPreview = false }) {
  const chapterData = {
    title: "Business Model Development",
    description: "Creating a sustainable business model",
    readTime: "15 min",
    thumbnail: "📊",
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
        <h1 className="text-2xl font-bold mb-6">Business Model Development</h1>
        
        <p className="mb-4">
          A <strong>business model</strong> is the foundation of any successful company. It defines how a business creates, delivers, and captures value (Osterwalder & Pigneur, 2010). A well-developed business model ensures <strong>long-term sustainability</strong> by balancing costs, revenue, and customer needs. This section explores the essential components of business model development, including the <strong>Business Model Canvas, revenue streams, cost structure, value proposition, and customer relationships</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. The Business Model Canvas</h2>
        <p className="mb-4">
          The <strong>Business Model Canvas (BMC)</strong> is a widely used framework for designing and analyzing business models (Osterwalder & Pigneur, 2010). It consists of nine key elements:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Value Proposition</strong> – The unique value a company provides to customers</li>
          <li><strong>Customer Segments</strong> – The specific groups of people the business serves</li>
          <li><strong>Channels</strong> – The ways a business delivers its value proposition</li>
          <li><strong>Customer Relationships</strong> – How a company interacts with customers</li>
          <li><strong>Revenue Streams</strong> – The sources of income for the business</li>
          <li><strong>Key Resources</strong> – The essential assets required to operate</li>
          <li><strong>Key Activities</strong> – The crucial processes needed to deliver value</li>
          <li><strong>Key Partnerships</strong> – External collaborations that help the business succeed</li>
          <li><strong>Cost Structure</strong> – The expenses associated with running the business</li>
        </ul>
        <p className="mb-4">
          The <strong>BMC</strong> provides a <strong>clear, structured approach</strong> for refining business models and ensuring long-term growth (Johnson et al., 2008).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Revenue Streams</h2>
        <p className="mb-4">
          A business&apos;s <strong>revenue streams</strong> represent the ways it generates income. Identifying and diversifying revenue sources is crucial for sustainability (Teece, 2010). Common revenue models include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Product Sales:</strong> Selling physical or digital goods (e.g., Apple, Amazon)</li>
          <li><strong>Subscription Model:</strong> Charging customers on a recurring basis (e.g., Netflix, Spotify)</li>
          <li><strong>Freemium Model:</strong> Offering free basic services while charging for premium features (e.g., LinkedIn, Dropbox)</li>
          <li><strong>Advertising Revenue:</strong> Generating income through ads (e.g., Google, Facebook)</li>
          <li><strong>Licensing and Royalties:</strong> Charging for the right to use intellectual property (e.g., Microsoft)</li>
          <li><strong>Transactional Fees:</strong> Charging per transaction (e.g., PayPal, Visa)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Cost Structure</h2>
        <p className="mb-4">
          Understanding and managing costs is essential for building a <strong>sustainable business</strong>. The <strong>cost structure</strong> outlines all expenses required to operate (Blank, 2013).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Fixed Costs</h3>
        <p className="mb-2">These remain constant regardless of sales volume, including:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Rent and utilities</li>
          <li>Salaries of permanent staff</li>
          <li>Software and infrastructure maintenance</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Variable Costs</h3>
        <p className="mb-2">These fluctuate based on business activity, such as:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Raw materials and production costs</li>
          <li>Marketing and advertising expenses</li>
          <li>Transaction fees</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Value Proposition</h2>
        <p className="mb-4">
          The <strong>value proposition</strong> is the core of a business model—it defines what makes a product or service <strong>unique and valuable</strong> to customers (Osterwalder et al., 2014).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Elements of a Strong Value Proposition</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Solves a Problem:</strong> The product or service must address a real customer need (Teece, 2010)</li>
          <li><strong>Differentiation:</strong> It should stand out from competitors (Blank, 2013)</li>
          <li><strong>Tangible Benefits:</strong> The offering should improve the customer&apos;s experience, save time, or reduce costs</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.2 Example Value Propositions</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Airbnb:</strong> &ldquo;Belong anywhere&rdquo; – offering affordable, unique accommodations</li>
          <li><strong>Tesla:</strong> &ldquo;Sustainable energy for all&rdquo; – focusing on electric cars and renewable energy</li>
          <li><strong>Amazon:</strong> &ldquo;Everything you need, delivered fast&rdquo; – convenience and efficiency</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Customer Relationships</h2>
        <p className="mb-4">
          Building <strong>strong customer relationships</strong> is key to business success. Businesses must engage with customers <strong>before, during, and after</strong> a sale (Solomon et al., 2018).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Types of Customer Relationships</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Personalized Service:</strong> One-on-one interactions (e.g., luxury brands)</li>
          <li><strong>Automated Support:</strong> AI-driven customer assistance (e.g., chatbots, self-service portals)</li>
          <li><strong>Community Engagement:</strong> Building customer loyalty through forums and social media</li>
          <li><strong>Subscription-Based Interaction:</strong> Encouraging long-term engagement (e.g., Netflix, Amazon Prime)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Conclusion</h2>
        <p className="mb-6">
          Developing a <strong>sustainable business model</strong> requires careful planning and execution. The <strong>Business Model Canvas</strong> provides a structured framework for analyzing key components, while <strong>revenue streams, cost structures, value propositions, and customer relationships</strong> are essential for long-term success. Businesses that focus on these elements can create <strong>profitable, scalable, and competitive</strong> models that adapt to changing market conditions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Blank, S. (2013). <em>The Startup Owner&apos;s Manual: The Step-by-Step Guide for Building a Great Company</em>. K&S Ranch.</p>
          <p>Chesbrough, H. (2007). <em>Open Business Models: How to Thrive in the New Innovation Landscape</em>. Harvard Business Review Press.</p>
          <p>Johnson, M. W., Christensen, C. M., & Kagermann, H. (2008). &ldquo;Reinventing your business model.&rdquo; <em>Harvard Business Review</em>, 86(12), 50-59.</p>
          <p>Kotler, P., & Keller, K. L. (2016). <em>Marketing Management</em> (15th ed.). Pearson.</p>
          <p>Osterwalder, A., & Pigneur, Y. (2010). <em>Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers</em>. Wiley.</p>
          <p>Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A. (2014). <em>Value Proposition Design: How to Create Products and Services Customers Want</em>. Wiley.</p>
          <p>Solomon, M. R., Marshall, G. W., & Stuart, E. W. (2018). <em>Marketing: Real People, Real Choices</em> (9th ed.). Pearson.</p>
          <p>Teece, D. J. (2010). &ldquo;Business models, business strategy and innovation.&rdquo; <em>Long Range Planning</em>, 43(2-3), 172-194.</p>
        </div>
      </div>
    </div>
  );
}

BusinessModelDevelopment.propTypes = {
  isPreview: PropTypes.bool
};
