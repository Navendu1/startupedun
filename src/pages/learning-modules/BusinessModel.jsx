import PropTypes from 'prop-types';

export default function BusinessModel({ isPreview = false }) {
  const chapterData = {
    title: "Building a Business Model",
    description: "Learn key components and frameworks for creating sustainable business models",
    readTime: "20 min",
    thumbnail: "💼",
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
        <h1 className="text-2xl font-bold mb-6">Building a Business Model: Key Components for Sustainable Growth</h1>
        
        <p className="mb-4">
          A well-structured <strong>business model</strong> is essential for transforming a business idea into a successful venture. It defines how a company <strong>creates, delivers, and captures value</strong> (Osterwalder & Pigneur, 2010).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Business Model Canvas</h2>
        <p className="mb-4">
          The <strong>Business Model Canvas (BMC)</strong> is a strategic tool that outlines the <strong>nine essential building blocks</strong> of a business model. It helps businesses visualize, develop, and refine their strategies (Osterwalder & Pigneur, 2010).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 The Nine Building Blocks of the Business Model Canvas</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Value Proposition:</strong> Defines the unique value the business offers to customers</li>
          <li><strong>Customer Segments:</strong> Identifies different groups of potential customers</li>
          <li><strong>Channels:</strong> Describes how products or services reach customers</li>
          <li><strong>Customer Relationships:</strong> Explains how the company interacts with customers</li>
          <li><strong>Revenue Streams:</strong> Specifies how the business generates income</li>
          <li><strong>Key Resources:</strong> Identifies the essential assets needed to operate</li>
          <li><strong>Key Activities:</strong> Outlines the core processes necessary for business success</li>
          <li><strong>Key Partnerships:</strong> Lists external organizations that help optimize operations</li>
          <li><strong>Cost Structure:</strong> Details the major costs associated with running the business</li>
        </ul>

        <div className="additional-resource mb-4">
          <h4 className="font-semibold mb-2">Business Model Canvas Template:</h4>
          <a 
            href="https://canvanizer.com/downloads/business_model_canvas_poster.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Download Business Model Canvas PDF
          </a>
        </div>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Business Model Canvas</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/IP0cUBWTgpY"
            title="Business Model Canvas Explained"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://case.edu/provostscholars/sites/default/files/2018-03/Business-Model-Canvas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Business-Model-Canvas
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Revenue Models</h2>
        <p className="mb-4">
          A <strong>revenue model</strong> outlines how a business earns money from its products or services. Selecting the right revenue model is crucial for long-term sustainability and profitability (Teece, 2010).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Types of Revenue Models</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Subscription Model:</strong> Customers pay recurring fees (e.g., Netflix, Spotify)</li>
          <li><strong>Freemium Model:</strong> Basic services are free, with paid premium features (e.g., LinkedIn, Dropbox)</li>
          <li><strong>Advertising Model:</strong> Revenue is generated through advertisements (e.g., Google, Facebook)</li>
          <li><strong>Transaction-Based Model:</strong> Businesses earn money per transaction (e.g., PayPal, Amazon)</li>
          <li><strong>Licensing Model:</strong> Companies charge fees for intellectual property usage (e.g., Microsoft, Adobe)</li>
          <li><strong>Affiliate Marketing:</strong> Businesses earn commission for referring customers (e.g., Amazon Associates)</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Revenue Models</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/oWZbWzAyHAE"
            title="Understanding Revenue Models"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://www.salesforce.com/sales/revenue-lifecycle-management/revenue-model/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Revenue Models: Choosing the Right One for Your Business
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Customer Segmentation</h2>
        <p className="mb-4">
          Customer segmentation divides a business&apos;s target audience into distinct groups based on <strong>shared characteristics</strong> (Kotler & Keller, 2016). This allows businesses to tailor their products, services, and marketing strategies effectively.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Types of Customer Segmentation</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Demographic Segmentation:</strong> Based on age, gender, income, education, and occupation</li>
          <li><strong>Geographic Segmentation:</strong> Focused on location, climate, and urban/rural preferences</li>
          <li><strong>Psychographic Segmentation:</strong> Considers personality, values, interests, and lifestyles</li>
          <li><strong>Behavioral Segmentation:</strong> Groups customers by purchasing behavior, brand loyalty, and product usage</li>
          <li><strong>Firmographic Segmentation:</strong> Used in B2B marketing, classifying companies by industry, revenue, or size</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Benefits of Customer Segmentation</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Better Targeting:</strong> Helps businesses reach the right audience</li>
          <li><strong>Improved Personalization:</strong> Allows for customized marketing campaigns</li>
          <li><strong>Increased Customer Retention:</strong> Ensures higher engagement and loyalty</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Customer Segmentation</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/YPgjIfGClNY"
            title="Customer Segmentation Strategies"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://corporatefinanceinstitute.com/resources/management/market-segmentation-and-targeting/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
           Market Segmentation and Targeting
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Kotler, P., & Keller, K. L. (2016). <em>Marketing Management</em> (15th ed.). Pearson.</p>
          <p>Osterwalder, A., & Pigneur, Y. (2010). <em>Business Model Generation</em>. Wiley.</p>
          <p>Teece, D. J. (2010). &ldquo;Business models, business strategy and innovation.&rdquo; <em>Long Range Planning</em>, 43(2-3), 172-194.</p>
        </div>
      </div>
    </div>
  );
}

BusinessModel.propTypes = {
  isPreview: PropTypes.bool
};
