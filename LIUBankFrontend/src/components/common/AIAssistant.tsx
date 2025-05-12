import React, { useState } from 'react';
import { MessageSquare, Send, Loader } from 'lucide-react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { generateBankingAssistantResponse } from '../../services/openai';
import Button from './Button';
import { Input } from './Input';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await generateBankingAssistantResponse(message);
      setResponse(aiResponse);
      setMessage('');
    } catch (err) {
      setError('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="primary"
          className="rounded-full p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-4 bg-blue-600 text-white">
              <h3 className="text-lg font-semibold">LIU Bank Assistant</h3>
              <p className="text-sm text-blue-100">Ask me anything about banking</p>
            </div>

            <div className="p-4 h-80 overflow-y-auto bg-gray-50">
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg">
                  {error}
                </div>
              )}

              {response && (
                <div className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-700">{response}</p>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center justify-center p-4">
                  <Loader className="h-6 w-6 animate-spin text-blue-600" />
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Type your question..."
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                  className="flex-shrink-0"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </LazyMotion>
  );
};

export default AIAssistant;