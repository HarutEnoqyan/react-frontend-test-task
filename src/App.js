import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CreateEvent, Event, Landing, NotFound } from './pages';
import { useSelector } from 'react-redux';
import { event } from './store/event'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/event" element={<Event />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
