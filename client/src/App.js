import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from 'react-redux'
import Routes from './routes'
import Header from './components/Header'
import Loader from "./components/Loader";
import Invitation from "./components/Invitation";
import { updateToken } from "./action/userActions";
import { checkAuth } from "./components/pages/Auth/authSlice";

function App() {
  const [loading, setLoading] = useState(false)
  const isAuth = useSelector(checkAuth)
  const [invitationVisible, setInvitation] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      updateToken(token)
    }
  }, [])

  if (loading) {
    return <Loader />
  }
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