import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import wsLogo from '../../assets/wealthsimple-logo.png';
import './Header.scss'

export default function Header() {
    const location = useLocation();

    const isActiveCurriculum = location.pathname.includes('curriculum')
    const isActiveQuiz = location.pathname.includes('quiz');

  return (
    <header className='head'>
        <div className="head--top">
            <Link to='/'><img src={wsLogo} alt="Wealthsimple logo" className="head__logo" /></Link>
            <p className="head__credits">Credits: 0</p>
        </div>
        <div className="head--bot">
        <nav className="head__nav">
            <Link to='/resources/curriculum' className={`head__link ${isActiveCurriculum ? 'head__link--active' : ''}`}>Curriculum</Link>
            <Link to='/resources/quiz' className={`head__link ${isActiveQuiz ? 'head__link--active' : ''}`}>Quiz</Link>
        </nav>
        </div>
    </header>
  )
}
