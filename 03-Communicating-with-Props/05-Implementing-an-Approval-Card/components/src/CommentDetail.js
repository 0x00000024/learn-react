import React from 'react';

const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          {/* eslint-disable-next-line react/prop-types */}
          <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {/* eslint-disable-next-line react/prop-types */}
            {props.author}
          </a>
          <div className="metadata">
            {/* eslint-disable-next-line react/prop-types */}
            <span className="date">{props.timeAgo}</span>
          </div>
          {/* eslint-disable-next-line react/prop-types */}
          <div className="text">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
