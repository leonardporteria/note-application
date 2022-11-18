import './Header.css';
import Textarea from './textarea/Textarea';
import Renderer from './renderer/Renderer';
import Filters from './Filters';

import { useState } from 'react';

const Header = () => {
  const [showTextbox, setshowTextbox] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('note-app')) || []
  );

  const handleAddNote = () => {
    console.log('CREATING NEW NOTE');
    setshowTextbox(!showTextbox);
  };

  const handleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <div className='Header'>
        <h1>Note Application</h1>
        <div className='buttons'>
          <button className='filter' onClick={handleFilters}>
            ⛬
          </button>
          <button className='add-note' onClick={handleAddNote}>
            + Add Note
          </button>
        </div>
      </div>

      {showTextbox && (
        <Textarea onCreating={setshowTextbox} setNotes={setNotes} />
      )}
      {showFilters && <Filters onCreating={setShowFilters} />}
      <Renderer notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Header;
