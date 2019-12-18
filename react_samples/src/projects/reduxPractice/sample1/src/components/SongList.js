import React from 'react';
import faker from 'faker';

class SongList extends React.Component {
    getSongList = () => {
        return [{
            imgThumbnail: faker.image.avatar(),
            songName: '1',
            songDuration: 1
        }, {
            imgThumbnail: faker.image.avatar(),
            songName: '2',
            songDuration: 2
        }, {
            imgThumbnail: faker.image.avatar(),
            songName: '3',
            songDuration: 3
        }, {
            imgThumbnail: faker.image.avatar(),
            songName: '4',
            songDuration: 4
        }, {
            imgThumbnail: faker.image.avatar(),
            songName: '5',
            songDuration: 5
        }];
    };

    render() {
        const processedList = this.getSongList().map((songDetail) => {
            return (<div className="ui row" key={songDetail.songName}>
                <div className="two wide column">
                    <button
                        className="ui button primary"
                        onClick={() => this.props.onSelectClick(songDetail)}
                    >
                        Select
                    </button>
                </div>
                <div className="fourteen wide column">
                    <div style={{ textAlign: "center" }}>
                        {<div >{songDetail.songName}</div>}
                    </div >
                </div>
            </div>);
        });

        return (
            <div className="ui grid">
                {processedList}
            </div>
        );
    };
}

export default SongList;