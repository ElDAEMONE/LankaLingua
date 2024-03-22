import React from "react";
import ResponsiveAppBar from "../components/Translator/topBar";
import HistoryBar from "../components/Translator/historyBar";
import TranslatingComp from "../components/Translator/TranslatingComp";

const Translator = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="flex flex-wrap gap-4">
        <HistoryBar />
        <TranslatingComp/>
      </div>
    </div>
  );
};

export default Translator;
