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

const Game = () => {
    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);

    function handleClick(key) {
        if (values[key]) {
            return;
        }
        setValues({
            ...values,
            [key]: player,
        });

        setPlayer(player * -1);
    }

    return (

        <div className="Game">
            <div className="Game__board">
                {Array.from({ length: 9 }).map((_, index) => {

                    const key = getKeyFromIndex(index);

                    return (
                        <button
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
        </div>

    )
}

export default Game;