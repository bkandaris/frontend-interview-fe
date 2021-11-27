import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questions from './components/Questions';
import Settings from './components/Settings';
import FinalScreen from './components/FinalScreen';
import QuestionsList from './components/QuestionList';
import QuestionUpdate from './components/QuestionUpdate';
import AddQuestion from './components/AddQuestion';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
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
