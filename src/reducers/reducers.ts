import { BirdInterface } from '../models/bird';
import BirdService from '../services/bird-service';
import {
    NewOptionsActionInterface,
    ClickActionInterface
} from '../models/actions';


const birdService = new BirdService();

export const optionsReducer = (state: BirdInterface[] = [], action: NewOptionsActionInterface | ClickActionInterface) => {
    switch (action.type) {
    case 'NEW_OPTIONS':
        if (typeof(action.payload) === 'number'){
            const newBirds: BirdInterface[] = birdService.getBirdsByLevel(action.payload);
            return newBirds;
        } else {
            return state;
        }
    case 'CLICK_OPTION':
        if (typeof(action.payload) !== 'number' || state.length > 0){
            const { guessed, index, correctIndex } = action.payload;
            if (guessed){
                return state;
            } else {
                const newState = state.map((bird: BirdInterface, i: number) => {
                    if (index === i){
                        let newBird: BirdInterface = {...bird, clicked: true};
                        if (i === correctIndex){
                            newBird.color = 'green';
                        } else {
                            newBird.color = 'red'
                        };
                        return newBird;
                    } else {
                        return bird;
                    }
                });
                return newState;
            }
        } else {
            return state;
        }
    default:
        return state;
    }
}