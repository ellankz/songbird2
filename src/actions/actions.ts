import {
    LevelActionInterface,
    OptionsActionInterface,
    HighlightActionInterface,
    QuestionActionInterface
} from '../models/actions';

import { BirdInterface } from '../models/bird';


export const NextLevelDispatch = () => {
    const nextLevelAction: LevelActionInterface = {
        type: 'NEXT_LEVEL'
    }
    return nextLevelAction;
}

export const NewOptionsDispatch = (level: number) => {
    const newOptionsAction: OptionsActionInterface = {
        type: 'NEW_OPTIONS',
        payload: level
    }
    return newOptionsAction;
}

export const HighlightOptionDispatch = (index: number, guessed: boolean, correctIndex: number) => {
    const highlightAction: HighlightActionInterface = {
        type: 'CLICK_OPTION',
        payload: {
            guessed: guessed,
            index: index,
            correctIndex: correctIndex
        }
    }
    return highlightAction;
}

export const NewQuestionBirdDispatch = (bird: BirdInterface) => {
    const newQuestionBirdAction: QuestionActionInterface = {
        type: 'NEW_QUESTION_BIRD',
        payload: bird
    }
    return newQuestionBirdAction;
}