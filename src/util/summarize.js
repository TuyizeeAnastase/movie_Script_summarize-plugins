// Import required libraries
import dotenv from "dotenv";
const { Configuration, OpenAIApi } = require("openai");
dotenv.config();
// Initialize OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);


// Summarize a movie script using ChatGPT
async function summarizeMovieScript(script) {
    const prompt = `Summarize the following movie script:\n\n${script}`;
    
    try {
      // Generate summary using ChatGPT
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
      });
  
      // Extract and return the summary from the response
      const summary = response.data.choices[0].text.trim();
      return summary;
    } catch (error) {
      console.error('Failed to summarize movie script:', error);
      throw error;
    }
  }

export default summarizeMovieScript;  