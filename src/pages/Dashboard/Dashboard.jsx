import React from 'react';
import { Link } from 'react-router-dom';
import wealthProto from '../../assets/wealthsimple-proto.png';
import rightArrow from '../../assets/right-arrow.png';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="dashboard">
        <div className="dashboard__resources">
            <div className="dashboard__resources-card">
                <h2 className="dashboard__resources-title">Learn and Earn</h2>
                <Link to='/resources' className='dashboard__resources-link'>Explore Resources <img src={rightArrow} alt="A right arrow icon for link" className="dashboard__resources-icon" /></Link>
            </div>
        </div>
    </div>
  )
}
