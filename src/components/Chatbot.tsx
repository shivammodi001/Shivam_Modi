import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Shivam's AI assistant. I can answer questions about his education, projects, skills, certifications, and NGO work. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const botResponses: Record<string, string> = {
    'education': "Shivam is currently in his 3rd year pursuing B.Tech in Computer Science Engineering at Lovely Professional University (2023-present). He completed his Class 12th with 85% marks.",
    'projects': "Shivam has worked on several full-stack projects including web applications using React, Node.js, MongoDB, and various modern technologies. You can view his complete projects in the Projects section!",
    'skills': "Shivam is proficient in HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL, Python, C, C++, and modern web development technologies. Check out the Skills section for the complete list!",
    'certifications': "Shivam holds CEH V12 certification from Warlock Security and Coursera Broadband Internet certification. View all certificates in the Certifications section.",
    'ngo': "Shivam is actively involved in NGO work and social contribution, demonstrating his commitment to giving back to the community.",
    'contact': "You can reach Shivam through the Contact section where you'll find his email, LinkedIn, GitHub, and other social links.",
    'default': "I can help you learn about Shivam's education, projects, skills, certifications, NGO work, or contact information. What specific area interests you?"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('education') || message.includes('study') || message.includes('university')) {
      return botResponses.education;
    }
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return botResponses.projects;
    }
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return botResponses.skills;
    }
    if (message.includes('certificate') || message.includes('certification')) {
      return botResponses.certifications;
    }
    if (message.includes('ngo') || message.includes('social') || message.includes('contribution')) {
      return botResponses.ngo;
    }
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return botResponses.contact;
    }
    
    return botResponses.default;
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-glow bg-primary hover:bg-primary-hover hover:scale-110 transition-all duration-300"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-card border border-border rounded-xl shadow-strong animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-hero rounded-t-xl">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-white" />
              <h3 className="font-semibold text-white">Shivam's Assistant</h3>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 h-64 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[75%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                    {message.sender === 'user' ? 
                      <User className="h-3 w-3 text-white" /> : 
                      <Bot className="h-3 w-3 text-foreground" />
                    }
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary text-foreground'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Shivam..."
                className="flex-1"
              />
              <Button onClick={sendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;