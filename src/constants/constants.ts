import { BirdInterface, BirdHighlightInterface } from '../models/bird';

export const dummyBird: BirdInterface = {
	image: '',
	name: '',
	audio: '',
	id: null,
	description: '',
	species: '',
};

const generateHighlights = () => {
	let initialHighlights: BirdHighlightInterface[] = [];
	for (let i = 0; i < 6; i++) {
		let singleHighlight: BirdHighlightInterface = { index: i, color: 'gray' };
		initialHighlights.push(singleHighlight);
	}
	return initialHighlights;
};

export const initialHighlights: BirdHighlightInterface[] = generateHighlights();
