const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");

const key = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
    apiKey: key,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());


app.post('/translate', async (req, res) => {
  const { text, targetLanguage } = req.body;
  const prompt = `Translate the following English text to ${targetLanguage}: "${text}"`;

  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 1,
    });

    res.json({ translatedText: response.choices[0].text.trim() });
  } catch (error) {
    console.error('Error translating text:', error);
    res.status(500).json({ error: 'Failed to translate text' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
