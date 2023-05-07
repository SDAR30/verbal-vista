import React from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onLanguageSelect }) => {
    return (
        <select value={selectedLanguage} onChange={(e) => onLanguageSelect(e.target.value)}>
            <option value="" defaultValue disabled>Select a language</option>
            {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
            ))}
        </select>
    );
};

export default LanguageSelector;

