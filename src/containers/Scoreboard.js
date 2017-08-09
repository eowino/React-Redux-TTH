import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";
import * as PlayerActionCreators from "../actions/player";
import Header from "../components/header/header";
import Player from "../components/player/player";
import AddPlayerForm from "../components/add-player/add-player-form";

class Scoreboard extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, players } = this.props;
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

    const playerComponents = players.map((player, index) => {
      return <Player
        person={player}
        key={player.id}
        index={index}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />;
    });

    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state
});

// Subscribes to the specific reducer changes,
// Then inject those state changes as props into the Scoreboard container.
export default connect(mapStateToProps)(Scoreboard);
