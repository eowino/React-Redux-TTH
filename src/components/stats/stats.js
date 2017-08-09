import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players: </td>
                    <td>{props.players}</td>
                </tr>
                <tr>
                    <td>Total Points: </td>
                    <td>{props.totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
};

Stats.propTypes = {
    players: PropTypes.number.isRequired,
    totalPoints: PropTypes.number.isRequired,
};

export default Stats;