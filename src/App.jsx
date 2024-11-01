// App.jsx
import { useState } from 'react'
import './App.css';
import Header from './Header.jsx'
import FacebookPost from './components/FacebookPost/FacebookPost.jsx';
function App() {
  const postsData = [
    {
      id: 1,
      username: 'Muzammil Mansoori',
      timestamp: 'Monday at 11:00 AM',
      content: 'Never give up, start again ❤️',
      postImage: 'https://scontent.fkhi25-1.fna.fbcdn.net/v/t39.30808-6/461555429_2266892350370239_3754094237370055138_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHrsOe-cldA_iNr9lfl76eSqY7eGTv8nv-pjt4ZO_ye_w5ebVwf2fL-c9lX0yQsh6Uw39TBEL0CdgUiWuvR1Iup&_nc_ohc=qEK3BfhnpT0Q7kNvgEC01cy&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=AaLs88O6Bp5hIKVJl4sA1_z&oh=00_AYDKHTGkyxaIOSeUM_eZqp6UldE82PtFcBOpzaU912kuuQ&oe=67248BAA',
      profilePic: 'https://scontent.fkhi25-1.fna.fbcdn.net/v/t39.30808-6/459572664_2252557268470414_4379880105446805453_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECPe6ppantx3IHxZnlQV7IRYyoeiBM-XdFjKh6IEz5d-aRkKVqALc4HCXfilyqBz4A9MZpKSO9WKgo5lIKbqRJ&_nc_ohc=sD6jZt8QLmUQ7kNvgHKjk7x&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=A3DZWW4re0fZKvyYE4rQssV&oh=00_AYCKHpLAQrvQeln-IwtVV3GLp9ytyleqhThte29Xdvne7A&oe=67247F47',
      likes: '❤️ 291 others',
      comments: '55'
    },
    {
      id: 2,
      username: 'Ali Khan',
      timestamp: 'Tuesday at 2:00 PM',
      content: 'Learning React is fun!',
      postImage: 'https://www.joyofreact.com/og-image.jpg',
      profilePic: 'https://scontent.fkhi25-1.fna.fbcdn.net/v/t1.6435-9/46397998_310443836349692_6588158087473922048_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFfsUx_nDLm4OP3hMh60LElz42U9YhUiUnPjZT1iFSJSc5yrIKJ-Xv8yo6oRzEbm17vyJE_vOIOIbUs8_HMx19m&_nc_ohc=9U7m73cZPg4Q7kNvgFYPJQI&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=A6o_wpdk2-UGvcTEk12rIi-&oh=00_AYAbQpE8Byo47M72D9yd9P9nxsVBt22-2EmFpH4-qAj4jA&oe=6749A57B',
      likes: '👍 120 others',
      comments: '12'
    },
    {
      id: 2,
      username: 'Shez had',
      timestamp: 'Now',
      content: 'Assigment Reminder!!!',
      postImage: 'https://miro.medium.com/v2/resize:fit:1400/1*enSiKVt1B1EvNj6_Kc6dZQ.jpeg',
      profilePic: 'https://avatars.githubusercontent.com/u/93990677?v=4',
      likes: '👍 120 others',
      comments: '12'
    },
    {
      id: 4,
      username: 'Ali Khan',
      timestamp: 'Tuesday at 2:00 PM',
      content: 'Learning React is fun!',
      postImage: 'https://www.joyofreact.com/og-image.jpg',
      profilePic: 'https://scontent.fkhi25-1.fna.fbcdn.net/v/t1.6435-9/46397998_310443836349692_6588158087473922048_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFfsUx_nDLm4OP3hMh60LElz42U9YhUiUnPjZT1iFSJSc5yrIKJ-Xv8yo6oRzEbm17vyJE_vOIOIbUs8_HMx19m&_nc_ohc=9U7m73cZPg4Q7kNvgFYPJQI&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=A6o_wpdk2-UGvcTEk12rIi-&oh=00_AYAbQpE8Byo47M72D9yd9P9nxsVBt22-2EmFpH4-qAj4jA&oe=6749A57B',
      likes: '👍 120 others',
      comments: '12'
    },
    {
      id: 5,
      username: 'Muzammil Mansoori',
      timestamp: 'Monday at 11:00 AM',
      content: 'Never give up, start again ❤️',
      postImage: 'https://scontent.fkhi25-1.fna.fbcdn.net/v/t39.30808-6/461555429_2266892350370239_3754094237370055138_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHrsOe-cldA_iNr9lfl76eSqY7eGTv8nv-pjt4ZO_ye_w5ebVwf2fL-c9lX0yQsh6Uw39TBEL0CdgUiWuvR1Iup&_nc_ohc=qEK3BfhnpT0Q7kNvgEC01cy&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=AaLs88O6Bp5hIKVJl4sA1_z&oh=00_AYDKHTGkyxaIOSeUM_eZqp6UldE82PtFcBOpzaU912kuuQ&oe=67248BAA',
      profilePic: 'https://scontent.fkhi25-1.fna.fbcdn.net/v/t39.30808-6/459572664_2252557268470414_4379880105446805453_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECPe6ppantx3IHxZnlQV7IRYyoeiBM-XdFjKh6IEz5d-aRkKVqALc4HCXfilyqBz4A9MZpKSO9WKgo5lIKbqRJ&_nc_ohc=sD6jZt8QLmUQ7kNvgHKjk7x&_nc_zt=23&_nc_ht=scontent.fkhi25-1.fna&_nc_gid=A3DZWW4re0fZKvyYE4rQssV&oh=00_AYCKHpLAQrvQeln-IwtVV3GLp9ytyleqhThte29Xdvne7A&oe=67247F47',
      likes: '❤️ 291 others',
      comments: '55'
    },
    // Add more posts as needed
  ];

  return (
    <>
    <Header />
    <div className="App">
      {postsData.map(post => (
        <FacebookPost
          key={post.id}
          username={post.username}
          timestamp={post.timestamp}
          content={post.content}
          postImage={post.postImage}
          profilePic={post.profilePic}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
    </>
  );
}

export default App;
