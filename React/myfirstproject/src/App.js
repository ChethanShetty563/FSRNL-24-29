import React from 'react';

import Header from './components/Header/Header';
import Post from './components/post/Post';

function App() {
  const posts = [
    {
      username: 'Chethan',
      caption: ' &#x1F525; Building a web front end &#x1F525;',
      imageUrl: 'https://www.techlifediary.com/wp-content/uploads/2020/06/react-js.png',
    },
    {
      username: 'nabendu82',
      caption: 'Such a beautiful world',
      imageUrl:
        'https://quotefancy.com/media/wallpaper/3840x2160/126631-Charles-Dickens-Quote-And-a-beautiful-world-you-live-in-when-it-is.jpg',
    },
  ];
  return (
    <div className="App">
      <Header />
      {posts.map((post, index) => {
        return <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} key={index} />;
      })}
    </div>
  );
}

export default App;
