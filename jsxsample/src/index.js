import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam" time="6:00 PM" comment="Nice Blog Post" dp={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Ram" time="7:00 PM" comment="Good morning" dp={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Damn" time="8:00 PM" comment="Coffeeeeee" dp={Faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));