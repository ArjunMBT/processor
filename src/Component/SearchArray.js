// import React, { useState } from 'react';

import './PageMain.css';



// const SearchArray = ({ dataArray }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     const results = dataArray.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//     setSearchTerm('');
//   };

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <label htmlFor="searchInput">Search:</label>
//         <br></br>
        
//         <input
//           type="text"
//           id="searchInput"
//           name="searchInput"
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <br></br>
//         <button type="submit">Search</button>
//       </form>
//       {searchResults.length > 0 ? (
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>
//               <h3>{result.name}</h3>
//               <p>{result.description}</p>
//               <p>{result.date}</p>
//               <p>{result.location}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchArray;
import React, { useState } from 'react';

const SearchArray = ({ dataArray }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const results = dataArray.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setSearchTerm('');
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchInput"><h3>Search:</h3></label>
        
        <textarea
          type="text"
        //  className="searchInput"
        className='search-input id2'
          name="searchInput"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit" className='Search button'>Search</button>
        
      </form>
      <div style={{ height: '400px', overflowY: 'scroll' }}>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <p>{result.date}</p>
                <p>{result.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchArray;
