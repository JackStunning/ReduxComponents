import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:20" 
          content="Hello World!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 7:30" 
          content="Hey hey hey." 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Today at 12:00"
          content="I'm walkin' over here!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

