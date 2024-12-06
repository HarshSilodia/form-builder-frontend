import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormEditor from './components/FormEditor';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FormEditor />} />
      {/* Add a route for form preview */}
    </Routes>
  </Router>
);

export default App;
