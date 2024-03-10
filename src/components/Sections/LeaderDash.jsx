import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Box, VStack, Heading } from '@chakra-ui/react';
import SideBar from '../Elements/SideBar';
import Nav from '../Elements/Nav';
import "./LeaderDash.css";
import { product } from './data'; // Importing data from data.js

// Recharts imports
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts';


const data01 = [
  { name: 'Iphone', value: 400 },
  { name: 'Android', value: 700 },
  { name: 'Google Pixel', value: 100 },
  // { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];


  const data = [
    { name: "Amazon", users: 2000000000 },
    { name: "Flipkart", users: 1500000000 },
    { name: "Comapny-C", users: 1000000000 },
    { name: "Company-D", users: 500000000 },
  ];

const LeaderDash = () => {
  const [response, setResponse] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Fetching data from an API
    axios.get('https://spit-hackthn.vercel.app/get-user-data/deepgohil')
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        bg="gray.200"
        w="250px"
        h="100vh"
        position="fixed"
        top="0"
        left="0"
        overflowY="auto"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      >
        <SideBar name={response.username} />
      </Box>

      {/* Content */}
      <Box ml="250px" p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Nav />

        {/* Main Content */}
        <VStack spacing="4" mt="60px">
          <Heading size="lg"> {response.username}</Heading>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="container">
            <div className="chart-container">
              <div className="chart-box">
                <h2></h2>
                <PieChart width={400} height={400}>
                  <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                  <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                  <Tooltip />
                </PieChart>
              </div>

              <div className="chart-box">
                <h2></h2>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
              </div>
            </div>

            <div className="table-container">
              <h2>Table</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    {/* <th>Ratings</th> */}
                  </tr>
                </thead>
                <tbody>
                  {product.map((item, index) => (
                    <tr key={index}>
                      <td>{item.price}</td>
                      <td>{item.brand}</td>
                      <td>{item.price}</td>
                      <td>{item.ratings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LeaderDash;