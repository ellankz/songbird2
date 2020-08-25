import React, { useState, useEffect } from 'react';
import BirdService from '../../services/bird-service';
import { BirdInterface } from '../../models/bird';
import { dummyBird } from '../../constants';
import { Jumbotron } from 'react-bootstrap';
import SoundPlayer from '../sound-player';
import unknownBird from '../../images/bird.jpg';
import './question.scss';

interface QuestionProps {
	correctIndex: number | null;
	guessed: boolean;
	level: number;
}

const Question = (props: QuestionProps) => {
	const { correctIndex, level, guessed } = props;

	const [bird, setBird] = useState<BirdInterface>(dummyBird);
	const [birdSound, setBirdSound] = useState<string>('');

	const birdService = new BirdService();
	useEffect(() => {
		if (correctIndex !== null) {
			const receivedBird: BirdInterface = birdService.getBird(
				level,
				correctIndex
			);
			setBird(receivedBird);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [correctIndex, level]);

	useEffect(() => {
		if (bird !== null && bird.id !== null) {
			setBirdSound(require(`../../audio/birdsongs/${level}/${bird.id}.mp3`));
		}
	}, [bird, level]);

	return (
		<Jumbotron className="question">
			<img
				src={guessed ? bird.image : unknownBird}
				alt={guessed ? bird.name : 'unknown bird'}
			/>
			<div>
				<h3>{guessed ? bird.name : '*******'}</h3>
				<hr />
				<SoundPlayer sound={birdSound} guessed={guessed} />
			</div>
		</Jumbotron>
	);
};

export default Question;
