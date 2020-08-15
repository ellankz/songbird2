import {
    LevelActionInterface,
    NewOptionsActionInterface,
    ClickActionInterface
} from '../models/actions';

export const NextLevelDispatch = () => {
    const nextLevelAction: LevelActionInterface = {
        type: 'NEXT_LEVEL'
    }
    return nextLevelAction;
}

export const NewOptionsDispatch = (level: number) => {
    const newOptionsAction: NewOptionsActionInterface = {
        type: 'NEW_OPTIONS',
        payload: level
    }
    return newOptionsAction;
}

export const ClickOptionDispatch = (index: number, guessed: boolean, correctIndex: number) => {
    const clickAction: ClickActionInterface = {
        type: 'CLICK_OPTION',
        payload: {
            guessed: guessed,
            index: index,
            correctIndex: correctIndex
        }
    }
    return clickAction;
}