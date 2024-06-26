import React, { useState } from "react";
import styles from "./GamePage.module.scss";
import TopWrapper from "../../components/TopWrapper/TopWrapper";
import CenterWrapper from "../../components/CenterWrapper";
import RuleCard from "../../components/RuleCard/RuleCard";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [isCard, setIsCard] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(false);
  return (
    <>
      <TopWrapper
        score={score}
        setScore={setScore}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        error={error}
        setError={setError}
      />
      <CenterWrapper
        score={score}
        setScore={setScore}
        isCard={isCard}
        setIsCard={setIsCard}
        activeIndex={activeIndex}
        error={error}
        setError={setError}
        setActiveIndex={setActiveIndex}
      />
      {isCard && <RuleCard />}
    </>
  );
};

export default GamePage;
