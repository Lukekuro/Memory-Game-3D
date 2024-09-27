import { useState, useEffect } from "react";

export const Score = ({ newscore }) => {
    const [bestScore, setBestScore] = useState(null);

    useEffect(() => {
        const saveBestScore = localStorage.getItem('bestScore');

        if ( saveBestScore ) {
            setBestScore(saveBestScore)
        } else {
            setBestScore(null);
        }

        if ( newscore !== null ) {
            if ( saveBestScore === null || newscore < saveBestScore ) {
                localStorage.setItem('bestScore', newscore);
                setBestScore(newscore);
            }
        }
    }, [newscore])


    return (
        <div className="c-board__panel">
            <span className="c-board__panel__score">
                <span className="text-lg">Best Score: {bestScore !== null ? `${bestScore} ruchów` : 'Brak'}</span>
                <hr></hr>
                {newscore !== null && (
                    <span className="text-lg">Twój wynik: {newscore} ruchy</span>
                )}
            </span>
        </div>
    )
};


