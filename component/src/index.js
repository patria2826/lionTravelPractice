import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warining</h4>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 6:00PM" avatar={faker.image.avatar()} commentText="Nice." />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Yesterday at 2:12PM" avatar={faker.image.avatar()} commentText="Good." />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="James" timeAgo="Yesterday at 7:30PM" avatar={faker.image.avatar()} commentText="Na...." />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));