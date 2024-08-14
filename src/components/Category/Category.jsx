import './Category.css';
import React, { useContext, useState } from 'react';
import Widget from '../Widget/Widget';
import { FiPlus } from "react-icons/fi";
import { DashboardContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';

const Category = ({ details, searchTerm }) => {
  const { name, id, widgets } = details;
  const [data, setData] = useContext(DashboardContext);
  const [isAddWidget, setIsAddWidget] = useState(false);
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');

  const addWidget = () => {
    setIsAddWidget(true);
  };

  const addNewWidget = () => {
    setIsAddWidget(false);

    const newWidget = {
      id: uuidv4(),
      name: newName,
      text: newText,
    };

    const updatedCategories = data.categories.map((eachCategory) => {
      if (eachCategory.id === id) {
        return {
          ...eachCategory,
          widgets: [...eachCategory.widgets, newWidget],
        };
      }
      return eachCategory;
    });

    setData({ ...data, categories: updatedCategories });
    setNewName('');
    setNewText('');
  };

  const filteredWidgets = widgets.filter((widget) =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    widget.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='category-container' key={id}>
      <h1>{name}</h1>
      <ul className='widgets-list'>
        {filteredWidgets.map((eachwidget) => (
          <Widget item={eachwidget} key={eachwidget.id} />
        ))}
        <li className='add-widget-con'>
          {isAddWidget ? (
            <form onSubmit={addNewWidget} className='inputs-con'>
              <input
                required
                onChange={(e) => setNewName(e.target.value)}
                type="text"
                placeholder='Enter Name'
              />
              <input
                required
                onChange={(e) => setNewText(e.target.value)}
                type="text"
                placeholder='Enter Text'
              />
              <button>Add</button>
            </form>
          ) : (
            <button onClick={addWidget}>
              <FiPlus className='icon' />
              Add Widget
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Category;
