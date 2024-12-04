import './App.css';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './Components/Login';
import Dashboard from "./Components/Dashboard";

function App() {

  return (
    <div className="font-sans">
      {/* <LoginForm /> */}
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
