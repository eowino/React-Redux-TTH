import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddPlayerForm extends Component {
  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  };

  state = {
    name: ""
  };

  constructor(props) {
    super(props);
    this.addPlayer = this.addPlayer.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  addPlayer(evt) {
    evt.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState(() => {
      return {
        name: ""
      };
    });
  }

  onNameChange(evt) {
    let value = evt.target.value;
    this.setState(() => {
      return {
        name: value
      };
    });
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}
