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


import React, { useState } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import axios from 'axios';

const TranslatingComp = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLanguage, setFromLanguage] = useState("Sinhala");
  const [toLanguage, setToLanguage] = useState("English");

  const handleTranslation = async () => {
    try {
      // Perform translation logic here
      // For demonstration purposes, let's just reverse the input text as an example translation
      const reversedText = inputText.split("").reverse().join("");
      setTranslatedText(reversedText);

      // Save translation to history
      const title = inputText.split(" ").slice(0, 5).join(" "); // Get first 5 words as title
      await axios.post('http://localhost:3001/translations', {
        title: title,
        translatedText: reversedText // Change to the actual translated text
      });
    } catch (error) {
      console.error('Error translating:', error);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleLanguageSwitch = () => {
    // Swap the from and to languages
    const tempLanguage = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(tempLanguage);

    // Clear translated text when switching languages
    setTranslatedText("");
  };

  return (
    <div className="mx-auto my-auto text-center">
      
      <p className="text-gray-600 mb-5 font-semibold">{`Translating from ${fromLanguage} to ${toLanguage}`}</p>
      <div className="flex flex-wrap gap-5">
        <div className="mb-4">
          <textarea
            className=" w-96 h-60 p-2 border border-gray-300 rounded"
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
            className=" w-96 h-60 p-2 border border-gray-300 rounded"
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
        Translate
      </button>
    </div>
  );
};

export default TranslatingComp;
