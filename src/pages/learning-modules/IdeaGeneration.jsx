import PropTypes from 'prop-types';
import './IdeaGeneration.css';

export default function IdeaGeneration({ isPreview = false }) {
  const chapterData = {
    title: "Idea Generation & Validation",
    description: "Learn effective techniques for generating and validating business ideas",
    readTime: "20 min",
    thumbnail: "💡",
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
        <h1 className="text-2xl font-bold mb-6">Idea Generation & Validation</h1>
        
        <p className="mb-4">
          Developing a viable business idea is a fundamental step in entrepreneurship. However, not all ideas translate into successful ventures. Effective <strong>idea generation and validation</strong> processes help entrepreneurs refine their concepts, ensuring market fit and reducing risks.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Ideation Techniques</h2>
        <p className="mb-4">
          Generating innovative business ideas requires <strong>structured techniques</strong> that promote creativity and problem-solving. Several proven methods assist entrepreneurs in identifying viable business opportunities.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 SCAMPER Method</h3>
        <p className="mb-4">
          The SCAMPER technique is a structured brainstorming method designed to <strong>stimulate creativity</strong> by modifying existing products or services (Eberle, 1971). It includes the following steps:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Substitute:</strong> Replace components or processes to improve efficiency</li>
          <li><strong>Combine:</strong> Merge elements to create synergy and enhance value</li>
          <li><strong>Adapt:</strong> Modify existing solutions for new applications</li>
          <li><strong>Modify:</strong> Alter aspects to improve performance and appeal</li>
          <li><strong>Put to another use:</strong> Repurpose products or services for different markets</li>
          <li><strong>Eliminate:</strong> Remove unnecessary features to streamline usability</li>
          <li><strong>Reverse:</strong> Reorder processes to discover new efficiencies</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: SCAMPER Method</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/BVJCu55hJ6U"
            title="Brainstorming 101: The SCAMPER Method"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://www.adb.org/sites/default/files/publication/27643/scamper-technique.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            The SCAMPER Technique - Asian Development Bank (PDF)
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.2 Blue Ocean Strategy</h3>
        <p className="mb-4">
          The Blue Ocean Strategy focuses on <strong>creating uncontested market spaces</strong> rather than competing in saturated markets (Kim & Mauborgne, 2005). The approach involves:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Identifying non-customers:</strong> Understanding untapped market segments</li>
          <li><strong>Eliminating and reducing:</strong> Removing industry factors that provide little value</li>
          <li><strong>Raising and creating:</strong> Enhancing key elements that customers prioritize</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Blue Ocean Strategy</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/ioceYLt-ho0"
            title="Blue Ocean Strategy (Detailed Animated Summary)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://www.blueoceanstrategy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Blue Ocean Strategy PDF
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.3 Mind Mapping</h3>
        <p className="mb-4">
          Mind mapping is a visual ideation technique that organizes thoughts around a central theme, helping entrepreneurs explore multiple perspectives (Buzan, 2010).
        </p>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Mind Mapping</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/wLWV0XN7K1g"
            title="How to Make a Mind Map - The Basics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://www.novanorth.org/wp/wp-content/uploads/2013/01/Brainstorming-techniques-combined.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Mind Mapping Techniques - Academic Research (PDF)
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.4 Design Thinking</h3>
        <p className="mb-4">
          Design Thinking is a <strong>human-centered innovation framework</strong> that promotes problem-solving through iteration (Brown, 2009). The process consists of:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Empathizing:</strong> Understanding user needs</li>
          <li><strong>Defining:</strong> Identifying the core problem</li>
          <li><strong>Ideating:</strong> Brainstorming creative solutions</li>
          <li><strong>Prototyping:</strong> Developing tangible models</li>
          <li><strong>Testing:</strong> Evaluating solutions and refining designs</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Design Thinking</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/_WI3B54m6SU"
            title="An Introduction to Design Thinking"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://readings.design/PDF/Tim%20Brown,%20Design%20Thinking.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Design Thinking Research Paper
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Validation Frameworks</h2>
        <p className="mb-4">
          A structured validation framework ensures that business ideas are <strong>financially viable and market-ready</strong>. The following models facilitate <strong>systematic validation</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Lean Startup Methodology</h3>
        <p className="mb-4">
          The Lean Startup methodology emphasizes <strong>rapid iteration and customer feedback</strong> to refine business models (Ries, 2011). It follows the <strong>Build-Measure-Learn</strong> cycle:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Build:</strong> Develop a Minimum Viable Product (MVP)</li>
          <li><strong>Measure:</strong> Gather real-world user data</li>
          <li><strong>Learn:</strong> Adjust based on insights to improve product-market fit</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Lean Startup</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/fEvKo90qBns"
            title="The Lean Startup Methodology Explained"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://theleanstartup.com/principles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            The Lean Startup Methodology
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Business Model Canvas</h3>
        <p className="mb-4">
          The Business Model Canvas (BMC) provides a <strong>strategic framework</strong> for testing business ideas across nine dimensions (Osterwalder & Pigneur, 2010):
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Value Proposition</strong></li>
          <li><strong>Customer Segments</strong></li>
          <li><strong>Channels</strong></li>
          <li><strong>Customer Relationships</strong></li>
          <li><strong>Revenue Streams</strong></li>
          <li><strong>Key Resources</strong></li>
          <li><strong>Key Activities</strong></li>
          <li><strong>Key Partnerships</strong></li>
          <li><strong>Cost Structure</strong></li>
        </ul>

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
            href="https://www.strategyzer.com/library/the-business-model-canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Business Model Generation
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.3 Problem-Solution Fit & Product-Market Fit</h3>
        <p className="mb-4">
          Successful validation requires ensuring:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Problem-Solution Fit:</strong> The idea effectively addresses a real customer problem</li>
          <li><strong>Product-Market Fit:</strong> There is substantial demand for the solution in the target market (Blank, 2013)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Tools for Brainstorming</h2>
        <p className="mb-4">
          Leveraging digital tools enhances <strong>efficiency and collaboration</strong> during brainstorming sessions.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Online Collaboration Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Miro & MURAL:</strong> Digital whiteboards for real-time ideation</li>
          <li><strong>Trello & Asana:</strong> Task management platforms for organizing concepts</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Customer Validation Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Google Forms & Typeform:</strong> Platforms for conducting surveys</li>
          <li><strong>A/B Testing Tools:</strong> Compare different product versions to assess user preference</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.3 Data Analysis Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Google Analytics:</strong> Tracks user engagement and behavior</li>
          <li><strong>SEMrush & Ahrefs:</strong> Provides insights into market trends and search demand</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Blank, S. (2013). <em>The Startup Owner&apos;s Manual: The Step-by-Step Guide for Building a Great Company</em>. K&S Ranch.</p>
          <p>Brown, T. (2009). <em>Change by Design: How Design Thinking Creates New Alternatives for Business and Society</em>. Harper Business.</p>
          <p>Buzan, T. (2010). <em>Mind Maps for Business: Revolutionize Your Business Thinking and Practice</em>. BBC Active.</p>
          <p>Eberle, B. (1971). <em>SCAMPER: Games for Imagination Development</em>. D.O.K. Publishers.</p>
          <p>Kim, W. C., & Mauborgne, R. (2005). <em>Blue Ocean Strategy: How to Create Uncontested Market Space and Make Competition Irrelevant</em>. Harvard Business Review Press.</p>
          <p>Osterwalder, A., & Pigneur, Y. (2010). <em>Business Model Generation</em>. Wiley.</p>
          <p>Ries, E. (2011). <em>The Lean Startup</em>. Crown Business.</p>
        </div>
      </div>
    </div>
  );
}
IdeaGeneration.propTypes = {
  isPreview: PropTypes.bool
};
