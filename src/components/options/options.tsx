import React, { useEffect, useState } from 'react';
import BirdService from '../../services/bird-service';
import { BirdInterface } from '../../models/bird';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import './options.scss';

interface OptionsProps {
    onOptionSelected: (index: number) => void,
    currentLevel: number
}

const Options = (props : OptionsProps) => {
    const { onOptionSelected, currentLevel } = props;
    const birdService = new BirdService();
    const [birds, setBirds] = useState<Array<BirdInterface>>([]);
    const [level, setLevel] = useState<number | null>(null);
    const [currentBird, setCurrentBird] = useState<number | null>(null);
    
    useEffect(() => {
        if (level !== null){
            setBirds(birdService.getBirdsByLevel(level));
        }
    }, [birdService, level]);

    useEffect(() => {
        setLevel(currentLevel);
    }, [currentLevel])

    useEffect(() => {
        if (currentBird !== null) onOptionSelected(currentBird);
    }, [currentBird, onOptionSelected]);

    return (
        <Jumbotron className="options">
            <ListGroup>
                {birds.map((bird: BirdInterface, index: number) => {
                    return (
                        <ListGroup.Item 
                            key={bird.id}
                            onClick={() => setCurrentBird(index)}>
                                {bird.name}       
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </Jumbotron>
    );
}

export default Options;