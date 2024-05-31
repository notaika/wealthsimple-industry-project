import Dashboard from './pages/Dashboard/Dashboard';
import ResourcePage from './pages/ResourcePage/ResourcePage';
import QuizPage from './pages/QuizPage/QuizPage';
import CurriculumPage from './pages/CurriculumPage/CurriculumPage';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/resources' element={<ResourcePage />} />
      <Route path='/resources/quiz' element={<QuizPage />} />
      <Route path='/resources/curriculum' element={<CurriculumPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
