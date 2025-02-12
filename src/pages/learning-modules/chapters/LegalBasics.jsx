import PropTypes from 'prop-types';

export default function LegalBasics({ isPreview = false }) {
  const chapterData = {
    title: "Legal Basics",
    description: "Essential legal considerations for startups",
    readTime: "15 min",
    thumbnail: "⚖️",
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
        <h1 className="text-2xl font-bold mb-6">Legal Basics for Startups</h1>
        
        <p className="mb-4">
          Starting a business involves not only financial and operational planning but also legal considerations. <strong>Understanding the legal requirements</strong> ensures that startups operate within the law, protect their intellectual property, and avoid costly disputes (Bagley, 2017). This section explores key legal aspects for startups, including <strong>business structure selection, registration and licenses, intellectual property protection, basic contracts and agreements, and compliance requirements</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Business Structure Selection</h2>
        <p className="mb-4">
          Choosing the right <strong>business structure</strong> is one of the first legal steps in starting a company. The structure affects <strong>tax obligations, liability, and operational flexibility</strong> (Spadaccini, 2014).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Common Business Structures</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Sole Proprietorship</strong> – A single-owner business where the individual is personally liable for debts (Mancuso, 2017)</li>
          <li><strong>Partnership</strong> – A business owned by two or more individuals who share profits, losses, and liabilities</li>
          <li><strong>Limited Liability Company (LLC)</strong> – A flexible structure that combines aspects of partnerships and corporations while protecting owners from personal liability (Bagley, 2017)</li>
          <li><strong>Corporation (C-Corp or S-Corp)</strong> – A separate legal entity that limits owner liability but involves <strong>more complex taxation and regulation</strong> (Spadaccini, 2014)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Registration and Licenses</h2>
        <p className="mb-4">
          Startups must comply with <strong>legal registration requirements</strong> to operate legally. Failure to register properly can result in fines or business closure (Mancuso, 2017).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Business Registration Steps</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Register the Business Name:</strong> In most jurisdictions, businesses must register their name with a government authority (Bagley, 2017)</li>
          <li><strong>Obtain an Employer Identification Number (EIN):</strong> Required for tax purposes and hiring employees</li>
          <li><strong>Secure Necessary Business Licenses and Permits:</strong> These vary by industry and location (Spadaccini, 2014)</li>
        </ul>

        <p className="mb-2"><strong>Common Licenses and Permits:</strong></p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>General Business License:</strong> Required for most businesses</li>
          <li><strong>Industry-Specific Permits:</strong> E.g., food service permits for restaurants</li>
          <li><strong>Zoning Permits:</strong> Ensuring business operations comply with local zoning laws</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Intellectual Property Protection</h2>
        <p className="mb-4">
          Intellectual property (IP) is one of the most valuable assets of a startup. Protecting <strong>ideas, brands, and inventions</strong> ensures long-term competitiveness (Lemley, 2015).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Types of Intellectual Property</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Trademarks:</strong> Protect brand names, logos, and slogans (USPTO, 2020)</li>
          <li><strong>Patents:</strong> Grant exclusive rights to inventions for a set period (Lemley, 2015)</li>
          <li><strong>Copyrights:</strong> Protect original works like books, software, and music</li>
          <li><strong>Trade Secrets:</strong> Confidential business information, such as formulas or processes</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Steps for Protecting IP</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Register Trademarks and Patents:</strong> This prevents competitors from using similar branding or inventions (USPTO, 2020)</li>
          <li><strong>Use Non-Disclosure Agreements (NDAs):</strong> Helps protect confidential business ideas</li>
          <li><strong>Monitor and Enforce IP Rights:</strong> Take legal action if others infringe on intellectual property</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Basic Contracts and Agreements</h2>
        <p className="mb-4">
          Contracts are <strong>legally binding agreements</strong> that outline the rights and responsibilities of parties involved in a business transaction (Bagley, 2017).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Essential Startup Contracts</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Founder Agreement:</strong> Defines ownership, responsibilities, and decision-making processes among co-founders (Spadaccini, 2014)</li>
          <li><strong>Employment and Independent Contractor Agreements:</strong> Clearly outlines job roles, compensation, and confidentiality clauses (Mancuso, 2017)</li>
          <li><strong>Non-Disclosure Agreement (NDA):</strong> Ensures employees and partners do not disclose confidential business information (Lemley, 2015)</li>
          <li><strong>Service Agreements:</strong> Defines terms for providing services to customers or clients</li>
          <li><strong>Investor Agreements:</strong> Specifies terms for funding and equity distribution</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Compliance Requirements</h2>
        <p className="mb-4">
          Startups must comply with <strong>local, national, and international regulations</strong> to avoid legal penalties and business risks (Mancuso, 2017).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Common Compliance Areas</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Tax Compliance:</strong> Businesses must file <strong>state and federal taxes</strong> and maintain accurate financial records</li>
          <li><strong>Employment Laws:</strong> Startups must adhere to labor laws, including <strong>minimum wage, benefits, and anti-discrimination policies</strong> (Bagley, 2017)</li>
          <li><strong>Data Protection and Privacy Laws:</strong> Companies handling customer data must comply with laws like the <strong>GDPR</strong> in Europe and the <strong>CCPA</strong> in the U.S.</li>
          <li><strong>Consumer Protection Laws:</strong> Ensure fair business practices, such as transparent pricing and product safety</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Conclusion</h2>
        <p className="mb-6">
          Legal planning is a <strong>fundamental aspect</strong> of launching and running a startup. Entrepreneurs must carefully consider <strong>business structure, registration, intellectual property protection, contracts, and compliance requirements</strong> to operate successfully. By addressing these legal aspects early, startups can reduce risks, protect their assets, and <strong>position themselves for long-term success</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Bagley, C. E. (2017). <em>The Entrepreneur&apos;s Guide to Law and Strategy</em>. Cengage Learning.</p>
          <p>Lemley, M. A. (2015). <em>Intellectual Property in the New Technological Age</em>. Aspen Publishers.</p>
          <p>Mancuso, A. (2017). <em>LLC or Corporation? How to Choose the Right Form for Your Business</em>. Nolo.</p>
          <p>Spadaccini, M. (2014). <em>Business Structures: From Sole Proprietorship to C Corporation</em>. Entrepreneur Press.</p>
          <p>United States Patent and Trademark Office (USPTO). (2020). &ldquo;Trademark Basics.&rdquo; <em>USPTO.gov</em>.</p>
        </div>
      </div>
    </div>
  );
}

LegalBasics.propTypes = {
  isPreview: PropTypes.bool
};
