import React from 'react';

const ChatSidebar = ({ rooms, onRoomClick }) => {
  return (
    <aside id="chat-sidebar">
      <h2>Chat App with socket.io + React</h2>
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
