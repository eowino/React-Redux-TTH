import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onSubmit(evt) {
      evt.preventDefault();
      this.props.onAdd(this.state.name);
      this.setState(() => {
          return {
              name: ''
          }
      });
  }

  onNameChange(evt) {
      let value = evt.target.value;
      this.setState(() => {
          return {
              name: value
          }
      });
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};