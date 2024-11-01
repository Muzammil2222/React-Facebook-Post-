import React from 'react';
import './FacebookPost.css';

const FacebookPost = () => {
  return (
    <div className="facebook-post">
      <div className="post-header">
        <div className="post-profile-pic">
          <img src="https://via.placeholder.com/40" alt="User Profile" />
        </div>
        <div className="post-user-info">
          <span className="username">My user name</span>
          <span className="timestamp">Monday at 11:00 AM</span>
        </div>
      </div>
      <div className="post-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="post-image">
        <img src="https://via.placeholder.com/400x200" alt="Post" />
      </div>
      <div className="post-stats">
        <span>👍❤️😮 Lorem ipsum and 291 others</span>
        <span>55 comments</span>
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
