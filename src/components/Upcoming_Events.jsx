import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Flex, Box, VStack, Heading } from "@chakra-ui/react";
import { enIN } from "date-fns/locale";
import axios from "axios";
import SideBar from "../components/Elements/SideBar";
import Nav from "../components/Elements/Nav";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import "./Upcoming_Events.css";

const locales = {
  "en-IN": enIN,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "World NGO Day",
    allDay: true,
    start: new Date(2024, 3, 1),
    end: new Date(2024, 3, 1),
  },
  {
    title: "International Women's Day",
    start: new Date(2024, 3, 8),
    end: new Date(2021, 3, 8),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [response, setResponse] = useState([])

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <Flex>
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

      <Box ml="250px" p="4" flex="1" overflowY="auto">
        <Nav />
        <VStack spacing="4" mt="60px">
          <Heading size="lg"> {response.username}</Heading>
          {/* <div className="search-container">
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
          </div> */}
          <div className="App">
            <h1>Upcoming Events </h1>
            {/* <h2>Add New Event</h2> */}
            <div>
              {/* <input
                type="text"
                placeholder="Add Title"
                style={{ width: "20%", marginRight: "10px" }}
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <DatePicker
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
              <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                Add Event
              </button> */}
            </div>
            <Calendar
              localizer={localizer}
              events={allEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, margin: "50px" }}
            />
          </div>
        </VStack>
      </Box>
    </Flex>

  );
}

export default App;