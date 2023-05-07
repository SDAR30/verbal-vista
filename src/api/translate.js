import axios from 'axios';

export const translate = async (text, targetLanguage) => {
  try {
    const response = await axios.post('http://localhost:5000/translate', {
      text,
      targetLanguage,
    });
    return response.data.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return null;
  }
};
