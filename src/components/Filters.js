import './Filters.css';
import { useState } from 'react';

const Filters = ({ onCreating, notes, setNotes }) => {
  const [filteredNotes, setFilteredNotes] = useState(notes);
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
    const selected = e.target.value;
    setFilterSort(e.target.value);

    if (selected === 'date') {
      setNotes(JSON.parse(localStorage.getItem('note-app')));
    } else if (selected === 'titleAsc') {
      notes.sort(dynamicSort('title', 1));
    } else if (selected === 'titleDesc') {
      notes.sort(dynamicSort('title', -1));
    } else if (selected === 'color') {
      notes.sort(dynamicSort('color', 1));
    } else if (selected === 'labelAsc') {
      notes.sort(dynamicSort('label', 1));
    } else if (selected === 'labelDesc') {
      notes.sort(dynamicSort('label', -1));
    }
  };

  const handleChangeShow = (e) => {
    console.log(e.target.value);
    console.log(notes);
    setFilterShow(e.target.value);
    // if e.value exist pop, else push
  };

  const handleCheckedCheckbox = (e) => {
    console.log(e.target);
    if (e.target.checked) console.log('chk');
  };

  const handleCloseFilters = () => {
    onCreating(false);
    console.log(filterSort, filterShow);
  };

  return (
    <div className='Filters'>
      <div className='filters-container'>
        <div className='filter-sort' onChange={handleChangeSort}>
          <h1 className='filter-sort-title'>SORT BY</h1>
          <input
            type='radio'
            value='date'
            name='Filter-Sort'
            defaultChecked={filterSort === 'date'}
          />
          <label htmlFor='Filter-Sort'> Date Created</label>
          <input
            type='radio'
            value='titleAsc'
            name='Filter-Sort'
            defaultChecked={filterSort === 'titleAsc'}
          />
          <label htmlFor='Filter-Sort'> Title (Asc)</label>
          <input type='radio' value='titleDesc' name='Filter-Sort' />
          <label htmlFor='Filter-Sort'> Title (Desc)</label>
          <input type='radio' value='color' name='Filter-Sort' />
          <label htmlFor='Filter-Sort'>Color</label>
          <input type='radio' value='labelAsc' name='Filter-Sort' />
          <label htmlFor='Filter-Sort'>Label (Asc)</label>
          <input type='radio' value='labelDesc' name='Filter-Sort' />
          <label htmlFor='Filter-Sort'>Label (Desc)</label>
        </div>

        <div className='filter-show' onChange={handleChangeShow}>
          <h1 className='filter-show-title'>SHOW ONLY</h1>
          <input
            type='checkbox'
            value='all'
            name='Filter-Show'
            onChange={handleCheckedCheckbox}
          />
          <label htmlFor='Filter-Show'>All</label>
          <input
            type='checkbox'
            value='colorNone'
            name='Filter-Show'
            onChange={handleCheckedCheckbox}
          />
          <label htmlFor='Filter-Show'>Color: no color</label>
          <input type='checkbox' value='colorBlue' name='Filter-Show' />
          <label htmlFor='Filter-Show'>Color: blue</label>
          <input type='checkbox' value='colorYellow' name='Filter-Show' />
          <label htmlFor='Filter-Show'>Color: yellow</label>
          <input type='checkbox' value='colorPink' name='Filter-Show' />
          <label htmlFor='Filter-Show'>Color: pink</label>
          <input type='checkbox' value='colorGreen' name='Filter-Show' />
          <label htmlFor='Filter-Show'>Color: green</label>
          <input type='checkbox' value='colorCyan' name='Filter-Show' />
          <label htmlFor='Filter-Show'>Color: cyan</label>
          <input type='checkbox' value='colorOrange' name='Filter-Show' />
          <label htmlFor='Filter-Show'>Color: orange</label>
          <input type='checkbox' value='label' name='Filter-Show' />
          <label htmlFor='Filter-Show'>Labeled</label>
          <input type='checkbox' value='noLabel' name='Filter-Show' />
          <label htmlFor='Filter-Show'>No Label</label>
        </div>

        <div className='filters-close' onClick={handleCloseFilters}>
          <h1>close</h1>
        </div>
      </div>
    </div>
  );
};

export default Filters;
