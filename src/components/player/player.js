import React from 'react';
import PropTypes from 'prop-types';

import Counter from '../counter/counter';

const Player = (props) => {
    return (
        <div className="player">
            <div className="player-name">
            <a className="remove-player" onClick={props.onRemove}>✖</a>    
            {props.person.name}
            </div>
            <div className="player-score">
                <Counter 
                    score={props.person.score}
                    onChange={props.onScoreChange} />
            </div>
        </div>
    );
};

Player.propTypes = {
    person: PropTypes.object.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default Player;


