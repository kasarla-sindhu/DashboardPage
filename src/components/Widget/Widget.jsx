import React, { useContext } from 'react';
import './Widget.css';
import { RxCross2 } from "react-icons/rx";
import { DashboardContext } from '../../App';

const Widget = (props) => {
  const { item } = props;
  const { id, name, text } = item;
  const [data, setData] = useContext(DashboardContext);

  const removeWidget = () => {
    const updatedCategories = data.categories.map((category) => {
      if (category.widgets.find(widget => widget.id === id)) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== id)
        };
      }
      return category;
    });

    setData({ ...data, categories: updatedCategories });
  };

  return (
    <li className='widget-con' key={id}>
      <RxCross2 className='cross-icon' onClick={removeWidget} />
      <h1>{name}</h1>
      <p>{text}</p>
    </li>
  );
}

export default Widget;
