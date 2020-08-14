import React, { useState } from 'react';
import './app.scss';
import Header from '../header';
import Question from '../question';
import Options from '../options';
import Details from '../details';
import NextLevel from '../next-level';
import { Container} from 'react-bootstrap';

const App = () => {
  const [selectedBird, setSelectedBird] = useState<null | number>(null);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const handleOptionSelect = (index: number) => {
    setSelectedBird(index);
  }
  return (
    <div className="App">
      <Container>
        <Header currentLevel={currentLevel} />
        <Question />
        <div className="main">
          <Options onOptionSelected={handleOptionSelect} currentLevel={currentLevel} />
          <Details selectedBird={selectedBird} currentLevel={currentLevel} />
        </div>
        <NextLevel />
      </Container>
    </div>
  );
}

export default App;
