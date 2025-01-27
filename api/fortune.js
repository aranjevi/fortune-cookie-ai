import fetch from 'node-fetch';

// Set your OpenAI API Key (You should securely store this in environment variables)
const openaiApiKey = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, zodiac } = req.body;

        try {
            // Call OpenAI API to generate a fortune message
            const openaiResponse = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openaiApiKey}`,
                },
                body: JSON.stringify({
                    model: "text-davinci-003", // Use the latest available GPT model
                    prompt: `Generate a motivational fortune for someone named ${name}, born under the zodiac sign of ${zodiac}. The fortune should be positive, encouraging, and motivational.`,
                    max_tokens: 100, // Limit to 100 tokens for brevity
                    temperature: 0.7, // Adjust for creativity
                }),
            });

            const data = await openaiResponse.json();
            const fortuneMessage = data.choices[0].text.trim();

            res.status(200).json({ message: `${name}, your fortune is: ${fortuneMessage}` });

        } catch (error) {
            console.error('Error generating fortune:', error);
            res.status(500).json({ message: 'Sorry, something went wrong. Please try again.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
