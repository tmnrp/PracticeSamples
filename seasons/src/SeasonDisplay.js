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
    return ((lat > 0) && (month >= 3 && month <= 8)) ? seasonConfig.summer : seasonConfig.winter;
};

const SeasonDisplay = (props) => {
    const { text, iconName } = getSeason(props.lalitutde);
    return (
        <div >
            <i className={`${iconName} icon`} />
            Season Display : {text}
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;