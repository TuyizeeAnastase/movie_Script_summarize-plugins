// Extract characters from a movie script using ChatGPT
// Import required libraries
import dotenv from "dotenv";
const { Configuration, OpenAIApi } = require("openai");
dotenv.config();

// Initialize OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
async function extractCharacters(script) {
    const prompt = `Extract characters from the following movie script:\n\n${script}`;
  
    try {
      // Generate character extraction using ChatGPT
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
      });
  
      // Extract and return the character information from the response
      const characters = response.data.choices[0].text.trim();
      return characters;
    } catch (error) {
      console.error('Failed to extract characters from movie script:', error);
      throw error;
    }
  }

export default extractCharacters;  

  