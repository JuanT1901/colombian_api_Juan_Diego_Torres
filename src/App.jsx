import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/colombia_dash" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/colombia_dash" replace />} />
      </Routes>
    </Router>
  )
}

export default App
