export default function LearningModulesSection() {
  return (
    <section className="learning-modules-section text-foreground">
      <h2 className="text-2xl font-bold">Learning Modules</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="module-card bg-background p-4 rounded-lg shadow">
          <h3 className="font-semibold">Idea Validation</h3>
          <p>Learn how to test and validate your business ideas</p>
        </div>
        <div className="module-card bg-background p-4 rounded-lg shadow">
          <h3 className="font-semibold">Product Development</h3>
          <p>Understand the process of building your product</p>
        </div>
        <div className="module-card bg-background p-4 rounded-lg shadow">
          <h3 className="font-semibold">Market Research</h3>
          <p>Discover how to analyze your target market</p>
        </div>
        <div className="module-card bg-background p-4 rounded-lg shadow">
          <h3 className="font-semibold">Pitching to Investors</h3>
          <p>Master the art of creating compelling pitches</p>
        </div>
      </div>
    </section>
  );
}
