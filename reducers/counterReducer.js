export const SET_PLAYERS = 'SET_PLAYERS';

export const setPlayers = (players) => {
    return {
        type: SET_PLAYERS,
        payload: players
    }
}

export default function reducer (state = [], action) {
    let newState = state.concat([]);
    switch(action.type) {
        case SET_PLAYERS:
            newState = state.concat(action.payload);
            break;
        default:
            return newState;
    }
    return newState;
}