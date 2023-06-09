import { useState } from 'react';
import TypeMessages from './components/TypeMessages';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import MessagesBody from './components/MessagesBody';
import DirectMessages from './components/DirectMessages';
import Channels from './components/Channels';
import { Grid } from '@mui/material';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [loginHeaders, setLoginHeaders] = useState(null);
  const [selectedChannelName, setSelectedChannelName] = useState('');
  const [directMessage, setDirectMessage] = useState(null)

  const handleLoginSuccess = (data, authHeaders) => {
    setIsLoggedIn(true);
    setUserEmail(data.email);
    setLoginHeaders(authHeaders); // Changed from setAuthHeaders to setLoginHeaders
    console.log('Auth Headers:', authHeaders);
  };

  const handleSignUpSuccess = () => {
    setIsLoggedIn(true);
    setUserEmail(data.email);
    setLoginHeaders(authHeaders); // Changed from setAuthHeaders to setLoginHeaders
    console.log('Auth Headers:', authHeaders);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLoginClick = () => {
    setShowSignUp(false);
  };

  const handleDirectMessage = (message) => {
    setDirectMessage(message)
  }

  if (!isLoggedIn) {
    if (showSignUp) {
      return (
        <div>
          <SignUp onSignUpSuccess={handleSignUpSuccess} onLoginReturn={handleLoginClick} />
        </div>
      );
    } else {
      return (
        <div>
          <Login onLogin={handleLoginSuccess} onSignUpClick={handleSignUpClick} />
        </div>
      );
    }
  }

  return (
    <Grid container style={{ marginTop: '65px', backgroundColor: 'white', borderRadius: '20px', width: '1400px', height: '930px' }}>
      <Grid item container direction="column" xs={3} style={{ borderRight: 'solid 1px #3F0E40', padding: '30px' }}>
        <Grid item xs={5} style={{ borderBottom: 'solid 1px #3F0E40' }}>
          <Sidebar />
        </Grid>
        <Grid item xs={3} style={{ borderBottom: 'solid 1px #3F0E40' }}>
          <Channels loginHeaders={loginHeaders} onSelectChannel={setSelectedChannelName}/>
        </Grid>
        <Grid item xs={4}>
          <DirectMessages loginHeaders={loginHeaders} />
        </Grid>
      </Grid>
      <Grid item container direction="column" xs={9} style={{}}>
        <Grid item xs={1} style={{ borderBottom: 'solid 1px #3F0E40', paddingLeft: '10px', paddingRight: '20px' }}>
          <Topbar userEmail={userEmail} />
        </Grid>
        <Grid item xs={8} style={{ borderBottom: 'solid 1px #3F0E40', padding: '20px' }}>
          <MessagesBody loginHeaders={loginHeaders} selectedChannel={selectedChannelName} directMessage={directMessage} userEmail={userEmail} />
        </Grid>
        <Grid item xs={2} style={{ padding: '27px' }}>
          <TypeMessages loginHeader={loginHeaders} setTypeMessage={handleDirectMessage}  />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;