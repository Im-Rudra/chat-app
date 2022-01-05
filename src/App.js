import React from 'react';
import Join from './pages/Join/Join';
import Chat from './pages/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/join" element={<Join />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
