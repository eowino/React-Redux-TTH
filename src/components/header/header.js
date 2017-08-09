import React from 'react';
import PropTypes from 'prop-types';

import Stats from "../../components/stats/stats";
import Stopwatch from "../../components/stopwatch/stopwatch";

const Header = (props) => {
    return (
        <div className="header">
            <Stats players={props.playerCount} totalPoints={props.score} />
            <h1>{props.title}</h1>
            <Stopwatch />
        </div>
    );
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;