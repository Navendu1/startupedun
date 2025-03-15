export default function QuickLinksSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="quick-links py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => scrollToSection('learning-modules')} 
            className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 min-h-[180px] flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">📚 Learning Resources</h3>
            <p className="text-gray-600 break-words">Access startup courses and learning materials</p>
          </button>

          <button 
            onClick={() => scrollToSection('interactive-tools')} 
            className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 min-h-[180px] flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">🛠️ Startup Tools</h3>
            <p className="text-gray-600 break-words">Tools for planning and growing your startup</p>
          </button>

          <button 
            onClick={() => scrollToSection('success-stories')} 
            className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 min-h-[180px] flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">⭐ Success Stories</h3>
            <p className="text-gray-600 break-words">Read inspiring startup success stories</p>
          </button>
        </div>
      </div>
    </section>
  );
}
