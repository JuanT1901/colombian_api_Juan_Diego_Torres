const Tabs = ({ activeTab, onTabClick}) => {
  return (
    <div className="tabs">
      <button 
        className={activeTab === 'presidents' ? 'active' : ''}
        onClick = {() => onTabClick('presidents')}
      >
        Presidents
      </button>
      <button 
        className={activeTab === 'touristAttractions' ? 'active' : ''}
        onClick = {() => onTabClick('touristAttractions')}
      >
        Tourist Attractions
      </button>
      <button 
        className={activeTab === 'airports' ? 'active' : ''}
        onClick = {() => onTabClick('airports')}
      >
      Airports
      </button>
    </div>
  )
}
export default Tabs