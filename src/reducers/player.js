import * as PlayerActionTypes from "../actiontypes/player";

export const autoIncrementID = players => {
  if (players.length < 1) return 0;
  return players.sort((a, b) => a.id < b.id)[0]["id"] + 1;
};

const initialState = [
  {
    name: "Beach",
    score: 10,
    id: 0
  },
  {
    name: "Bettie",
    score: 20,
    id: 1
  },
  {
    name: "Adrian",
    score: 30,
    id: 2
  },
  {
    name: "Melody",
    score: 40,
    id: 3
  },
  {
    name: "Donaldson",
    score: 50,
    id: 4
  }
];

export default function PlayerReducer(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
    const id = autoIncrementID(state);  
    return [
        ...state,
        {
          name: action.name,
          score: 0,
          id
        }
      ];
    case PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score
          };
        }
        return player;
      });
    default:
      return state;
  }
}


