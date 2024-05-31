import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import wsLogo from '../../assets/wealthsimple-logo.png';
import './Header.scss'

export default function Header() {
    const location = useLocation();

    const isActiveCurriculum = location.pathname.includes('curriculum')
    const isActiveQuiz = location.pathname.includes('quiz');

    const isCourseActive = location.pathname.includes('quiz') || location.pathname.includes('curriculum');

  return (
    <header className='head'>
        <div className="head--top">
            <Link to='/'><img src={wsLogo} alt="Wealthsimple logo" className="head__logo" /></Link>
            <Link to='/rewards' className="head__credits">Credits: 40</Link>
        </div>
        <div className={`head--bot ${isCourseActive ? '' : 'head--active'}`}>
        <nav className="head__nav ">
            <Link to='/resources/curriculum' className={`head__link ${isActiveCurriculum ? 'head__link--active' : ''}`}>Curriculum</Link>
            <Link to='/resources/quiz' className={`head__link ${isActiveQuiz ? 'head__link--active' : ''}`}>Quiz</Link>
        </nav>
        </div>
    </header>
  )
}
