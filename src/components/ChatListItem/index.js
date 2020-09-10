import React from 'react';
import './index.css'

export default ({onClick, active}) => {
  return (
    <div 
      className={`chatListItem ${active? 'active': ''}`}
      onClick={onClick}
    > 
    
      <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>

      <div className="chatListItem--lines">

        <div className="chatListItem--line">

          <div className="chatListItem--name">Deyvid William</div>
          <div className="chatListItem--date">19:00</div>

        </div>

        <div className="chatListItem--line">

          <div className="chatListItem--lastMsg">

            <p>Olá tudo bem?</p>

          </div>

        </div>

      </div>

    </div>
  );
}