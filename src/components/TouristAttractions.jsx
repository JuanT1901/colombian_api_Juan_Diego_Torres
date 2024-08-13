import axios from "axios";
import { useEffect, useState } from "react";

export const TouristAttractions = () => {
  const [groupedAttractions, setGroupedAttractions] = useState([]);

  useEffect(() => {
    const fetchingAttractionsDepartments = async () => {
      const [attractionsResponse, departmentResponse] = await Promise.all([
        axios.get("https://api-colombia.com/api/v1/TouristicAttraction"),
        axios.get("https://api-colombia.com/api/v1/Department"),
      ]);

      let attractions = attractionsResponse.data;
      let departmentsData = departmentResponse.data;

      const departments = departmentsData.reduce((acc, department) => {
        acc[department.id] = department.name;
        return acc;
      }, {});

      attractions.map((attraction) => {
        let departmentId = attraction.city.departmentId;

        departmentsData.forEach((departmentInfo) => {
          if (departmentInfo.id === departmentId) {
            let department = departmentInfo.name;
            attraction.city.department = department;
          }
        });

        const attractionsByDepartment = attractions.reduce(
          (acc, attraction) => {
            const departmentsId = departments[attraction.city.departmentId];
            const city = attraction.city.name;

            if (!acc[departmentsId]) {
              acc[departmentsId] = {};
            }

            if (!acc[departmentsId][city]) {
              acc[departmentsId][city] = [];
            }

            acc[departmentsId][city].push(attraction);
            return acc;
          },
          {}
        );

        const sortedAttractions = Object.entries(attractionsByDepartment).map(
          ([department, cities]) => ({
            department,
            cities: Object.entries(cities).map(([city, attractions]) => ({
              city,
              attractions,
              count: attractions.length,
            })),
          })
        );

        setGroupedAttractions(sortedAttractions);
      });
    };
    fetchingAttractionsDepartments();
  }, []);

  return (
    <div>
      <h1>Tourist Attractions by Department and City</h1>
      {groupedAttractions.map(({ department, cities }) => (
        <div key={department}>
          <h2>{department}</h2>
          {cities.map(({ city, attractions, count }) => (
            <div key={city}>
              <h3>{city} ({count} attractions)</h3>
              <ul>
                {attractions.map(attraction => (
                  <li key={attraction.id}>{attraction.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TouristAttractions;
