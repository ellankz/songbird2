import React, { useEffect, useReducer } from 'react';
import { BirdInterface } from '../../models/bird';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import { NewOptionsDispatch, HighlightOptionDispatch } from '../../actions';
import { initialHighlights } from '../../constants';
import reducers from '../../reducers';
import './options.scss';

interface OptionsProps {
    onOptionSelected: (index: number) => void,
    currentLevel: number,
    guessed: boolean,
    correctIndex: number | null
}

const Options = (props : OptionsProps) => {
    const { onOptionSelected, currentLevel, guessed, correctIndex } = props;
    const [birds, dispatchBirds] = useReducer(reducers.optionsReducer, []);
    const [birdsHighlights, dispatchBirdsHighlight] = useReducer(reducers.highlightsReducer, initialHighlights)
    
    useEffect(() => {
        if (currentLevel !== null){
            dispatchBirds(NewOptionsDispatch(currentLevel));
        }
    }, [currentLevel]);

    const handleOptionCLick = (index: number) => {
        onOptionSelected(index); // pass event to app
        if (correctIndex !== null){
            console.log('5');
            dispatchBirdsHighlight(HighlightOptionDispatch(index, guessed, correctIndex)); // highlight the correct and incorrect answer
        }
    }

    return (
        <Jumbotron className="options">
            <ListGroup>
                {birds.map((bird: BirdInterface, index: number) => {
                    return (
                        <ListGroup.Item 
                            key={bird.id}
                            className={birdsHighlights[index].color}
                            onClick={() => handleOptionCLick(index)}>
                                {bird.name}       
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </Jumbotron>
    );
}

export default Options;