import axios from 'axios';

export const fetchPhrases = async (language, query) => {
  try {
    const response = await axios.get(`http://localhost:8080/https://tatoeba.org/en/api_v0/search?from=${language}&query=%3D${query}`);
    console.log('API Response:', response); // Log the API response

    if (response.data && response.data.results) {
      return response.data.results.map(sentence => sentence.text);
    } else {
      console.error('Unexpected API response format:', response);
      return [];
    }
  } catch (error) {
    console.error('Error fetching sentences:', error);
    return [];
  }
};

export default fetchPhrases;
