import {
    PLAYER_ADD,
    PLAYER_DELETE,
    PLAYER_FORM_CLOSE,
    PLAYER_FORM_OPEN,
    PLAYER_INIT,
    PLAYER_UPDATE
} from "../constants/actionTypes";

export const initPlayers = () => ({
    type: PLAYER_INIT
});

export const addPlayer = player => ({
    type: PLAYER_ADD,
    payload: {
        player: player
    }
});

export const updatePlayer = (player) => ({
    type: PLAYER_UPDATE,
    payload: {
        player: player
    }
});

export const deletePlayer = playerIndex => ({
    type: PLAYER_DELETE,
    payload: {
        playerIndex: playerIndex
    }
});

export const openForm = (player) => ({
    type: PLAYER_FORM_OPEN,
    payload: {
        playerInput: player
    }
});

export const closeForm = () => ({
    type: PLAYER_FORM_CLOSE,
});
