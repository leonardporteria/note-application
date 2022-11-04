import './Header.css';
import Textarea from './textarea/Textarea';
import Renderer from './renderer/Renderer';

import { useState } from 'react';

const Header = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleAddNote = () => {
    console.log('CREATING NEW NOTE');
    setIsCreating(!isCreating);
  };

  return (
    <>
      <div className='Header'>
        <h1>Note Application</h1>
        <div className='buttons'>
          <button className='filter'>⛬</button>
          <button className='add-note' onClick={handleAddNote}>
            + Add Note
          </button>
        </div>
      </div>

      {isCreating && <Textarea onCreating={setIsCreating} />}
      <Renderer />
    </>
  );
};

export default Header;
