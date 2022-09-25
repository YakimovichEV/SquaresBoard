import { PlayLevel } from "App";

export const gameType = {
    easy: {
        name: "Easy",
        field: 5,
    },
    hard: {
        name: "Hard",
        field: 25,
    },
    normal: {
        name: "Normal",
        field: 15,
    },
};

export const getLevelOfGame = (type: PlayLevel) => {
    if (type === gameType.normal.name) {
        return gameType.normal.field;
    } else if (type === gameType.hard.name) {
        return gameType.hard.field;
    }

    return gameType.easy.field;
};
