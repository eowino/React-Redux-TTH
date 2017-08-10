import * as PlayerActionTypes from "../actiontypes/player";

const autoIncrementID = players => {
  if (players.length < 1) return 0;
  return players.sort((a, b) => a.id < b.id)[0]["id"] + 1;
};

const initialState = {
  players: [
    {
      name: "Beach",
      score: 10,
      id: 0,
      created: "11/11/2016",
      updated: "11/08/2017"
    },
    {
      name: "Bettie",
      score: 20,
      id: 1,
      created: "11/11/2015",
      updated: "21/12/2015"
    },
    {
      name: "Adrian",
      score: 30,
      id: 2,
      created: "11/11/2016",
      updated: "11/12/2016"
    },
    {
      name: "Melody",
      score: 40,
      id: 3,
      created: "11/11/2016",
      updated: "11/12/2016"
    },
    {
      name: "Donaldson",
      score: 50,
      id: 4,
      created: "11/11/2016",
      updated: "11/12/2016"
    }
  ],
  selectedPlayerIndex: -1
};

export default function PlayerReducer(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      const id = autoIncrementID(state.players);
      const addedPlayerList = [
        ...state.players,
        {
          name: action.name,
          score: 0,
          id,
          created: new Date().toLocaleDateString()
        }
      ];
      return {
        ...state,
        players: addedPlayerList
      };

    case PlayerActionTypes.REMOVE_PLAYER:
      let newPlayers = [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1)
      ];
      return {
        selectedPlayerIndex: state.selectedPlayerIndex,
        players: newPlayers
      };

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      let updatedPlayers = state.players.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score,
            updated: new Date().toLocaleDateString()
          };
        }
        return player;
      });
      return {
        selectedPlayerIndex: state.selectedPlayerIndex,
        players: updatedPlayers
      };

    case PlayerActionTypes.SELECT_PLAYER:
      return {
        ...state,
        selectedPlayerIndex: action.index
      };

    default:
      return state;
  }
}
