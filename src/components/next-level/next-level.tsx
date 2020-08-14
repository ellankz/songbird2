import React from 'react';
import { Button } from 'react-bootstrap';
import './next-level.scss';

const NextLevel = () => {
    return (
        <Button className="next-level" variant="primary" size="lg" block disabled>
            Продолжить
        </Button>
    );
}

export default NextLevel;