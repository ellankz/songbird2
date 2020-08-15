import React, { useState, useReducer, useLayoutEffect, useEffect } from 'react';
import './app.scss';
import Header from '../header';
import Question from '../question';
import Options from '../options';
import Details from '../details';
import NextLevel from '../next-level';
import { Container} from 'react-bootstrap';
import reducers from '../../reducers';
import BirdService from '../../services/bird-service';
const correctAnswerSound = require('../../audio/correctAnswer.mp3');
const incorrectAnswerSound = require('../../audio/incorrectAnswer.mp3');

const App = () => {
  const [selectedBird, setSelectedBird] = useState<null | number>(null);
  const [level, dispatchLevel] = useReducer(reducers.levelsReducer, 0);
  const [ guessed, setGuessed ] = useState<boolean>(false);
  const [ correctIndex, setCorrectIndex ] = useState<number | null>(null);
  const [audio] = useState({correct: new Audio(correctAnswerSound), incorrect: new Audio(incorrectAnswerSound)});
  

  const handleOptionSelect = (index: number) => {
    setSelectedBird(index);
    if (!guessed){
      if (index === correctIndex){
        setGuessed(true);
        playGuessedSound(true);
      } else {
        playGuessedSound(false);
      }
    }
  }

  const playGuessedSound = (guessed: boolean) => {
    if (guessed){
      audio.correct.currentTime = 0;
      audio.correct.play();
    } else {
      audio.incorrect.currentTime = 0;
      audio.incorrect.play();
    }
  }

  

  useEffect(() => {
    const secretNumber = Math.floor(Math.random() * Math.floor(5));
        setCorrectIndex(secretNumber);
    }, [level]);

  useLayoutEffect(() => {
    const birdService = new BirdService();
    if (correctIndex !== null){
      console.log(birdService.getBird(level, correctIndex).name);
    }
  }, [level, correctIndex]);

  return (
    <div className="App">
      <Container>
        <Header currentLevel={level} />
        <Question level={level} correctIndex={correctIndex} guessed={guessed} />
        <div className="main">
          <Options onOptionSelected={handleOptionSelect} currentLevel={level} guessed={guessed} correctIndex={correctIndex} />
          <Details selectedBird={selectedBird} currentLevel={level} />
        </div>
        <NextLevel changeLevel={dispatchLevel} guessed={guessed} />
      </Container>
    </div>
  );
}

export default App;
