import React from 'react';
import PropTypes from 'prop-types';

import Counter from '../counter/counter';

const Player = (props) => {
    return (
        <div className="player">
            <div className="player-name">
            <a className="remove-player" onClick={ () => props.removePlayer(props.index) }>✖</a>    
            {props.person.name}
            </div>
            <div className="player-score">
                <Counter 
                    score={props.person.score}
                    index={props.index}
                    updatePlayerScore={props.updatePlayerScore} />
            </div>
        </div>
    );
};

Player.propTypes = {
    person: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
};

export default Player;


