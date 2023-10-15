import { useEffect, useState } from 'react'
import './App.css'
import { socket } from './libs/socket'

import ChatBox from './components/Chatbox'
import ChatSidebar from './components/ChatSidebar'
import FriendList from './components/FriendList'

function App() {
  const [currentRoom, setCurrentRoom] = useState('#Welcome');
  const rooms = ['Welcome', 'General', 'Update', 'React'];
  const [messages, setMessages] = useState([])

  const handleNewMessage = (data) => {
    console.log('received message : ', data)

    setMessages((messages) => [...messages, data])
  }
  const handleRoomClick = (room) => {
    setCurrentRoom(room);
    console.log(room);
    socket.emit('join-room', room);
  };

  useEffect(() => {
    socket.on('chat:message', handleNewMessage);

    return () => {
      socket.off('chat:message', handleNewMessage);
    };
  }, []);

  return (
    <div className="chat-container">
      <ChatSidebar rooms={rooms} onRoomClick={handleRoomClick} />
      <ChatBox messages={messages} />
      <FriendList />
    </div>
  )
}

export default App
