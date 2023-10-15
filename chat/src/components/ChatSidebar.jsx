import React from 'react';

const ChatSidebar = ({ rooms, onRoomClick }) => {
  return (
    <aside id="chat-sidebar">
      <h2>Customer Chat</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room}>
            <a href={`#${room}`} onClick={() => onRoomClick(room)}>
              {room}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChatSidebar;
