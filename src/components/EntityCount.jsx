const EntityCount = ({ activeTab, data }) => {
  let total = 0;

  const countMethods = {
    'presidents' : () => {
      data.map((party) => {
        total += party.count
      })
      return total
    }
  }

  const getCount = () => {
    return countMethods[activeTab] ? countMethods[activeTab]() : 0;
  };

  return (
    <div>
      <h3>Total Records : {getCount()}</h3>
    </div>
  )
}
export default EntityCount