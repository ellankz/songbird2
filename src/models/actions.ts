export interface NewOptionsActionInterface {
	type: 'NEW_OPTIONS';
	payload: number;
}

export interface ClickActionInterface {
	type: 'CLICK_OPTION';
	payload: {
		guessed: boolean;
		index: number;
		correctIndex: number;
	};
}
