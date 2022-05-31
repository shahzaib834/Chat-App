import './App.css';
import { Button } from '@chakra-ui/react';
import { Route, Router } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ChatsPage from './Pages/ChatsPage';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={HomePage} exact />
      <Route path='/chats' component={ChatsPage} />
    </div>
  );
}

export default App;
