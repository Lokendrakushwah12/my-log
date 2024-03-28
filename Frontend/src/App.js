import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Nav from './components/Nav.js';
import Search from './components/Search.js';
import Mylogs from './components/Mylogs.js';
import Pending from './components/Pending.js';
import Completed from './components/Completed.js';

function App() {

  return (
    <Router>
      <div className="flex">
        <Nav />
        <div className="flex w-full ml-[120px] flex-col justify-start pt-12 items-center gap-8">
          <Search />
          <Routes>
            <Route path="/" element={<Mylogs />} />
            <Route path="/tasks" element={<Pending />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
          {/* <Mylogs /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
