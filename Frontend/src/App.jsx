import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import Mylogs from './components/Mylogs';
import Pending from './components/Pending';
import Completed from './components/Completed';
import './style.css';

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
