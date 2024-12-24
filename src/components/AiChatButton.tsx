import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const AiChatButton = () => {
  const handleChatOpen = () => {
    // TODO: Implement chat functionality
    console.log("Opening chat with iCanna AI");
  };

  return (
    <Button
      onClick={handleChatOpen}
      className="fixed bottom-20 right-6 z-50 rounded-full w-14 h-14 p-0 bg-primary hover:bg-primary-hover shadow-lg animate-bounce"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Chat with iCanna AI</span>
    </Button>
  );
};

export default AiChatButton;