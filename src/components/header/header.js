import React from 'react';
import PropTypes from 'prop-types';

import Stats from "../../components/stats/stats";
import Stopwatch from "../../components/stopwatch/stopwatch";

const Header = (props) => {
    let playerCount = props.players.length;

    let score = props.players.reduce(
      (total, player) => total + player.score,
      0
    );

    return (
        <div className="header">
            <Stats players={playerCount} totalPoints={score} />
            <h1>{props.title}</h1>
            <Stopwatch />
        </div>
    );
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;