import React from "react";
import { Link } from "react-router-dom";
import "./RewardsPage.scss";
import Header from "../../components/Header/Header";

export default function RewardsPage() {
  return (
    <>
    <Header />
    <article className="rewards">
      <h1 className="rewards__title">Welcome, Aika!</h1>
      <div className="rewards__stats-container">
        <div className="rewards__stats-level">
          <h3 className="rewards__stats-title rewards__stats-title-level">Your current level</h3>
          <div className="rewards__stats-row">
            <h2 className="rewards__stats-lvl">Level 2</h2>
            <h2 className="rewards__stats-exp">380 EXP</h2>
          </div>
          <div class="rewards__stats-progress">
            <div class="rewards__stats-bar"></div>
          </div>
          <div className="rewards__stats-row">
            <span className="rewards__stats-progress-lvl">Level 2</span>
            <span className="rewards__stats-progress-lvl">Level 3</span>
          </div>
        </div>
        <div className="rewards__stats-bot">
          <div className="rewards__stats-balance">
            <h3 className="rewards__stats-title">Your balance</h3>
            <p className="rewards__stats-bal">40 Credits</p>
            <Link to="/resources" className="rewards__stats-btn">
              Earn Credits
            </Link>
          </div>
          <div className="rewards__stats-invest">
            <h3 className="rewards__stats-title">Invest</h3>
            <p className="rewards__stats-inv">Current Investments: 0</p>
            <Link to="/invest" className="rewards__stats-btn">
              Invest Credits
            </Link>
          </div>
        </div>
      </div>

      <div className="rewards__choices">
        <h1 className="rewards__choices-title">Portfolios</h1>
        <ul className="rewards__list">
            <li className="rewards__list-item">
                <h1 className="rewards__list-title">Expenses</h1>
                <p className="rewards__list-description">"Monitor your daily spending and track where your money goes. Gain insights to help you stay within your budget."</p>
                <button className="rewards__list-btn">Expenses</button>
            </li>
            <li className="rewards__list-item">
                <h1 className="rewards__list-title">Investments</h1>
                <p className="rewards__list-description">"Keep an eye on your investment portfolio. Track performance and make informed decisions to maximize returns."</p>
                <button className="rewards__list-btn">Investments</button>
            </li>
            <li className="rewards__list-item">
                <h1 className="rewards__list-title">Savings</h1>
                <p className="rewards__list-description">"Set savings goals and track your progress. Stay motivated to reach your financial objectives."</p>
                <button className="rewards__list-btn">Savings</button>
            </li>
            <li className="rewards__list-item">
                <h1 className="rewards__list-title">Debt</h1>
                <p className="rewards__list-description">"Manage and reduce your debt effectively. Track payments and stay on top of your debt payoff plan."</p>
                <button className="rewards__list-btn">Debt</button>
            </li>
            <li className="rewards__list-item">
                <h1 className="rewards__list-title">Crypto</h1>
                <p className="rewards__list-description">"Track your cryptocurrency investments in real-time. Stay updated on market trends and your portfolio’s performance."</p>
                <button className="rewards__list-btn">Crypto</button>
            </li>
        </ul>
      </div>
    </article>
    </>
  );
}
