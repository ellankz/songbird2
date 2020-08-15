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

const App = () => {
  const [selectedBird, setSelectedBird] = useState<null | number>(null);
  const [level, dispatchLevel] = useReducer(reducers.levelsReducer, 0);
  const [ guessed, setGuessed ] = useState<boolean>(false);
  const [ correctIndex, setCorrectIndex ] = useState<number | null>(null);
  

  const handleOptionSelect = (index: number) => {
    setSelectedBird(index);
    if (index === correctIndex){
      setGuessed(true);
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
        <Question />
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
