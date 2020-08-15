import { BirdInterface } from './bird';

export interface LevelActionInterface {
    type: 'NEXT_LEVEL'
}

export interface OptionsActionInterface {
    type: 'NEW_OPTIONS',
    payload: number
}

export interface HighlightActionInterface {
    type: 'CLICK_OPTION',
    payload: {
        guessed: boolean,
        index: number,
        correctIndex: number
    }
}

export interface DetailsActionInterface {
    type: 'NEW_DETAILS_BIRD',
    payload: BirdInterface
}

export interface QuestionActionInterface {
    type: 'NEW_QUESTION_BIRD',
    payload: BirdInterface
}