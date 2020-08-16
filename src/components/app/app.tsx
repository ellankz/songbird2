import React, { useState, useLayoutEffect } from 'react';
import './app.scss';
import Header from '../header';
import Question from '../question';
import Options from '../options';
import Details from '../details';
import NextLevel from '../next-level';
import EndGame from '../end-game';
import { Container} from 'react-bootstrap';
import BirdService from '../../services/bird-service';
const correctAnswerSound = require('../../audio/correctAnswer.mp3');
const incorrectAnswerSound = require('../../audio/incorrectAnswer.mp3');

const App = () => {
  const [ selectedBird, setSelectedBird ] = useState<null | number>(null);
  const [ level, setLevel ] = useState(0);
  const [ guessed, setGuessed ] = useState<boolean>(false);
  const [ correctIndex, setCorrectIndex ] = useState<number | null>(null);
  const [ audio ] = useState({correct: new Audio(correctAnswerSound), incorrect: new Audio(incorrectAnswerSound)});
  const [ score, setScore ] = useState<number>(0);
  const [ levelScore, setLevelScore ] = useState<number>(5);
  const [ endGame, setEndGame ] = useState(false);
  

  const handleOptionSelect = (index: number, newlyOpened: boolean) => {
    setSelectedBird(index);
    if (!guessed && newlyOpened){
      if (index === correctIndex){
        setGuessed(true);
        playGuessedSound(true);
        setScore(score + levelScore);
      } else {
        playGuessedSound(false);
        setLevelScore(levelScore - 1);
      }
    }
  }

  const handleNextLevelClick = () => {
    if (level < 5) {
      setLevel(level + 1);
      setGuessed(false);
      setLevelScore(5);
    } else {
      setEndGame(true);
    }
  }

  const handleStartOver = () => {
    setLevel(0);
    setSelectedBird(null);
    setGuessed(false);
    setScore(0);
    setLevelScore(5);
    setEndGame(false);
  }

  const playGuessedSound = (guessed: boolean) => {
    if (guessed){
      audio.correct.currentTime = 0;
      audio.correct.volume = 0.5;
      audio.correct.play();
    } else {
      audio.incorrect.currentTime = 0;
      audio.incorrect.volume = 0.5;
      audio.incorrect.play();
    }
  }
  
  useLayoutEffect(() => {
    /// set correct answer
    const secretNumber = Math.floor(Math.random() * Math.floor(5));
    setCorrectIndex(secretNumber);

    /// log correct answer
    const birdService = new BirdService();
    if (secretNumber !== null){
      console.log('Correct answer:', birdService.getBird(level, secretNumber).name);
    }
  }, [level]);

  const GameView = () => {
    return (
      <div className="App">
        <Container>
          <Header currentLevel={level} score={score} />
          <Question level={level} correctIndex={correctIndex} guessed={guessed} />
          <div className="main">
            <Options onOptionSelected={handleOptionSelect} currentLevel={level} guessed={guessed} correctIndex={correctIndex} />
            <Details selectedBird={selectedBird} currentLevel={level} />
          </div>
          <NextLevel changeLevel={handleNextLevelClick} guessed={guessed} />
        </Container>
      </div>
    );
  }

  const GameEndView = () => {
      return (
        <EndGame score={score} handleStartOver={handleStartOver} />
      );
  }

  if (endGame){
    return GameEndView();
  } else {
    return GameView();
  }
}

export default App;
