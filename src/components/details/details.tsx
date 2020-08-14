import React, { useState, useEffect } from 'react';
import BirdService from '../../services/bird-service';
import { BirdInterface } from '../../models/bird';
import SoundPlayer from '../sound-player';
import { Jumbotron } from 'react-bootstrap';
import './details.scss';

interface DetailsProps {
    selectedBird: number | null,
    currentLevel: number
}

const DetailsPlaceholder = () => (<p>Послушайте плеер.<br />Выберите птицу из списка</p>);

interface BirdDetailsProps {
    bird: BirdInterface | null
}

const BirdDetails = (props: BirdDetailsProps) => {
    if (props.bird){
        return (
            <React.Fragment> 
                <div className="bird-data">
                    <img src={props.bird.image} alt={props.bird.name} />
                    <div>
                        <h3>{props.bird.name}</h3>
                        <hr />
                        <h5>{props.bird.species}</h5>
                    </div>
                </div>
                <SoundPlayer sound={props.bird.audio}  />
                <div className="bird-text">
                    {props.bird.description}
                </div>
            </React.Fragment>
        );
    } else {
        return null;
    }
    
}

const Details = (props: DetailsProps) => {
    const { selectedBird, currentLevel } = props;
    const birdService = new BirdService();
    const [ bird, setBird ] = useState<BirdInterface | null>(null);

    useEffect(() => {
        if (selectedBird !== null){
            const newBird: BirdInterface = birdService.getBird(currentLevel, selectedBird);
            setBird(newBird);
        }
    }, [selectedBird, currentLevel, birdService]);

    return (
        <Jumbotron className="details">
            {!bird && <DetailsPlaceholder />}
            <BirdDetails bird={bird} />
        </Jumbotron>
    );
}

export default Details;