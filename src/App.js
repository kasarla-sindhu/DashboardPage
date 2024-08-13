import './App.css';
import Category from './components/Category/Category';
import NavBar from './components/NavBar/NavBar';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='dashboard-container'>
      {data.categories.map((eachCategory)=> <Category details={eachCategory} key={eachCategory.id} />)}
      </div>
    </div>
  );
}

export default App;
