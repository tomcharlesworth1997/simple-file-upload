import logo from './logo.svg';
import './App.css';
import React from 'react';
import FileUpload from './components/FileUpload';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <FileUpload />
      </header>
    </div>
  );
}

export default App;
