import React, { useState } from 'react';
import Login from './components/Login';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login onAuth={() => setIsAuthenticated(true)} />
      ) : (
        <>
          <h2>Welcome to Cloud Storage</h2>
          <FileUpload />
          <FileDownload />
        </>
      )}
    </div>
  );
}

export default App;
