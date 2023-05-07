import { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import PhraseDisplay from './components/PhraseDisplay';
import { fetchPhrases } from './api/tatoeba';
import { translate } from './api/translate';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [query, setQuery] = useState('');
  const [phrases, setPhrases] = useState([]);

  const getPhrases = async () => {
    const result = await fetchPhrases(selectedLanguage, query);
    setPhrases(result);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleButtonClick = async () => {
    if (selectedLanguage) {
      getPhrases();

      // Translate the phrases using OpenAI API
      const translatedPhrases = await Promise.all(
        phrases.map(async (phrase) => await translate(phrase, selectedLanguage))
      );
      setPhrases(translatedPhrases);
    } else {
      alert('Please select a language');
    }
  };

  return (
    <div>
      <LanguageSelector
        languages={['English', 'French', 'Spanish']}
        selectedLanguage={selectedLanguage}
        onLanguageSelect={setSelectedLanguage}
      />
      <input type="text" value={query} onChange={handleQueryChange} />
      <button onClick={handleButtonClick}>Search</button>
      <PhraseDisplay phrases={phrases} />
    </div>
  );
};

export default App;
