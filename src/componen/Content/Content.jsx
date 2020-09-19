import React from 'react';
import contn from './Content.module.css';
import Post from './MyPost/post/Post';

function Content () {
    return (
      <div>
        <div>
          <img src='https://www.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg' />
        </div>
        <div>ava + info</div>
        <div>My post</div>
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
        <div className={contn.post}>
          <Post messejpost='Test text from posts' />
          <samp>like</samp>
          <Post messejposts='I how you' />
          <samp>like</samp>
        </div>
      </div>
    );
}
export default Content;