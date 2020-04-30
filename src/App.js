import React from 'react';
import Application from './components/Application';
import UserProvider from './providers/UserProvider';

function App() {

  return (
    <div className="App">
        <link rel="stylesheet" type="text/css" href="src/bulma.min.css"/>
        <UserProvider>
          <Application/>
        </UserProvider>
    </div>
  );
}

export default App;
