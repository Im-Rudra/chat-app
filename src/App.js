import React from 'react';
import Join from './pages/Join/Join';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
