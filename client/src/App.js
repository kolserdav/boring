import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './components/routes'
import Header from './components/Header'
import { Check } from "./action/userAction";
import { useDispatch } from 'react-redux'
import { setUser } from "./reducer/userReducer";
import Loader from "./components/Loader";
import Invitation from "./components/Invitation";

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [invitationVisible, setInvitation] = useState(true);

  useEffect(() => {
    if (loading) {
      Check().then(data => {
        if (data) {
          dispatch(setUser(data))
        }
      }).finally(() => {
        setTimeout(() => setLoading(false), 2000)
      })
    }
  })
  if (loading) {
    return <Loader />
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        {invitationVisible ?
          <Invitation setInvitation={setInvitation} /> :
          null
        }
      </Router>
    </div>
  );
}

export default App;
