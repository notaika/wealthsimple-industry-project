import ResourceCard from "../../components/ResourceCard/ResourceCard";
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
function ResourcePage(){
  return(
    <div className="resource-page">
      <Header/>
      <Navbar/>
      <h1> Course Overview</h1>
      <ResourceCard/>
    </div>
  )
}

export default ResourcePage;
