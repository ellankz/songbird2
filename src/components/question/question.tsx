import React, { useState, useEffect } from 'react';
import BirdService from '../../services/bird-service';
import { BirdInterface } from '../../models/bird';
import { Jumbotron } from 'react-bootstrap';
import SoundPlayer from '../sound-player';
import unknownBird from '../../images/bird.jpg';
import './question.scss';

const Question = () => {
    const [bird, setBird] = useState<BirdInterface>({
        image: '',
        name: '',
        audio: '',
        id: null,
        description: '',
        species: ''
    });

    const [revealed, setRevealed] = useState<boolean>(false);

    const birdService = new BirdService();

    const updateBird = () => {
        const receivedBird: BirdInterface = birdService.getBird(3, 2);
        setBird(receivedBird);
    }

    useEffect(() => {
        updateBird();
        setRevealed(true);
    }, []);
    
    return (
        <Jumbotron className="question">
            <img src={revealed ? bird.image : unknownBird} alt={revealed ? bird.name : 'unknown bird'} />
            <div>
                <h3>{revealed ? bird.name : '*******'}</h3>
                <hr />
                <SoundPlayer sound={bird.audio} />
            </div>
        </Jumbotron>
    );
}

export default Question;