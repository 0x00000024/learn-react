import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {/* eslint-disable-next-line react/prop-types */}
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">Today at  6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
