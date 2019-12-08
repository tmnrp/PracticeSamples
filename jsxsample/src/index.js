import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard author="Sam" time="6:00 PM" comment="Nice Blog Post" dp={Faker.image.avatar()}/>
            <ApprovalCard author="Alex" time="4:40 AM" comment="Good morning" dp={Faker.image.avatar()}/>
            <ApprovalCard author="Jane" time="11:58 AM" comment="Hi, All" dp={Faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));