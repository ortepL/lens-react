import React from 'react';
import nav from './Navigator.module.css';

function Navigator () {
    return (
    <nav>
      <ul className={nav.item}>
        <li><link to='/profiles'>Профиль</link></li>
        <li><link to='/dialogs'>Сообщения</link></li>
        <li><a href='#3'>Новости</a></li>
        <li><a href='#3'>Музыка</a></li>


        <li><a href='#3'>Настройки</a></li>
      </ul>
    </nav>
    );
}

export default Navigator;
