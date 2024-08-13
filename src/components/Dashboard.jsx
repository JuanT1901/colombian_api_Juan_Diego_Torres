import { useState } from "react"
import Presidents from "./Presidents";
import TouristAttractions from "./TouristAttractions";
import AirportsByDepartment from "./AirportsByDepartment";
import Tabs from "./Tabs";
import EntityCount from "./EntityCount";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState();

  const components = {
    presidents: Presidents,
    touristAttractions: TouristAttractions,
    airports: AirportsByDepartment
  }
  
  const ActiveComponent = components[activeTab];

  return (
    <div>
      <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
      <div className="content">
        {ActiveComponent ? <ActiveComponent /> : <div>Select a div</div>}
      </div>
    </div>
  )
}
export default Dashboard