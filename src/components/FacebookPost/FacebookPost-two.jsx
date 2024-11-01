// src/components/FacebookPost/FacebookPost.jsx
import React from 'react';
import './FacebookPost.css';

const FacebookPost = () => {
  return (
    <div className="facebook-post">
      <div className="post-header">
        <div className="post-profile-pic">
          <img 
            src="https://scontent.fkhi25-1.fna.fbcdn.net/v/t39.30808-6/459572664_2252557268470414_4379880105446805453_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECPe6ppantx3IHxZnlQV7IRYyoeiBM-XdFjKh6IEz5d-aRkKVqALc4HCXfilyqBz4A9MZpKSO9WKgo5lIKbqRJ&_nc_ohc=sD6jZt8QLmUQ7kNvgHKjk7x&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=A3DZWW4re0fZKvyYE4rQssV&oh=00_AYCKHpLAQrvQeln-IwtVV3GLp9ytyleqhThte29Xdvne7A&oe=67247F47" 
            alt="User Profile" 
          />
        </div>
        <div
  className="post-user-info"
  style={{
    display: 'flex',
    flexDirection: 'column'
  }}
>
          <span className="username" style={{
            color:'black',
          }}>Muzammil Mansoori</span>
          <span className="timestamp">Monday at 11:00 AM</span>
        </div>
      </div>
      <div className="post-content" style={{
        textAlign:'left',
        color:'black',
        padding:'0px',
      }}>
        <p>Never give up, start again ❤️</p>
      </div>
      <div className="post-image">
        <img 
          src="https://scontent.fkhi25-1.fna.fbcdn.net/v/t39.30808-6/461555429_2266892350370239_3754094237370055138_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHrsOe-cldA_iNr9lfl76eSqY7eGTv8nv-pjt4ZO_ye_w5ebVwf2fL-c9lX0yQsh6Uw39TBEL0CdgUiWuvR1Iup&_nc_ohc=qEK3BfhnpT0Q7kNvgEC01cy&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=AaLs88O6Bp5hIKVJl4sA1_z&oh=00_AYDKHTGkyxaIOSeUM_eZqp6UldE82PtFcBOpzaU912kuuQ&oe=67248BAA" 
          alt="Post" 
        />
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
