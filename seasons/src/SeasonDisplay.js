import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Its pool time',
        icon: `sun icon`
    },
    winter: {
        text: 'Brrr its Cold',
        icon: `snowflake icon`
    }
};

const getSeason = function (lat) {
    var month = new Date().getMonth();
    return ((lat > 0) && (month >= 3 && month <= 8)) ? seasonConfig.summer : seasonConfig.winter;
};

const SeasonDisplay = (props) => {
    var season = getSeason(props.lalitutde);
    return (
        <div >
            <i className={season.icon} />
            Season Display : {season.text}
            <i className={season.icon} />
        </div>
    );
};

export default SeasonDisplay;