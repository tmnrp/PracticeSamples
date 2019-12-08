import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Its pool time',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrr its Cold',
        iconName: 'snowflake'
    }
};

const getSeason = function (lat) {
    var month = new Date().getMonth();
    return ((lat > 0) && (month >= 3 && month <= 8)) ? 'summer' : 'winter';
};

const SeasonDisplay = (props) => {
    const season= getSeason(props.lalitutde);
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>Season Display : {text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;