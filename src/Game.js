import React, { useState } from "react";

function getInitialState() {
    const state = {}
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            state[`${r}-${c}`] = null;
        }
    }
    return state;
}

const getKeyFromIndex = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return `${row}-${col}`;
}

const getLabel = (value) => {
    if (!value) {
        return null;
    }
    return value > 0 ? 'X' : 'O';
}

function getWinner(values) {
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            const sumRow =
                values[`${r}-${c}`] +
                values[`${r}-${c+1}`] +
                values[`${r}-${c+2}`];
            if (sumRow === 3 || sumRow === -3) {
                return sumRow;
            }
            const sumCol =
                values[`${r}-${c}`] +
                values[`${r+1}-${c}`] +
                values[`${r+2}-${c}`];
            if (sumCol === 3 || sumCol === -3) {
                return sumCol;
            }
            const sumDiag =
                values[`${r}-${c}`] +
                values[`${r+1}-${c+1}`] +
                values[`${r+2}-${c+2}`];
            if (sumDiag === 3 || sumDiag === -3) {
                return sumDiag;
            }
            const sumRevDiag =
                values[`${r}-${c}`] +
                values[`${r+1}-${c-1}`] +
                values[`${r+2}-${c-2}`];
            if (sumRevDiag === 3 || sumRevDiag === -3) {
                return sumRevDiag;
            }
        }
    }
    return null;
}

const Game = () => {
    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(null);

    function handleClick(key) {
        if (winner || values[key]) {
            return;
        }
        const newValues = {
            ...values,
            [key]: player,
        };
        setValues(newValues);

        setPlayer(player * -1);
        const newWinner = getWinner(newValues);

        if (newWinner) {
            setWinner(newWinner > 0 ? 1 : -1);
        }
    }

    function reset() {
        setWinner(null);
        setValues(getInitialState);
        setPlayer(1);
    };

    const isATie = Object
        .values(values)
        .filter(Boolean)
        .length === 9 && !winner;

    return (

        <div className="Game">
            <div className="Game__board">
                {Array.from({ length: 9 }).map((_, index) => {

                    const key = getKeyFromIndex(index);

                    return (
                        <button className="buttonGame"
                            key={index}
                            type="button"
                            onClick={() =>
                                handleClick(key)}
                        >
                            {getLabel(values[key])}
                        </button>
                    )
                })}
            </div>

            {(winner || isATie) && (
                <div className="Game__menu">
                    {winner ?
                        (<p>O ganhador é: {winner > 0 ? 'X' : 'O'}</p>) :
                        (<p>Deu velha!</p>)}                    
                    <button onClick={reset}>Reiniciar</button>
                </div>)}
        </div>

    )
}

export default Game;