import React from 'react';
import CommentDetails from './CommentDetail';

const ApprovalCard = props => {
    return (
        <div className="ui cards">
            <div className="card">
                <CommentDetails author={props.author} time={props.time} comment={props.comment} dp={props.dp}/>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;