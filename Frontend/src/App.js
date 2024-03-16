import './style.css';
import Nav from './components/nav.js';
import Search from './components/search.js';
import Mylogs from './components/mylogs.js';

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
