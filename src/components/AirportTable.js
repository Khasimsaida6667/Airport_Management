// import React from 'react';
// import './AirportTable.css';


// function AirportTable() {
//   const airports = [
//     { name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
//     { name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
//     { name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
//     { name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
//     { name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
//   ];

//   return (
//     <div className="airport-table-container">
//       <table className="airport-table">
//         <thead>
//           <tr>
//             <th><input type="checkbox"  id='i'/></th>
//             <th>All Airports</th>
//             <th>Country</th>
//             <th>Code</th>
//             <th>Terminals</th>
//           </tr>
//         </thead>
//         <tbody>
//           {airports.map((airport, index) => (
//             <tr key={index} className="airport-row">
//               <td className='bor-le'><input type="checkbox" /></td>
//               <td>{airport.name}</td>
//               <td>{airport.country}</td>
//               <td>{airport.code}</td>
//               <td className='bor-ri'>{airport.terminals}</td>
              
//                 <button className="edit-button">✏️</button>
//                 <button className="delete-button">🗑️</button>
              
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AirportTable;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AirportTable.css';

function AirportTable() {
  const navigate = useNavigate();

  const airports = [
    { id: 1, name: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
    { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
    { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
    { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
    { id: 5, name: 'Dallas/Fort Worth International Airport', country: 'USA', code: 'DFW', terminals: 14 }
  ];

  const handleAirportClick = (airport) => {
    navigate(`/airport/${airport.id}`, { state: { airport } });
  };

  return (
    <div className="airport-table-container">
      <table className="airport-table">
        <thead>
          <tr>
            <th><input type="checkbox" id='i'/></th>
            <th>All Airports<i className="icon-dropdown"></i></th>
            <th>Country</th>
            <th>Code</th>
            <th>Terminals</th>
            
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.id} className="airport-row">
              <td className='bor-le'><input type="checkbox" /></td>
              <td onClick={() => handleAirportClick(airport)} style={{cursor: 'pointer'}}>{airport.name}</td>
              <td>{airport.country}</td>
              <td>{airport.code}</td>
              <td className='bor-ri'>{airport.terminals}</td>
              
                <button className="edit-button" onClick={() => handleAirportClick(airport)}>✏️</button>
                <button className="delete-button">🗑️</button>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AirportTable;