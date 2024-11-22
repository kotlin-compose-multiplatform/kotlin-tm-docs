import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardList from "./components/CardList";

interface CardData {
  title: string;
  link: string;
}

const App: React.FC = () => {
  const cardsData: CardData[] = [
    { title: "Kotlin iňlis dilinde", link: "https://kotlinlang.org" },
    { title: "Kotlin rus dilinde", link: "https://kotlinlang.ru" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList cards={cardsData} />} />
      </Routes>
    </Router>
  );
};

export default App;
