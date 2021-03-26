import React,{ useState } from 'react';
import Form from './Components/Form';
import Links from './Components/Links';
import Login from './Components/Login/login';
import Register from './Components/Login/register'
import './App.css';
import './App.scss';

function App() {
  const [inputLink, setInputLink] = useState('');
  const [links, setLinks] = useState([])
  const [activateLogin , setActivateLogin] = useState(false)
  const [activateRegister , setActivateRegister] = useState(false)

  const activeLogin = () => {
    setActivateLogin(!activateLogin)
  }

  const activeRegister = () => {
    setActivateRegister(!activateRegister)
  }

  return (
    <div className="App">
      <header>
        <h1>WeSpy</h1>
        <nav>
          <ul>
            <li onClick={activeLogin}>Login</li>
            <li onClick={activeRegister}>Register</li>
          </ul>
        </nav>
      </header>
      <div>
        {activateLogin && <Login setActivate={setActivateLogin} activate={activateLogin} />}
        {activateRegister && <Register setActivate={setActivateRegister} activate={activateRegister} />}
      </div>
      <Form setInputLink={ setInputLink } links = { links } setLinks = { setLinks } inputLink = { inputLink }/>
      <Links links={ links } setLinks = {setLinks}/>
    </div>
  );
}

export default App;
