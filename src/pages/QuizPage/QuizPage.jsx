import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './QuizPage.scss'

export default function QuizPage() {
  return (
    <>
    <Header />
    <article className="quiz">
        <div className="quiz__header">
            <h1 className="quiz__header-title">Basic Concepts of RRSP</h1>
        </div>
        
        <div className="quiz__container">
            <div className="quiz__question-counter">
                <h2 className="quiz__question-counter-text">Question 1/25</h2>
            </div>
            <div className="quiz__question">
                <h2 className="quiz__question-text">Which of the following best describes a Registered Retired Savings Plan? (RRSP)</h2>
            </div>
            <form className="quiz__answers">
                <ul className="quiz__answers-list">
                    <li className="quiz__answers-item"><button className="quiz__answers-btn">An RRSP is a savings account that allows for tax-free withdrawals at any time.</button></li>
                    <li className="quiz__answers-item"><button className="quiz__answers-btn">Contributions to an RRSP are not tax-deductible.</button></li>
                    <li className="quiz__answers-item"><button className="quiz__answers-btn">An RRSP is a retirement savings plan that offers tax advantages to individuals, where contributions are tax-deductible and the investments grow tax-deferred until withdrawal.</button></li>
                    <li className="quiz__answers-item"><button className="quiz__answers-btn">Withdrawals from an RRSP are tax-free if taken before retirement age.</button></li>
                </ul>
            </form>
        </div>
    </article>
    </>
  )
}
