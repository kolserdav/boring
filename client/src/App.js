import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from 'react-redux'
import Routes from './routes'
import Header from './components/Header'
import Invitation from "./components/Invitation";
import { updateToken } from "./actions/userActions";
import { checkAuth } from "./store/authSlice";

function App() {
  const isAuth = useSelector(checkAuth)
  const [invitationVisible, setInvitation] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      updateToken(token)
    }
  }, [])


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        {(invitationVisible && !isAuth) ?
          <Invitation setInvitation={setInvitation} /> :
          null
        }
      </Router>
    </div>
  );
}

export default App;