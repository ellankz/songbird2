import React from 'react';
import { Button } from 'react-bootstrap';
import './next-level.scss';
import { LevelActionInterface } from '../../models/actions';
import { NextLevelDispatch } from '../../actions';

interface NextLevelProps {
    changeLevel: React.Dispatch<LevelActionInterface>,
    guessed: boolean
}

const NextLevel = (props: NextLevelProps) => {
    return (
        <Button className="next-level" variant="primary" size="lg" block disabled={!props.guessed} onClick={() => {props.changeLevel(NextLevelDispatch())}}>
            Продолжить
        </Button>
    );
}

export default NextLevel;