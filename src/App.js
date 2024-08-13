import './App.css';
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import Category from './components/Category/Category';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <nav className='nav-container'>
        <h1>Dashboard</h1>
        <div className='search-user-con'>
          <div className='input-con'>
            <input type="search" placeholder='Search' />
            <CiSearch className='searchIcon' />
          </div>
          <div className='user-details'>
            <CgProfile className='userIcon' />
            <h3>Accuknox</h3>
          </div>
        </div>
      </nav>
      <div className='dashboard-container'>
      {data.categories.map((eachCategory)=> <Category details={eachCategory} key={eachCategory.id} />)}
      </div>
    </div>
  );
}

export default App;
