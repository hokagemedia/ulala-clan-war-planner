import {
    PLAYER_ADD,
    PLAYER_AUTO_ASSIGN,
    PLAYER_CLEAR,
    PLAYER_DELETE,
    PLAYER_INIT,
    PLAYER_SORT_BY_POWER,
    PLAYER_UNASSIGN,
    PLAYER_UPDATE
} from "../constants/actionTypes";
import {PLAYER_MASTER} from "../constants/localStorage";
import {playerService} from "../services/PlayerService";


export default (state = {}, action) => {

    switch (action.type) {

        case PLAYER_INIT: {
            let localStoragePlayers = localStorage.getItem(PLAYER_MASTER);
            return {
                ...state,
                players: localStoragePlayers == null ? [] : JSON.parse(localStoragePlayers)
            };
        }

        case PLAYER_CLEAR: {
            localStorage.setItem(PLAYER_MASTER, null);
            return {
                ...state,
                players: []
            }
        }

        case PLAYER_ADD: {
            return {
                ...state,
                players: playerService.addPlayer(action.payload.player, state.players)
            };
        }

        case PLAYER_UPDATE: {
            let updatedArray = playerService.updatePlayer(action.payload.player, state.players);
            return {
                ...state,
                players: updatedArray
            };
        }

        case PLAYER_DELETE: {
            let filtered = playerService.removePlayer(action.payload.playerIndex, state.players);
            return {
                ...state,
                players: filtered
            };
        }

        case PLAYER_SORT_BY_POWER:
            const sortType = action.payload.sortType;
            let sorted = playerService.sortPlayers(state.players, sortType);
            return {
                ...state,
                players: sorted
            };

        case PLAYER_AUTO_ASSIGN: {
            let assignedPlayers = playerService.autoAssignPlayers(state.players);
            return {
                ...state,
                players: assignedPlayers
            }
        }
        case PLAYER_UNASSIGN: {
            let player = action.payload.player;
            player.teamIndex = null;
            player.teamType = null;
            let updatedArray = playerService.updatePlayer(player, state.players);
            return {
                ...state,
                players: updatedArray
            }
        }

        default:
            return state;
    }
}
