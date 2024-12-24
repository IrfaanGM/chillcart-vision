import { useState, useEffect } from "react";

const conversationStarters = [
  "Ask about our products?",
  "What strains are you interested in?",
  "Tell me about THC & CBD wellness?",
  "Looking for specific effects?",
  "Need help finding the right product?",
  "Want to learn about different consumption methods?",
  "Curious about our latest arrivals?",
  "Need dosage recommendations?"
];

const ConversationStarter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % conversationStarters.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-6 z-50 max-w-xs bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 animate-fade-in">
      <p className="text-sm text-primary font-medium">
        {conversationStarters[currentIndex]}
      </p>
    </div>
  );
};

export default ConversationStarter;