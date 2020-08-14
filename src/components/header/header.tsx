import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './header.scss';
import logo from '../../images/logo.png';

interface HeaderProps {
    currentLevel: number
}

const Header = (props: HeaderProps) => {
    const [buttonTitles] = useState<string[]>(['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']);
    const [score, setScore] = useState<number>(0);
    const [level, setLevel] = useState<number | null>(null);

    useEffect(() => {
        setLevel(props.currentLevel);
    }, [props.currentLevel]);

    return (
        <React.Fragment>
            <div className="top-panel">
                <img src={logo} alt="SongBird" />
                <div className="score">Score: {score}</div>
            </div>
            <div className="button-panel">
                <ButtonGroup aria-label="Quiz Levels" size="lg">
                    {buttonTitles.map((title, index) => {
                        return (
                            <Button variant="primary" key={index} active={index === level}>
                                {title}
                            </Button>
                        );
                    })}
                </ButtonGroup>
            </div>
        </React.Fragment>
    );
}

export default Header;