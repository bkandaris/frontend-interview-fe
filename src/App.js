import './App.css';
// import AddQuestion from './components/AddQuestion';
import AdminLogin from './components/AdminLogin';
import QuestionsUpdate from './components/QuestionsUpdate';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path='/questionscrud' element={<QuestionsUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
