import './App.css';
// import AddQuestion from './components/AddQuestion';
// import AdminLogin from './components/AdminLogin';
// import QuestionsUpdate from './components/QuestionsUpdate';
import Questions from './components/Questions';
import Settings from './components/Settings';
import FinalScreen from './components/FinalScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionsList from './components/QuestionList';
import QuestionUpdate from './components/QuestionUpdate';
import AddQuestion from './components/AddQuestion';

function App() {
  return (
    <Router>
      {/* Wrapper */}
      <div>
        <Routes>
          {/* <Route path='/' element={<AdminLogin />} />
        <Route path='/questionscrud' element={<QuestionsUpdate />} /> */}
          <Route path='/' element={<Settings />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/score' element={<FinalScreen />} />
          <Route path='/update' element={<QuestionsList />} />
          <Route path='update/:questionId' element={<QuestionUpdate />} />
          <Route path='/add' element={<AddQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
