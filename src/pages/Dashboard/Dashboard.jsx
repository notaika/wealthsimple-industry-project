import React from 'react';
import { Link } from 'react-router-dom';
import wealthProto from '../../assets/wealthsimple-proto.png';
import rightArrow from '../../assets/right-arrow.png';
import vault from '../../assets/wealthsimple-learn-and-earn-image.png';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="dashboard">
        <div className="dashboard__resources">
            <div className="dashboard__resources-card">
                <h2 className="dashboard__resources-title">Learn and Earn</h2>
                <img className='dashboard__resources-image' src={vault} alt='vault' />
                <p className="dashboard__resources-description">Enhance your financial knowledge and earn rewards. Complete courses and activities to gain points and unlock exciting benefits.</p>
                <Link to='/resources' className='dashboard__resources-link'>Explore Resources <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></Link>
            </div>
        </div>
        <div className="dashboard__rewards">
            <div className="dashboard__rewards-card">
                <h2 className="dashboard__rewards-title">Rewards</h2>
                <p className="dashboard__rewards-description">Participate in various learning activities and earn credits that can be redeemed for exciting rewards!</p>
                <Link to='/rewards' className='dashboard__resources-link'>Redeem Rewards <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__rewards-icon" /></Link>
            </div>
        </div>
    </div>
  )
}