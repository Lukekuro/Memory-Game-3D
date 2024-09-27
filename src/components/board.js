import { Card } from './card';

export const Board = ({ mixAlfabet, markClicked, clickedBoxes, matchedCards, selectedColor }) => {

    const all_Cards = mixAlfabet.map((card) => (
        <Card key={card.id} card={card} markClicked = {markClicked} clickedBoxes = {clickedBoxes} matchedCards = {matchedCards} selectedColor = {selectedColor}/>
    ));

    return (
        <div className="c-board__wrap-center">
            <div className="c-board__list">
                {all_Cards}
            </div>
        </div>

    )
}

export default Board;
