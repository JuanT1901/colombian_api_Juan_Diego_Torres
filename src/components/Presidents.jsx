import axios from "axios";
import { useEffect, useState } from "react";
import EntityCount from "./EntityCount";

const Presidents = () => {
  const [groupedPresidents, setGroupedPresidents] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-colombia.com/api/v1/President")
      .then(({ data }) => {
        const presidentsByParty = data.reduce((acc, president) => {
          const party = president.politicalParty;
          if (!acc[party]) {
            acc[party] = [];
          }
          acc[party].push(president);
          return acc;
        }, {});

        const sortedParties = Object.entries(presidentsByParty)
          .sort((a, b) => b[1].length - a[1].length)
          .map(([party, presidents]) => ({
            party,
            presidents,
            count: presidents.length,
          }));

        setGroupedPresidents(sortedParties);
      })
      .catch((err) => {
        console.error("Error fetching presidents:", err);
      });
  }, []);

  let totalRecords = () => {
    let total = 0;

    groupedPresidents.map((party) => {
      total += party.count;
    })
    return total
  }

  return (
    <div>
      <h1>Presidents by Political Party</h1>
      <EntityCount data={groupedPresidents}/>
      <ul>
        {groupedPresidents.map(({ party, presidents, count}) => (
          <li key={party}>
            <h2>{party} ({count} presidents )</h2>
            <ul>
              {presidents.map(president => (
                <li key ={president.id}>{president.name} {president.lastName}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Presidents;
