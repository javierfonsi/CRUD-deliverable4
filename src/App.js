import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/styles.css';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import { Header } from './components/Header/Header';

function App() {
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  const changeUser = (user) => {
    setUserSelected(user) 
  }

  const deselectUser = () => setUserSelected(null)
 

  return (
    <div className="App">
      <Header/>
      <div className='flex'>
        <UsersForm getUsers={getUsers}
          userSelected={userSelected}
          deselectUser={deselectUser}
        />
        <UsersList users={users}
          changeUser={changeUser}
          getUsers={getUsers}
        />
      </div>
    </div>
  );
}

export default App;
