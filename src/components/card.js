export const Card = ({ card, markClicked, clickedBoxes, matchedCards, selectedColor }) => {

    const markHandler = () => markClicked(card),
    isClicked = clickedBoxes.some(box => box.id === card.id),
    isMatchedCards = matchedCards.some(box => box.id === card.id),
    styleColor = selectedColor !== null ? { backgroundColor: selectedColor } : {};

    return (
        <div onClick={markHandler} className={`c-board__box ${ isClicked || isMatchedCards ? "is-clicked" : "" }`} style={styleColor}>
            <div className="c-board__box__item">
                <span>{card.value}</span>
            </div>
        </div>
    )
};


