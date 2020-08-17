import React, { useState, useEffect } from 'react';
import './end-game.scss';
import { Jumbotron, Button } from 'react-bootstrap';
import winner from '../../images/winner.jpg';
const winnerSound = require('../../audio/winnerSound.mp3');

interface EndGameProps {
	score: number;
	handleStartOver: () => void;
}

const EndGame = (props: EndGameProps) => {
	const { score, handleStartOver } = props;

	const [audio] = useState(new Audio(winnerSound));

	useEffect(() => {
		if (score === 30) {
			audio.play();
		}
	}, [score, audio]);

	return (
		<div className="end-game">
			<Jumbotron>
				<h1>Поздравляем!</h1>
				<p>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
				<hr />
				{score === 30 && (
					<div>
						<p>
							<strong>Вы заслужили приз.</strong>
						</p>
						<img src={winner} alt="Приз" />
					</div>
				)}
				<Button block variant="primary" onClick={handleStartOver}>
					Сначала
				</Button>
			</Jumbotron>
		</div>
	);
};

export default EndGame;
