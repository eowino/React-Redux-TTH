import React, { Component } from "react";

import "./App.css";
import Header from "./components/header/header";
import Player from "./components/player/player";

import AddPlayerForm from "./components/add-player/add-player-form";
import players from "./services/people";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      players: players || []
    };

    this.onScoreChange = this.onScoreChange.bind(this);
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);
  }

  onScoreChange(index, delta) {
    let players = this.state.players;
    players[index].score += delta;
    this.setState(() => {
      return {
        players: players
      };
    });
  }

  onPlayerAdd(name) {
    let id = this.generatePlayerID() + 1;
    let players = this.state.players;
    players.push({
      name: name,
      id: id,
      score: 0
    });
    this.setState(() => {
      return {
        players: players
      };
    });
  }

  onRemovePlayer(index) {
    let players = this.state.players;
    players.splice(index, 1);
    this.setState(() => {
      return {
        players: players
      };
    });
  }

  generatePlayerID() {
    let players = this.state.players;
    if(players.length < 1) return 0;
    return players.sort((a, b) => a.id < b.id)[0]['id']; 
  }

  render() {
    let playerCount = this.state.players.length;

    let score = this.state.players.reduce(
      (total, player) => total + player.score,
      0
    );

    return (
      <div className="scoreboard">
        <Header title="Scoreboard" playerCount={playerCount} score={score} />
        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                person={player}
                key={player.id}
                onScoreChange={delta => this.onScoreChange(index, delta)}
                onRemove={() => this.onRemovePlayer(index)}
              />
            );
          })}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}
