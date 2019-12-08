import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" time="6:00 PM" comment="Nice Blog Post"/>
            <CommentDetail author="Alex" time="4:40 AM" comment="Good morning"/>
            <CommentDetail author="Jane" time="11:58 AM" comment="Hi, All"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));