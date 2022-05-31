import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatsPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const data = await (await axios.get('/api/chat')).data;

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <div>{chats[0].chatName}</div>;
    </div>
  );
};

export default ChatsPage;
