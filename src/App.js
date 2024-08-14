import { useState, useEffect, createContext } from 'react';
import './App.css';
import Category from './components/Category/Category';
import NavBar from './components/NavBar/NavBar';
import initialData from './data.json';
import { FiPlus } from "react-icons/fi";
import Modal from './components/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

export const DashboardContext = createContext();

function App() {
  const [data, setData] = useState(() => {
    const localStorageData = localStorage.getItem('dashboardData');
    return localStorageData ? JSON.parse(localStorageData) : initialData;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('dashboardData', JSON.stringify(data));
  }, [data]);

  const handleAddCategory = (name) => {
    const newCategory = {
      id: uuidv4(), 
      name,
      widgets: []
    };
    setData(prevData => ({
      ...prevData,
      categories: [...prevData.categories, newCategory]
    }));
  };

  return (
    <DashboardContext.Provider value={[data, setData]}>
      <div className="App">
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className='dashboard-container'>
          <div className='add-categery-con'>
            <h1>CNAPP Dashboard</h1>
            <button onClick={() => setIsModalVisible(true)}>
              <FiPlus className='i'/> Add Category
            </button>
          </div>
          {data.categories.map((eachCategory) => (
            <Category
              details={eachCategory}
              key={eachCategory.id}
              searchTerm={searchTerm}
            />
          ))}
        </div>
        <Modal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onAdd={handleAddCategory}
        />
      </div>
    </DashboardContext.Provider>
  );
}

export default App;
