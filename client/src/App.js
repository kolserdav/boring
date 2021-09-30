import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from 'react-redux'
import Routes from './routes'
import Header from './components/Header'
import Invitation from "./components/Invitation";
import Tutorial from "components/Tutorial";
import { updateToken } from "./actions/userActions";
import { checkAuth } from "./store/authSlice";

function App() {
  const isAuth = useSelector(checkAuth)
  const [invitationVisible, setInvitationvisible] = useState(false);
  const [tutorialVisible, setTutorialVisible] = useState(true);

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
        {invitationVisible && !isAuth && <Invitation setInvitation={setInvitationvisible} />}
        {tutorialVisible && !isAuth && <Tutorial closeHandler={() => setTutorialVisible(false)} />}
      </Router>
    </div>
  );
}

export default App;