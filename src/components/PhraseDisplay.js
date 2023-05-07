import React from 'react';

const PhraseDisplay = ({ phrases }) => {
    return (
        <ul>
            {phrases.map((phrase, index) => (
                <li key={index}>{phrase}</li>
            ))}
        </ul>
    );
};

export default PhraseDisplay;
