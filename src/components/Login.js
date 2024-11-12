import React from 'react';
import { StoicIdentity } from 'ic-stoic-identity';

function Login({ onAuth }) {
  const login = async () => {
    const identity = await StoicIdentity.connect();
    if (identity) {
      onAuth();
    }
  };

  return (
    <div>
      <button onClick={login}>Login with Internet Identity</button>
    </div>
  );
}

export default Login;
