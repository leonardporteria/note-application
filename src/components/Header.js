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

  // FILTERS CHANGES MEMORY
  const [filterSort, setFilterSort] = useState('date');
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 0,
      name: 'All',
      key: 'checkBox1',
      value: 'all',
      checked: true,
    },
    {
      id: 1,
      name: 'Color: no color',
      key: 'checkBox2',
      value: 'colorNone',
      checked: false,
    },
    {
      id: 2,
      name: 'Color: blue',
      key: 'checkBox3',
      value: 'colorBlue',
      checked: false,
    },
    {
      id: 3,
      name: 'Color: yellow',
      key: 'checkBox4',
      value: 'colorYellow',
      checked: false,
    },
    {
      id: 4,
      name: 'Color: pink',
      key: 'checkBox5',
      value: 'colorPink',
      checked: false,
    },
    {
      id: 5,
      name: 'Color: green',
      key: 'checkBox6',
      value: 'colorGreen',
      checked: false,
    },
    {
      id: 6,
      name: 'Color: cyan',
      key: 'checkBox7',
      value: 'colorCyan',
      checked: false,
    },
    {
      id: 7,
      name: 'Color: orange',
      key: 'checkBox8',
      value: 'colorOrange',
      checked: false,
    },
    {
      id: 8,
      name: 'Labeled',
      key: 'checkBox9',
      value: 'label',
      checked: false,
    },
    {
      id: 9,
      name: 'No label',
      key: 'checkBox10',
      value: 'noLabel',
      checked: false,
    },
  ]);

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
      {showFilters && (
        <Filters
          onCreating={setShowFilters}
          notes={notes}
          setNotes={setNotes}
          filterSort={filterSort}
          setFilterSort={setFilterSort}
          checkboxes={checkboxes}
          setCheckboxes={setCheckboxes}
        />
      )}
      <Renderer notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Header;
