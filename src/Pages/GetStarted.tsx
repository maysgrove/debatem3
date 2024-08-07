import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './GetStarted.css'; // Ensure to include the styles

interface GetStartedProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStarted: React.FC<GetStartedProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'welcome' | 'history' | 'howTo'>('welcome');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBack = () => setView('welcome');

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        onClick={handleClickOutside}
      >
        <div
          ref={modalRef}
          className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg relative w-full max-w-lg h-5/6 z-60 p-6 overflow-auto"
        >
          <button
            className="absolute top-2 right-2 text-gray-300"
            onClick={onClose}
          >
            &times;
          </button>

          {view === 'welcome' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Welcome to Debate.me</h2>
              <p className="mb-6">Get started by exploring the history of debating, understanding why we do what we do, and learning how to join or start a debate.</p>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-700 text-white py-2 px-4 rounded"
                  onClick={() => setView('history')}
                >
                  History of Debating
                </button>
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded"
                  onClick={() => setView('howTo')}
                >
                  How to Join/Start
                </button>
              </div>
            </div>
          )}

          {view === 'history' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 underline text-yellow-300">History of Debating</h2>
              <div className="ml-4">
                <p className="mb-4 indent-4">
                  <span className="font-semibold text-yellow-400">Ancient Greece:</span> The roots of formal debate can be traced back to ancient Greece, particularly in Athens around the 5th century BCE. Philosophers like Socrates, Plato, and Aristotle played significant roles in shaping the art of debate. Aristotle's work on rhetoric is foundational, emphasizing the importance of persuasion, argument structure, and logical reasoning.
                </p>
                <p className="mb-4 indent-4">
                  <span className="font-semibold text-yellow-400">Roman Era:</span> The Romans adopted and adapted Greek rhetorical practices. Figures like Cicero and Quintilian contributed significantly to the art of oratory, focusing on persuasive techniques and the effective delivery of arguments.
                </p>
                <p className="mb-4 indent-4">
                  <span className="font-semibold text-yellow-400">Medieval Period:</span> During the Middle Ages, debating continued within scholastic traditions. Medieval scholars engaged in debates on theological and philosophical issues, often using dialectical methods to explore and understand complex topics.
                </p>
                <p className="mb-4 indent-4">
                  <span className="font-semibold text-yellow-400">Renaissance and Enlightenment:</span> The Renaissance revived interest in classical rhetoric, and the Enlightenment period saw the rise of public debate as a means to discuss political and social issues. This period marked the beginning of more structured public debates, influencing the development of democratic institutions.
                </p>
                <p className="mb-4 indent-4">
                  <span className="font-semibold text-yellow-400">19th and 20th Centuries:</span> In the 19th and 20th centuries, formal debating became an established practice in educational institutions and public forums. The establishment of debate societies and competitions, such as the Lincoln-Douglas debates in the U.S., highlighted the role of debate in shaping public opinion and policy.
                </p>
                <p className="mb-4 indent-4">
                  <span className="font-semibold text-yellow-400">Modern Era:</span> Today, debate continues to be a vital aspect of public discourse, education, and media. Formats like parliamentary debate, policy debate, and competitive debate leagues reflect the ongoing evolution and importance of debate in various contexts.
                </p>
              </div>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          )}

          {view === 'howTo' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 underline text-yellow-300">How to Join/Start a Debate</h2>
              <p className="mb-6">Here’s how you can get involved:</p>
              {/* Add your content here */}
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default GetStarted;
