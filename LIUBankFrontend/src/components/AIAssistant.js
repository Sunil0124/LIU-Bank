import React, { useState } from 'react';
import { chatAPI } from '../services/api';

const AIAssistant = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      setLoading(true);
      const { data } = await chatAPI.sendMessage(message);
      setResponse(data.response);
      setMessage('');
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
      <div className="p-4 bg-blue-600 text-white rounded-t-lg">
        <h3 className="text-lg font-semibold">AI Banking Assistant</h3>
      </div>
      
      <div className="p-4 h-64 overflow-y-auto bg-gray-50">
        {response && (
          <div className="mb-4 p-3 bg-white rounded shadow">
            <p className="text-gray-700">{response}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIAssistant;