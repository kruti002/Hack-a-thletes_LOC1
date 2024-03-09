// CSVReaderComponent.js
import React, { useState } from "react";
import CSVReader from "react-csv-reader";

const CSVReaderComponent = ({ handleCSVData }) => {
  const handleFile = (data) => {
    // Pass the CSV data to the parent component
    handleCSVData(data);
  };

  return <CSVReader onFileLoaded={handleFile} />;
};

const App = () => {
  const [csvData, setCSVData] = useState([]);

  const handleCSVData = (data) => {
    // Process the CSV data as needed
    setCSVData(data);
  };

  return (
    <div>
      <h1>CSV File Loader</h1>
      <CSVReaderComponent handleCSVData={handleCSVData} />

      {/* Display the loaded CSV data */}
      <div>
        <h2>CSV Data:</h2>
        <pre>{JSON.stringify(csvData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
