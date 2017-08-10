import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";
import * as PlayerActionCreators from "../actions/player";
import Header from "../components/header/header";
import Player from "../components/player/player";
import AddPlayerForm from "../components/add-player/add-player-form";
import PlayerDetail from "../components/player-detail/player-detail";

class Scoreboard extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired
  };

  render() {
    const { dispatch, state } = this.props;
    const selectedPlayerIndex = state.selectedPlayerIndex;
    const addPlayer = bindActionCreators(
      PlayerActionCreators.addPlayer,
      dispatch
    );
    const removePlayer = bindActionCreators(
      PlayerActionCreators.removePlayer,
      dispatch
    );
    const updatePlayerScore = bindActionCreators(
      PlayerActionCreators.updatePlayerScore,
      dispatch
    );

    const selectPlayer = bindActionCreators(
      PlayerActionCreators.selectPlayer,
      dispatch
    );

    let selectedPlayer;
    if(selectedPlayerIndex !== -1) {
      selectedPlayer = state.players[selectedPlayerIndex];
    }
    
    const playerComponents = state.players.map((player, index) => {
      return (
        <Player
          person={player}
          key={player.id}
          index={index}
          updatePlayerScore={updatePlayerScore}
          removePlayer={removePlayer}
          selectPlayer={selectPlayer}
        />
      );
    });

    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={state.players} />
        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        <div className="player-detail">
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

// Subscribes to the specific reducer changes,
// Then inject those state changes as props into the Scoreboard container.
export default connect(mapStateToProps)(Scoreboard);
