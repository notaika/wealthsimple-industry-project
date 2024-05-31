import ResourceCard from "../../components/ResourceCard/ResourceCard";
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import "./ResourcePage.scss" 
function ResourcePage(){
  return(
    <div className="resource-page">
      <Header/>
      <div  className="resource-page__hero">
      <h1  className="resource-page__header"> Introduction to RRSP</h1>
      </div>
      <Navbar/>
      <h1 className="resource-page__overview"> Course Overview</h1>
      <h4>Introduction</h4>
      <ul className="resource-page__list">
        <li className="resource-page__item">
          <div className="resource-page__progress"></div>
            RRSP Basics
        </li>
        <li className="resource-page__item">
          <div className="resource-page__progress"></div>
          RRSP Eligibility
        </li>
      </ul>
      <h4>Introduction</h4>
      <ul className="resource-page__list">
        <li className="resource-page__item">
          <div className="resource-page__progress"></div>
          Topic 1
        </li>
        <li className="resource-page__item">
          <div className="resource-page__progress"></div>
          Topic 2
        </li>
        <li className="resource-page__item">
        <div className="resource-page__progress"></div>
          Topic 3
        </li>
      </ul>

    </div>
  )
}

export default ResourcePage;
