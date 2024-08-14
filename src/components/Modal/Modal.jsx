import { useState } from 'react';
import './Modal.css'; 

const Modal = ({ isVisible, onClose, onAdd }) => {
  const [name, setName] = useState('');

  const handleAddClick = () => {
    if (name.trim()) {
      onAdd(name);
      setName('');
      onClose();
    }
  };

  return (
    isVisible && (
      <div className='modal-overlay'>
        <div className='modal-content'>
          <h2>Add New Category</h2>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter category name'
          />
          <button onClick={handleAddClick}>Add Category</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    )
  );
};

export default Modal;
