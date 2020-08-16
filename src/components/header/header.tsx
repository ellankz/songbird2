import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './header.scss';
import logo from '../../images/logo.png';

interface HeaderProps {
    currentLevel: number,
    score: number
}

const Header = (props: HeaderProps) => {
    const [buttonTitles] = useState<string[]>(['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']);

    return (
        <React.Fragment>
            <div className="top-panel">
                <img src={logo} alt="SongBird" />
                <div className="score">Score: {props.score}</div>
            </div>
            <div className="button-panel">
                <ButtonGroup aria-label="Quiz Levels" size="lg" flex-wrap>
                    {buttonTitles.map((title, index) => {
                        return (
                            <Button variant="primary" key={index} active={index === props.currentLevel}>
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