// import React, { useState } from "react";
// import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

// const TranslatingComp = () => {
//   const [inputText, setInputText] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [fromLanguage, setFromLanguage] = useState("Sinhala");
//   const [toLanguage, setToLanguage] = useState("English");

//   const handleTranslation = () => {
//     // Perform translation logic here
//     // You can use APIs like Google Translate API or any other translation service

//     // For demonstration purposes, let's just reverse the input text as an example translation
//     const reversedText = inputText.split("").reverse().join("");
//     setTranslatedText(reversedText);
//   };

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleLanguageSwitch = () => {
//     // Swap the from and to languages
//     const tempLanguage = fromLanguage;
//     setFromLanguage(toLanguage);
//     setToLanguage(tempLanguage);

//     // Clear translated text when switching languages
//     setTranslatedText("");
//   };

//   return (
//     <div className="mx-auto my-auto text-center">
      
//       <p className="text-gray-600 mb-5 font-semibold">{`Translating from ${fromLanguage} to ${toLanguage}`}</p>
//       <div className="flex flex-wrap gap-5">
//         <div className="mb-4">
//           <textarea
//             className=" w-96 h-60 p-2 border border-gray-300 rounded"
//             placeholder={`Enter text in ${fromLanguage}`}
//             value={inputText}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>

//         <button
//         className="px-4 py-2 h-60 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={handleLanguageSwitch}
//       >
//         <CompareArrowsIcon />
//       </button>

//         <div className="mb-4">
//           <textarea
//             className=" w-96 h-60 p-2 border border-gray-300 rounded"
//             placeholder={`Translation will appear here in ${toLanguage}`}
//             value={translatedText}
//             readOnly
//           ></textarea>
//         </div>
//       </div>
//       <div className="flex items-center justify-between mb-4"></div>
//       <button
//         className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         onClick={handleTranslation}
//       >
//         Translate
//       </button>
//     </div>
//   );
// };

// export default TranslatingComp;


import React, { useState, useEffect } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import axios from 'axios';

const TranslatingComp = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLanguage, setFromLanguage] = useState("Sinhala");
  const [toLanguage, setToLanguage] = useState("English");
  const [translationHistory, setTranslationHistory] = useState([]);

  useEffect(() => {
    const translateText = async () => {
      try {
        const response = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          null,
          {
            params: {
              q: inputText,
              source: fromLanguage === 'Sinhala' ? 'si' : 'en', // Source language code
              target: toLanguage === 'Sinhala' ? 'si' : 'en', // Target language code
              format: 'text',
              key: 'AIzaSyBABD6Gikz_pRWe4i4zWpxfIwiWLdvR0zA', // Replace with your Google Translate API key
            },
          }
        );

        const translatedText = response.data.data.translations[0].translatedText;
        setTranslatedText(translatedText);
      } catch (error) {
        console.error('Error translating:', error);
      }
    };

    if (inputText.trim() !== "") {
      translateText();
    } else {
      setTranslatedText("");
    }
  }, [inputText, fromLanguage, toLanguage]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleLanguageSwitch = () => {
    const tempLanguage = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(tempLanguage);
    setTranslatedText("");
  };

  const handleTranslation = async () => {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        null,
        {
          params: {
            q: inputText,
            source: fromLanguage === 'Sinhala' ? 'si' : 'en',
            target: toLanguage === 'Sinhala' ? 'si' : 'en',
            format: 'text',
            key: 'AIzaSyBABD6Gikz_pRWe4i4zWpxfIwiWLdvR0zA',
          },
        }
      );

      const translatedText = response.data.data.translations[0].translatedText;
      setTranslatedText(translatedText);

      // Save translation to history
      const title = inputText.split(' ').slice(0, 5).join(' ');
      const newTranslation = { title, translatedText };
      setTranslationHistory([...translationHistory, newTranslation]);

      await axios.post('http://localhost:3001/translations', newTranslation);
    } catch (error) {
      console.error('Error translating:', error);
    }
  };

  return (
    <div className="mx-auto my-auto text-center">
      <p className="text-gray-600 mb-5 font-semibold">{`Translating from ${fromLanguage} to ${toLanguage}`}</p>
      <div className="flex flex-wrap gap-5">
        <div className="mb-4">
          <textarea
            className="w-96 h-60 p-2 border border-gray-300 rounded"
            placeholder={`Enter text in ${fromLanguage}`}
            value={inputText}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          className="px-4 py-2 h-60 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleLanguageSwitch}
        >
          <CompareArrowsIcon />
        </button>
        <div className="mb-4">
          <textarea
            className="w-96 h-60 p-2 border border-gray-300 rounded"
            placeholder={`Translation will appear here in ${toLanguage}`}
            value={translatedText}
            readOnly
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4"></div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={handleTranslation}
      >
        SAVE HISTORY
      </button>
      <div>
        {/* <h2 className="text-gray-600 font-semibold">Translation History:</h2> */}
        <ul>
          {translationHistory.map((item, index) => (
            <li key={index}>{`${item.title}: ${item.translatedText}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TranslatingComp;

