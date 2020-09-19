import React from 'react';
import p from './Post.module.css';

function Post (prostText) {
    return (
      <div className={p.item}>
        <img src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' />
        <p>{prostText.messejpost}</p>
        
      </div>
    );
}
export default Post;