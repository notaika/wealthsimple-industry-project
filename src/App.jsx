import Dashboard from './pages/Dashboard/Dashboard';
import ResourcePage from './pages/ResourcePage/ResourcePage';
import QuizPage from './pages/QuizPage/QuizPage';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/resources' element={<ResourcePage />} />
      <Route path='/resources/quiz' element={<QuizPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
