import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes'
import Header from './components/Header'
import { check } from "./action/userActions";
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from "./components/pages/Auth/authSlice";
import Loader from "./components/Loader";
import Invitation from "./components/Invitation";

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const isAuth = useSelector(state => state.user.isAuth)
  const [invitationVisible, setInvitation] = useState(true);

  useEffect(() => {
    if (localStorage.token) {
      check()
        .then(data => {
          dispatch(setUser(data))
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
