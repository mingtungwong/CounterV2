const SET_PLAYERS = 'SET_PLAYERS';
const UPDATE_PLAYER = 'UPDATE_PLAYER';
const ADD_PLAYER = 'ADD_PLAYER';
const SET_START_POINTS = 'SET_START_POINTS';

export const setPlayers = (players, startPoints) => {
    return {
        type: SET_PLAYERS,
        payload: {
            players,
            startPoints
        }
    }
}

export const addPlayer = () => {
    return {
        type: ADD_PLAYER,
        payload: null
    }
}

export const updatePlayer = (playerId, name, points) => {
    return {
        type: UPDATE_PLAYER,
        payload: {
            playerId,
            name,
            points
        }
    }
}

export const setStartPoints = (points) => {
    return {
        type: SET_START_POINTS,
        payload: points
    }
}

const initialState = {
    counters: [],
    startPoints: 1
}

export default function reducer (state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case SET_PLAYERS:
            newState.counters = action.payload.players;
            newState.startPoints = action.payload.startPoints;
            break;
        case UPDATE_PLAYER: {
            const obj = action.payload;
            newState.counters[obj.playerId] = {name: obj.name, points: obj.points};
            break;
        }
        case ADD_PLAYER: {
            newState.counters = newState.counters.concat({name: `Player ${newState.counters.length + 1}`, points: newState.startPoints})
            break;
        }
        case SET_START_POINTS:
            newState.startPoints = action.payload;
            break;
        default:
            return newState;
    }

    return newState;
}