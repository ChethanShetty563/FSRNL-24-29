import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import './Post.css';

const Post = ({ username, caption, imageUrl }) => {
  const handleButtonClick = () => {
    console.log('Hurray! Clicked on the Button');
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="TWD" src="/static/images/avatar/1.jpg" />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="React" />
      <h4 className="post__text">
        <strong>{username}</strong>
        {caption}
      </h4>
      <Button onClick={handleButtonClick}>Click on Me!</Button>
    </div>
  );
};

export default Post;
