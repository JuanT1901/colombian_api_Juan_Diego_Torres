import axios from "axios"
import { useEffect, useState } from "react"

const AirportsByRegion = () => {
  const [region, setRegion] = useState([])

  useEffect(() => {
    const fetchingAirportsDepartmentsRegions = async () => {
      const [airportsResponse, departmentsResponse, regionsResponse] = await Promise.all ([
        axios.get("https://api-colombia.com/api/v1/Airport"),
        axios.get("https://api-colombia.com/api/v1/Department"),
        axios.get("https://api-colombia.com/api/v1/Region"),
      ])

      let airports = airportsResponse.data;
      let departmentsData = departmentsResponse.data;
      let regionsData = regionsResponse.data;

      const departments = departmentsData.reduce((acc, department) => {
        acc[department.id] = department.name;
        return acc;
      }, {});

      const regions = regionsData.reduce((acc, region) => {
        acc[region.id] = region.name;
        return acc;
      }, {});

      airports.map((airport) => {
        const airportsByRegion = airports.reduce((acc, airport) => {
          const regionName = regions[airport.department.regionId];
          const departmentName = airport.department.name;
          const city = airport.city.name;
          const type = airport.type;

          if(!acc[regionName]){
            acc[regionName] = {}
          }

          if (!acc[regionName][departmentName]) {
            acc[regionName][departmentName] = {};
          }

          if (!acc[regionName][departmentName][city]) {
            acc[regionName][departmentName][city] = {};
          }

          if (!acc[regionName][departmentName][city][type]) {
            acc[regionName][departmentName][city][type] = 0;
          }

          acc[regionName][departmentName][city][type] += 1;
          return acc;
        }, {});
        setRegion(airportsByRegion)
      })
    }
    fetchingAirportsDepartmentsRegions();
  }, []);

  return (
    <div>AirportsByRegions</div>
  )
}
export default AirportsByRegion