import React from 'react';
import { Button } from 'react-bootstrap';
import './next-level.scss';

interface NextLevelProps {
    changeLevel: () => void,
    guessed: boolean
}

const NextLevel = (props: NextLevelProps) => {
    return (
        <Button className="next-level" variant="primary" size="lg" block disabled={!props.guessed} onClick={() => {props.changeLevel()}}>
            Продолжить
        </Button>
    );
}

export default NextLevel;