import React from 'react';

const PostItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>{props.post.title} – {props.post.body}</div>
        </div>
        <div className="post__btns">
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;