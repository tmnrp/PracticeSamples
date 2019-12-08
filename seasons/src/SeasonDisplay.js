import React from 'react';

const getSeason = function (lat) {
    var month = new Date().getMonth();
    return ((lat > 0) && (month >= 3 && month <= 8)) ? 'Summer' : 'Winter';
}

const SeasonDisplay = (props) => {
    var season = getSeason(props.lalitutde);
    var icon, msg;
    if (season.toLowerCase() == 'winter'.toLowerCase()) {
        icon = 'snowflake';
        msg = 'Brrr its Cold';
    } else {
        icon = 'sun';
        msg = 'Its pool time';
    }
    return (
        <div >
            <i className={`${icon} icon`} />
            Season Display : {msg}
            <i className={`${icon} icon`} />
        </div>
    );
};

export default SeasonDisplay;