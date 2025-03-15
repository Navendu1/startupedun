import { useState } from 'react';
import AIGenStartupStories from './AIGenStartupStories';
import StartupStoriesVideo from './StartupStoriesVideo';
import EducationResources from './EducationResources';
import './success-stories.css';
import { Button } from "../../components/ui/button";

export default function SuccessStories() {
  const [activeSection, setActiveSection] = useState('ai');

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Success Stories</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 px-4">
        {[
          { id: 'ai', label: 'AI Success Stories' },
          { id: 'videos', label: 'Video Stories' },
          { id: 'education', label: 'Addiction Resources' }
        ].map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? 'default' : 'outline'}
            onClick={() => setActiveSection(section.id)}
            className="w-full sm:w-auto text-center"
          >
            {section.label}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
          <div className="tool-section">
            {activeSection === 'ai' && <AIGenStartupStories />}
            {activeSection === 'videos' && <StartupStoriesVideo />}
            {activeSection === 'education' && <EducationResources />}
          </div>
        </div>
      </div>
    </div>
  );
}
