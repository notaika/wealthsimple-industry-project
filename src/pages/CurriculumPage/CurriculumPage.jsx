import React from "react";
import { Link } from "react-router-dom";
import wsLogo from "../../assets/wealthsimple-logo.png";
import rightArrow from '../../assets/right-arrow.png';
import Header from "../../components/Header/Header";
import "./CurriculumPage.scss";

export default function CurriculumPage() {
  return (
    <>
      <Header />
      <article className="curriculum" curriculum>
        <div className="curriculum__header">
          <h1 className="curriculum__header-title">Introduction to RRSP</h1>
        </div>
        <h2 className="curriculum__overview">Course Overview</h2>
        <div className="curriculum__section">
            <div className="curriculum__lecture">
                <h3 className="curriculum__lecture-title">Unit 1: What is RRSP?</h3>
                <ul className="curriculum__lecture-list">
                    <li className="curriculum__lecture-item">Definition and Purpose <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item">History and Development in Canada <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item"><Link className="curriculum__lecture-quiz" to ='/resources/quiz'>Quiz 1: Basic Concepts of RRSP</Link></li>
                </ul>
            </div>
            
        </div>
        <div className="curriculum__section">
            <div className="curriculum__lecture">
                <h3 className="curriculum__lecture-title">Unit 2: Types of RRSPs</h3>
                <ul className="curriculum__lecture-list">
                    <li className="curriculum__lecture-item">Individual RRSP <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item">Spousal RRSP <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item">Group RRSP <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item"><Link className='curriculum__lecture-quiz' to ='/resources/quiz'>Quiz 2: Types of RRSPs</Link></li>
                </ul>
            </div>
        </div>
        <div className="curriculum__section">
            <div className="curriculum__lecture">
                <h3 className="curriculum__lecture-title">Unit 3: Contributions and Limits</h3>
                <ul className="curriculum__lecture-list">
                    <li className="curriculum__lecture-item">Annual Contribution Limits <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item">Carry-forward Room <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item">Over-contribution Penalties <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item"><Link className='curriculum__lecture-quiz' to ='/resources/quiz'>Quiz 3: Understanding RRSP Contributions and Limits</Link></li>
                </ul>
            </div>
        </div>
        <div className="curriculum__section">
            <div className="curriculum__lecture">
                <h3 className="curriculum__lecture-title">Unit 4: Tax Advantages and Implications</h3>
                <ul className="curriculum__lecture-list">
                    <li className="curriculum__lecture-item">How Contributions affect your taxable income <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item">Claiming RRSP Deductions <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></li>
                    <li className="curriculum__lecture-item"><Link className='curriculum__lecture-quiz' to ='/resources/quiz'>Quiz 4: Tax Deductability</Link></li>
                </ul>
            </div>
        </div>
        
      </article>
    </>
  );
}
