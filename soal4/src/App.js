import React, { useState } from "react";
import "./App.css";
import GitHubLogin from "./GithubLogin";

function App() {
  const [name, setName] = useState("");

  return (
    <div className='App'>
      <header className='App-header'>
        {name && <h2>Hai {name}</h2>}
        <GitHubLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          redirectUri={process.env.REACT_APP_REDIRECT_URI}
          onSuccess={(name) => setName(name)}
          onFailure={(resp) => console.log(resp)}
        />
      </header>
    </div>
  );
}

export default App;
