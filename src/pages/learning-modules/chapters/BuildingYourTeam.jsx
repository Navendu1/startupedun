import PropTypes from 'prop-types';

export default function BuildingYourTeam({ isPreview = false }) {
  const chapterData = {
    title: "Building Your Team",
    description: "Team composition and hiring strategies",
    readTime: "15 min",
    thumbnail: "👥",
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
        <h1 className="text-2xl font-bold mb-6">Building Your Team: Strategies for Startup Success</h1>
        
        <p className="mb-4">
          A startup&apos;s success depends not only on a great idea but also on a <strong>strong, well-structured team</strong>. The right team brings <strong>expertise, innovation, and resilience</strong>, enabling a company to grow and overcome challenges (Teece, 2010). This section explores key areas in building and managing a high-performing startup team, including <strong>core team roles, hiring best practices, company culture, equity distribution, and team management</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Core Team Roles</h2>
        <p className="mb-4">
          A startup&apos;s early team members <strong>set the foundation</strong> for its long-term success. While every startup has unique needs, most require a <strong>core team</strong> with key roles (Wasserman, 2012).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Founding Team</h3>
        <p className="mb-4">
          The founding team shapes the startup&apos;s <strong>vision, strategy, and culture</strong>. Key roles include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Chief Executive Officer (CEO):</strong> Leads the company, makes strategic decisions, and secures funding (Teece, 2010)</li>
          <li><strong>Chief Operating Officer (COO):</strong> Manages daily operations and ensures efficiency</li>
          <li><strong>Chief Technology Officer (CTO):</strong> Oversees product development and technology strategy</li>
          <li><strong>Chief Marketing Officer (CMO):</strong> Handles branding, marketing, and customer acquisition</li>
          <li><strong>Chief Financial Officer (CFO):</strong> Manages budgeting, fundraising, and financial strategy</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.2 Early Employees</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Product Developers/Engineers:</strong> Build and refine the product or service (Blank, 2013)</li>
          <li><strong>Sales and Business Development Managers:</strong> Generate revenue and build client relationships</li>
          <li><strong>Customer Support Specialists:</strong> Enhance user experience and retention</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Hiring Best Practices</h2>
        <p className="mb-4">
          Hiring the right team members is crucial for <strong>startup success</strong>. Unlike large corporations, startups must be selective in choosing individuals who can <strong>wear multiple hats, adapt quickly, and work in uncertain environments</strong> (Wasserman, 2012).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Defining Job Roles and Expectations</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Create <strong>clear job descriptions</strong> aligned with the company&apos;s goals</li>
          <li>Focus on hiring candidates with <strong>problem-solving skills, adaptability, and a startup mindset</strong> (Blank, 2013)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Recruiting Strategies</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Use <strong>personal networks</strong> and referrals to find reliable candidates</li>
          <li>Leverage <strong>online hiring platforms</strong> (LinkedIn, AngelList) to reach a broader talent pool</li>
          <li>Offer <strong>competitive benefits and growth opportunities</strong> to attract top talent</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Company Culture</h2>
        <p className="mb-4">
          A <strong>strong company culture</strong> fosters collaboration, productivity, and employee satisfaction. Startups with a positive work environment are more likely to <strong>retain top talent and achieve long-term success</strong> (Schein, 2017).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Elements of a Strong Startup Culture</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Shared Vision and Values:</strong> Employees should align with the company&apos;s mission and goals</li>
          <li><strong>Transparency and Open Communication:</strong> Encourages trust and teamwork (Wasserman, 2012)</li>
          <li><strong>Flexibility and Innovation:</strong> A startup culture should promote <strong>creativity and adaptability</strong></li>
          <li><strong>Diversity and Inclusion:</strong> Encourages varied perspectives, improving decision-making and problem-solving (Schein, 2017)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Equity Distribution</h2>
        <p className="mb-4">
          Since startups may have limited financial resources, they often use <strong>equity compensation</strong> to attract and retain talent. However, <strong>fair and strategic equity distribution</strong> is essential for preventing disputes and maintaining long-term commitment (Felix & Pires, 2019).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Equity Distribution Models</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Founder Equity Split:</strong> Should be based on contribution, risk, and long-term involvement</li>
          <li><strong>Employee Stock Option Plans (ESOPs):</strong> Allow employees to own shares, incentivizing long-term loyalty (Wasserman, 2012)</li>
          <li><strong>Advisor Equity:</strong> Early advisors may receive <strong>0.1% to 2% equity</strong> based on contributions (Felix & Pires, 2019)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Team Management Basics</h2>
        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Leadership Strategies</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Set Clear Goals and Expectations:</strong> Define team objectives and align them with business strategy</li>
          <li><strong>Encourage Collaboration:</strong> Foster teamwork through regular meetings and open communication</li>
          <li><strong>Provide Constructive Feedback:</strong> Help employees grow through continuous performance reviews (Schein, 2017)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.2 Remote Team Management</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Use collaboration tools like <strong>Slack, Zoom, and Asana</strong> for communication</li>
          <li>Foster a <strong>remote-friendly culture</strong> by maintaining regular virtual check-ins</li>
          <li>Measure <strong>performance based on outcomes</strong> rather than hours worked (Felix & Pires, 2019)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Conclusion</h2>
        <p className="mb-6">
          Building and managing a <strong>strong startup team</strong> is one of the most important factors for long-term success. Entrepreneurs must focus on <strong>team composition, hiring strategies, company culture, equity distribution, and effective management</strong> to create a high-performing team. By following best practices in these areas, startups can <strong>attract, retain, and develop top talent</strong>, driving innovation and <strong>sustainable growth</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Blank, S. (2013). <em>The Startup Owner&apos;s Manual: The Step-by-Step Guide for Building a Great Company</em>. K&S Ranch.</p>
          <p>Felix, C., & Pires, C. (2019). &ldquo;Equity Allocation in Startups: A Decision Framework.&rdquo; <em>Journal of Entrepreneurship Research</em>, 28(3), 221-240.</p>
          <p>Schein, E. H. (2017). <em>Organizational Culture and Leadership</em> (5th ed.). Wiley.</p>
          <p>Teece, D. J. (2010). &ldquo;Business models, business strategy and innovation.&rdquo; <em>Long Range Planning</em>, 43(2-3), 172-194.</p>
          <p>Wasserman, N. (2012). <em>The Founder&apos;s Dilemmas: Anticipating and Avoiding the Pitfalls That Can Sink a Startup</em>. Princeton University Press.</p>
        </div>
      </div>
    </div>
  );
}

BuildingYourTeam.propTypes = {
  isPreview: PropTypes.bool
};
