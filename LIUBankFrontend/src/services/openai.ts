import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateBankingAssistantResponse = async (userMessage: string) => {
  try {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: 'You are a helpful banking assistant for LIU Bank. You can help with general banking queries, product information, and financial advice. Keep responses professional, concise, and focused on banking-related topics.'
      },
      {
        role: 'user',
        content: userMessage
      }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 150
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
};