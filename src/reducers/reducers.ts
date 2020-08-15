import { BirdInterface, BirdHighlightInterface } from '../models/bird';
import BirdService from '../services/bird-service';
import { dummyBird } from '../constants';
import {
    LevelActionInterface,
    OptionsActionInterface,
    QuestionActionInterface,
    HighlightActionInterface
} from '../models/actions';


const birdService = new BirdService();

export const levelsReducer = (state = 0, action: LevelActionInterface) => {
    switch (action.type) {
    case 'NEXT_LEVEL':
        if (state > 5){
            return state + 1;
        } else {
            return 0;
        }
    default:
        return state;
    }
}


export const optionsReducer = (state: BirdInterface[] = [], action: OptionsActionInterface) => {
    switch (action.type) {
    case 'NEW_OPTIONS':
        const newBirds = birdService.getBirdsByLevel(action.payload);
        return newBirds;
    default:
        return state;
    }
}


export const highlightsReducer = (state: BirdHighlightInterface[] = [], action: HighlightActionInterface) => {
    switch (action.type) {
    case 'CLICK_OPTION':
        const { guessed, index, correctIndex } = action.payload;
        if (guessed){
            return state;
        } else {
            return state.map((option: BirdHighlightInterface) => {
                if (index === option.index){
                    if (option.index === correctIndex){
                        const highlightedOptionGreen: BirdHighlightInterface = {...option, color: 'green'};
                        return highlightedOptionGreen;
                    } else {
                        const highlightedOptionRed: BirdHighlightInterface = {...option, color: 'red'};
                        return highlightedOptionRed;
                    }
                } else {
                    return option;
                }
            });
        } 
    default:
        return state;
    }
}

export const questionReducer = (state: BirdInterface = dummyBird, action: QuestionActionInterface) => {
    switch (action.type) {
    case 'NEW_QUESTION_BIRD':
        // use action.payload
        return state;
    default:
        return state;
    }
}