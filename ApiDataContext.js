// ApiDataContext.js
import { createContext, useState, useEffect } from 'react';

const ApiDataContext = createContext();

const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    fetch('http://localhost:3000/api/login')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching API data:', error));
  }, []);

  return (
    <ApiDataContext.Provider value={{ apiData }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export { ApiDataContext, ApiDataProvider };
