import './Filters.css';
import { useState } from 'react';

const Filters = ({ onCreating, notes, setNotes }) => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filterSort, setFilterSort] = useState('date');
  const [filterShow, setFilterShow] = useState(['all']);
  const [isAllChecked, setIsAllChecked] = useState(true);

  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  const dynamicSort = (property, sortOrder) => {
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  const handleChangeSort = (e) => {
    notes.sort(dynamicSort('label', -1));
    console.log(notes);
    setFilterSort(e.target.value);
  };

  const handleChangeShow = (e) => {
    console.log(e.target.value);
    console.log(notes);
    setFilterShow(e.target.value);
  };

  const handleCloseFilters = () => {
    onCreating(false);
  };

  return (
    <div className='Filters'>
      <div className='filters-container'>
        <div className='filter-sort' onChange={handleChangeSort}>
          <h1 className='filter-sort-title'>SORT BY</h1>
          <input type='radio' value='date' name='Filter-Date' defaultChecked />
          Date Created
          <input type='radio' value='color' name='Filter-Color' />
          Color
          <input type='radio' value='labelAsc' name='Filter-LabelAsc' />
          Label (Asc)
          <input type='radio' value='labelDesc' name='Filter-LabelDesc' />
          Label (Desc)
        </div>

        <div className='filter-show' onChange={handleChangeShow}>
          <h1 className='filter-show-title'>SHOW ONLY</h1>
          <input type='checkbox' value='all' name='Show-All' defaultChecked />
          All
          <input type='checkbox' value='colorNone' name='Show-NoColor' />
          Color: no color
          <input type='checkbox' value='colorBlue' name='Show-Blue' />
          Color: blue
          <input type='checkbox' value='colorYellow' name='Show-Yellow' />
          Color: yellow
          <input type='checkbox' value='colorPink' name='Show-Pink' />
          Color: pink
          <input type='checkbox' value='colorGreen' name='Show-Green' />
          Color: green
          <input type='checkbox' value='colorCyan' name='Show-Cyan' />
          Color: cyan
          <input type='checkbox' value='colorOrange' name='Show-Orange' />
          Color: orange
          <input type='checkbox' value='label' name='Show-Label' />
          Labeled
          <input type='checkbox' value='noLabel' name='Show-NoLabel' />
          No Label
        </div>

        <div className='filters-close' onClick={handleCloseFilters}>
          <h1>close</h1>
        </div>
      </div>
    </div>
  );
};

export default Filters;
