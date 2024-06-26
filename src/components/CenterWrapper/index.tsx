import React, { act, useState } from "react";
import styles from "./CenterWrapper.module.scss";
import Button from "../Button";

const CenterWrapper = ({
  setScore,
  isCard,
  setIsCard,
  activeIndex,
  setActiveIndex,
  setError,
}) => {
  const [diceNumber, setDiceNumber] = useState(1);
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleUpdateScore = () => {
    if (activeIndex === 0) {
      setError(true);
    } else {
      const newDiceNumber = getRandomNumber(1, 7); // Generate the new dice number
      setDiceNumber(newDiceNumber); // Update the state with the new dice number
      console.log("Before:", activeIndex, newDiceNumber);

      if (activeIndex === newDiceNumber) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setScore((prevScore) => prevScore - 1);
      }

      console.log("After:", activeIndex, newDiceNumber);
    }
  };

  const handleResetScore = () => {
    setScore(0);
    setActiveIndex(0);
    setDiceNumber(1);
  };

  return (
    <div className={styles.centerWrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.dice} onClick={handleUpdateScore}>
          <img
            src={`/dice_${diceNumber}.svg`}
            alt="dice"
            height={250}
            width={250}
          />
        </div>
        Click on Dice to roll
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.button} onClick={handleResetScore}>
          Reset Score
        </Button>
        <Button className={styles.button} onClick={() => setIsCard(!isCard)}>
          Show Rules
        </Button>
      </div>
    </div>
  );
};

export default CenterWrapper;
