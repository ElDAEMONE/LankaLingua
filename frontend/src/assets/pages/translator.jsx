// import React from "react";
// import ResponsiveAppBar from "../components/Translator/topBar";
// import HistoryBar from "../components/Translator/historyBar";
// import TranslatingComp from "../components/Translator/TranslatingComp";

// const Translator = () => {
//   const [editingTranslation, setEditingTranslation] = useState(false);
//   const [selectedTranslation, setSelectedTranslation] = useState(null);

//   return (
//     <div style={{fontFamily:'Nunito'}}>
//       <div className="flex flex-wrap gap-4">
//         <HistoryBar />
//         <TranslatingComp/>
//       </div>
//     </div>
//   );
// };

// export default Translator;

import React, { useState, useEffect } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import axios from 'axios';
import TranslatingComp from "../components/Translator/TranslatingComp";
import HistoryBar from "../components/Translator/historyBar";

const Translator = () => {
  const [editingTranslation, setEditingTranslation] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState(null);
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    fetchTranslations();
  }, []);

  const fetchTranslations = async () => {
    try {
      const response = await axios.get('http://localhost:3001/translations');
      setTranslations(response.data);
    } catch (error) {
      console.error('Error fetching translations:', error);
    }
  };

  const handleSetSelectedTranslation = (translation) => {
    setSelectedTranslation(translation);
    setEditingTranslation(true);
  };

  return (
    <div style={{ fontFamily: 'Nunito' }}>
      <div className="flex flex-wrap gap-4">
        <HistoryBar 
          setEditingTranslation={setEditingTranslation} 
          setSelectedTranslation={handleSetSelectedTranslation} 
        />
        {/* Always render TranslatingComp */}
        <TranslatingComp translation={selectedTranslation} />
      </div>
    </div>
  );
};

export default Translator;
