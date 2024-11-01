// src/components/FacebookPost/FacebookPost.jsx
import React from 'react';
import './FacebookPost.css';

const FacebookPost = ({ username, timestamp, content, postImage, profilePic, likes, comments }) => {
  return (
    <div className="facebook-post">
      <div className="post-header">
        <div className="post-profile-pic">
          <img src={profilePic} alt="User Profile" />
        </div>
        <div className="post-user-info" style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="username" style={{ color: 'black' }}>{username}</span>
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>
      <div className="post-content" style={{ textAlign: 'left', color: 'black', padding: '0px' }}>
        <p>{content}</p>
      </div>
      <div className="post-image">
        <img src={postImage} alt="Post" />
      </div>
      <div className="post-stats">
        <span>{likes} likes</span>
        <span>{comments} comments</span>
      </div>
      <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default FacebookPost;
