import PropTypes from 'prop-types';

export default function IntroductionToStartups({ isPreview = false }) {
  const chapterData = {
    title: "Introduction to Startups",
    description: "What is a startup and key characteristics of successful startups",
    readTime: "15 min",
    thumbnail: "📚",
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
        <h1 className="text-2xl font-bold mb-6">An Introduction to Startups</h1>
        
        <p className="mb-4">
          Startups play a crucial role in economic growth, innovation, and technological advancement. These companies are typically founded by entrepreneurs who seek to create and scale a unique product or service under conditions of uncertainty (Ries, 2011). However, not all startups succeed—many face significant challenges along their journey.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Definition and Characteristics of Startups</h2>
        <p className="mb-4">
          A <strong>startup</strong> is a newly established business designed to develop and scale a <strong>novel product, service, or business model</strong> (Blank & Dorf, 2012). Unlike traditional businesses, startups operate in highly uncertain environments and focus on rapid growth.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics of Startups</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Innovation:</strong> Startups often introduce new technologies, products, or business models (Osterwalder & Pigneur, 2010)</li>
          <li><strong>Scalability:</strong> They are designed to grow quickly, often with a <strong>global</strong> market in mind (Eisenmann et al., 2012)</li>
          <li><strong>Flexibility:</strong> Unlike large corporations, startups adapt quickly to <strong>market changes</strong> and customer feedback (Ries, 2011)</li>
          <li><strong>High Risk:</strong> Many startups fail due to <strong>financial constraints, market competition, or operational challenges</strong> (Gompers et al., 2020)</li>
          <li><strong>Investment-Driven:</strong> Startups rely on <strong>venture capital, angel investors, or crowdfunding</strong> for funding (Mason & Brown, 2014)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Different Types of Startups</h2>
        <p className="mb-4">Startups vary in their goals, structures, and industries. According to Blank (2013), startups can be categorized into six main types:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Lifestyle Startups:</strong> Small businesses created to support an entrepreneur&apos;s lifestyle, such as freelancers and consultants</li>
          <li><strong>Small Business Startups:</strong> Traditional businesses like local restaurants or retail stores, often family-run</li>
          <li><strong>Scalable Startups:</strong> High-growth startups that aim to become <strong>large companies</strong> (e.g., Google, Facebook)</li>
          <li><strong>Buyable Startups:</strong> Businesses developed with the intention of being <strong>acquired by larger companies</strong></li>
          <li><strong>Social Startups:</strong> Non-profit or mission-driven startups that focus on <strong>social impact</strong> rather than profit</li>
          <li><strong>Corporate Startups:</strong> New ventures launched within large corporations to <strong>explore innovation</strong></li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Key Success Factors for Startups</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Strong Value Proposition:</strong> Startups must solve a real problem and offer a product or service that customers need (Maurya, 2012)</li>
          <li><strong>Customer Focus:</strong> Understanding and responding to customer needs is essential (Ries, 2011)</li>
          <li><strong>Agile Mindset:</strong> Startups that quickly adapt to market feedback tend to succeed (Blank, 2013)</li>
          <li><strong>Funding & Financial Management:</strong> Access to capital and <strong>efficient financial planning</strong> are crucial (Robb & Robinson, 2014)</li>
          <li><strong>Effective Leadership & Teamwork:</strong> A motivated and skilled team improves innovation and execution (Campbell et al., 2012)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Common Challenges Faced by Startups</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Financial Constraints:</strong> Many startups struggle to secure funding, leading to early failure (Gompers et al., 2020)</li>
          <li><strong>Market Uncertainty:</strong> Changes in consumer behavior or technology can disrupt a startup&apos;s business model (Aldrich & Ruef, 2018)</li>
          <li><strong>Talent Acquisition:</strong> Hiring skilled employees is a challenge for new companies with limited budgets (Mason & Brown, 2014)</li>
          <li><strong>Scalability Issues:</strong> Rapid growth without a solid foundation can lead to operational problems (Gans et al., 2018)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. The Startup Lifecycle</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Ideation Stage</h3>
        <p className="mb-4">
          The journey begins with an <strong>idea</strong>. Entrepreneurs identify a market need and brainstorm possible solutions (Osterwalder & Pigneur, 2010). This stage involves conducting <strong>market research</strong>, assessing feasibility, and refining the idea.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.2 Validation Stage</h3>
        <p className="mb-4">
          In this phase, startups test their concept by creating a <strong>Minimum Viable Product (MVP)</strong>—a simple version of the product that is tested with early customers (Ries, 2011). The goal is to gather feedback, refine the product, and validate demand.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.3 Startup Stage</h3>
        <p className="mb-4">
          Once the idea is validated, the startup focuses on building the <strong>business model</strong>, acquiring <strong>customers</strong>, and securing <strong>funding</strong> (Eisenmann et al., 2012). This stage is critical as it determines whether the company can achieve <strong>product-market fit</strong> (Maurya, 2012).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.4 Growth Stage</h3>
        <p className="mb-4">
          If the startup gains traction, it moves into the <strong>growth phase</strong>, where it scales its operations, increases customer acquisition, and expands into new markets (Mason & Brown, 2014). At this stage, companies seek additional funding and focus on <strong>brand building</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.5 Maturity Stage</h3>
        <p className="mb-4">
          A startup that survives the growth phase becomes an established business. It has a <strong>stable revenue model</strong>, strong market presence, and may consider going public through an <strong>Initial Public Offering (IPO)</strong> (Isenberg, 2010).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.6 Exit or Renewal Stage</h3>
        <p className="mb-4">
          At this final stage, startups either <strong>exit</strong> (through acquisition or IPO) or <strong>innovate</strong> to stay competitive (Gompers et al., 2020). Many startups fail before reaching this stage, but those that succeed often become <strong>industry leaders</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Aldrich, H. E., & Ruef, M. (2018). <em>Organizations Evolving</em>. Routledge.</p>
          <p>Blank, S. (2013). <em>The Startup Owner&apos;s Manual: The Step-by-Step Guide for Building a Great Company</em>. K&S Ranch.</p>
          <p>Campbell, B. A., Coff, R., & Kryscynski, D. (2012). &ldquo;Rethinking sustained competitive advantage from human capital.&rdquo; <em>Academy of Management Review</em>, 37(3), 376-395.</p>
          <p>Eisenmann, T., Ries, E., & Dillard, S. (2012). &ldquo;Hypothesis-driven entrepreneurship: The lean startup.&rdquo; <em>Harvard Business School Background Note 812-095</em>.</p>
          <p>Gans, J., Stern, S., & Wu, J. (2018). <em>Strategy for Startups</em>. Harvard Business Review Press.</p>
          <p>Gompers, P., Gornall, W., Kaplan, S. N., & Strebulaev, I. A. (2020). &ldquo;How do venture capitalists make decisions?&rdquo; <em>Journal of Financial Economics</em>, 135(1), 169-190.</p>
          <p>Isenberg, D. J. (2010). &ldquo;How to start an entrepreneurial revolution.&rdquo; <em>Harvard Business Review</em>, 88(6), 40-50.</p>
          <p>Maurya, A. (2012). <em>Running Lean: Iterate from Plan A to a Plan That Works</em>. O&apos;Reilly Media.</p>
          <p>Osterwalder, A., & Pigneur, Y. (2010). <em>Business Model Generation</em>. Wiley.</p>
          <p>Ries, E. (2011). <em>The Lean Startup</em>. Crown Business.</p>
        </div>
      </div>
    </div>
  );
}

IntroductionToStartups.propTypes = {
  isPreview: PropTypes.bool
};
