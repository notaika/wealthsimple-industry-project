import React from 'react'
import CurriculumPage from '../CurriculumPage/CurriculumPage'
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import "./ResourcePage.scss"
import Header from '../../components/Header/Header';

export default function ResourcePage() {
  return (
    <div className="resource-page">
      <Header/>
      <div className="resource-page__header">
          <h1 className="resource-page__header--title">Unlock Your Financial Potential</h1>
      </div>
      <ResourceCard/>
    </div>
  )
}

