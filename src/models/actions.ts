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

export interface QuestionActionInterface {
    type: 'NEW_QUESTION_BIRD',
    payload: BirdInterface
}