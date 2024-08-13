import axios from "axios";
import { useEffect, useState } from "react";

const AirportsByDepartment = () => {
  const [airportsByDepartment, setAirportsByDepartment] = useState([]);

  useEffect(() => {
    const fetchingAirportsDepartment = async () => {
      const [airportsResponse, departmentsResponse] = await Promise.all([
        axios.get("https://api-colombia.com/api/v1/Airport"),
        axios.get("https://api-colombia.com/api/v1/Department"),
      ]);

      let airports = airportsResponse.data;
      let departmentsData = departmentsResponse.data;

      airports.map((airport) => {
        const airportsByDepartment = airports.reduce((acc, airport) => {
          const departmentName = airport.department.name;
          const city = airport.city.name;

          if (!acc[departmentName]) {
            acc[departmentName] = {};
          }

          if (!acc[departmentName][city]) {
            acc[departmentName][city] = [];
          }

          acc[departmentName][city].push(airport);
          return acc;
        }, {});

        const sortedAirports = Object.entries(airportsByDepartment).map(
          ([department, cities]) => ({
            department,
            cities: Object.entries(cities).map(([city, airports]) =>
              ({
                city,
                airports,
                count: airports.length,
              })),
          })
        );
        setAirportsByDepartment(sortedAirports);
      });
    };
    fetchingAirportsDepartment();
  }, []);

  return (
    <div>
      <h1>Airports by Department and City</h1>
      {airportsByDepartment.map(({ department, cities}) => (
        <div key={department}>
          <h2>{department}</h2>
          {cities.map(({ city, airports, count }) => (
            <div key={city}>
              <h3>{city} ({count} airports)</h3>
              <ul>
                {airports.map(airport => (
                  <li key={airport.id}>{airport.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  ) 
};
export default AirportsByDepartment;
