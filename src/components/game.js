import React from 'react';
import { InfoPanel } from './infopanel';
import { Modal } from './modal';
import { Score } from './score';
import { Board } from './board';

const alfabet = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
const colors = ['#dc3232','#B4C243','#00a0d2','#F2C94C']; 

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trial: 0,
            clickedBoxes: [],
            matchedCards: [],
            gameOver: false,
            mixAlfabet: this.shuffleAlfabet(),
            selectedColor: null,
        };
    }

    shuffleAlfabet = () => {
        return alfabet.map((value, index) => ({ id: index + 1, value })).sort(() => 0.5 - Math.random());
    };

    handleColor = ( color ) => {
        this.setState({ selectedColor: color });
    };

    handleReset = () => {
        this.setState({ clickedBoxes: [], matchedCards: [], trial: 0, gameOver: false, mixAlfabet: this.shuffleAlfabet() });
    };

    handleBoxClick = (card) => {
        const { clickedBoxes, matchedCards } = this.state;

        if ( clickedBoxes.some(clickedCard => clickedCard.id === card.id) || matchedCards.some(matchedCards => matchedCards.id === card.id) ) {
            return;
        }

        if (clickedBoxes.length < 2 && !clickedBoxes.includes(card) ) {
            this.setState({ clickedBoxes: [...clickedBoxes, card] });
        }
    };

    componentDidUpdate(_, prevState) {
        const { clickedBoxes, matchedCards, gameOver, mixAlfabet } = this.state;

        if (clickedBoxes.length === 2 && clickedBoxes !== prevState.clickedBoxes) {
            if (clickedBoxes[0].value === clickedBoxes[1].value) {
                setTimeout(() => {
                    this.setState({ matchedCards: [...matchedCards, clickedBoxes[0], clickedBoxes[1]], clickedBoxes: [], trial: prevState.trial + 1 });
                }, 100);
            
            } else {
                setTimeout(() => {
                    this.setState({ clickedBoxes: [], trial: prevState.trial + 1 });
                }, 800);
            }
        }

         if (matchedCards.length === mixAlfabet.length && !gameOver) {
            this.setState({ gameOver: true });
        }
    }


    render() {
        const { trial, clickedBoxes, matchedCards, gameOver, mixAlfabet, selectedColor } = this.state;

        return (
            <div className="c-board">
                <div className="c-board__wrap">
                    <InfoPanel trial = {trial} markReset = {this.handleReset} colors = {colors} markColor = {this.handleColor} />

                    <Board mixAlfabet={mixAlfabet} markClicked = {this.handleBoxClick} clickedBoxes = {clickedBoxes} matchedCards = {matchedCards} selectedColor = {selectedColor}/>

                    <Score newscore = {gameOver ? trial : null} />
                </div>

                { gameOver && <Modal type={true} trial={trial} /> }
            </div>
        )
    }
}

export default Game;
