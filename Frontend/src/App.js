import './style.css';
import Nav from './components/Nav.js';
import Search from './components/Search.js';
import Mylogs from './components/Mylogs.js';

function App() {

  return (
    <>
      <div className="flex">
        <Nav />
        <div className="flex w-[1320px] flex-col justify-center items-center gap-8">
          <Search />
          <Mylogs />
        </div>
      </div>
    </>
  );
}

export default App;
