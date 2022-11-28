import './Filters.css';
import { useState } from 'react';
import Checkbox from './Checkbox';

const Filters = ({
  onCreating,
  notes,
  setNotes,
  filterSort,
  setFilterSort,
  filterShow,
  setFilterShow,
  checkboxes,
}) => {
  const [showWarning, setShowWarning] = useState(false);

  // SORT
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

  // SHOW
  const handleChangeShow = (e) => {
    // check if all is checked, if checked, pop, else clear others
    // if e.value exist pop, else push
  };

  const handleChange = (e, index) => {
    let hasChecks = false;
    if (index === 0) {
      checkboxes.forEach((checkbox) => {
        if (checkbox.id >= 1 && checkbox.checked === true) hasChecks = true;
      });
    } else setShowWarning(false);

    if (hasChecks) {
      setShowWarning(true);
      return;
    }

    const currentObj = checkboxes[index];
    const currState = currentObj.checked;

    for (const checkbox of checkboxes) {
      if (checkbox.id === index) {
        checkbox.checked = !currState;
        break;
      }
    }
  };

  // CLOSE FILTER
  const handleCloseFilters = () => {
    onCreating(false);
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
          <input
            type='radio'
            value='titleDesc'
            name='Filter-Sort'
            defaultChecked={filterSort === 'titleDesc'}
          />
          <label htmlFor='Filter-Sort'> Title (Desc)</label>
          <input
            type='radio'
            value='color'
            name='Filter-Sort'
            defaultChecked={filterSort === 'color'}
          />
          <label htmlFor='Filter-Sort'>Color</label>
          <input
            type='radio'
            value='labelAsc'
            name='Filter-Sort'
            defaultChecked={filterSort === 'labelAsc'}
          />
          <label htmlFor='Filter-Sort'>Label (Asc)</label>
          <input
            type='radio'
            value='labelDesc'
            name='Filter-Sort'
            defaultChecked={filterSort === 'labelDesc'}
          />
          <label htmlFor='Filter-Sort'>Label (Desc)</label>
        </div>

        <div className='filter-show' onChange={handleChangeShow}>
          <h1 className='filter-show-title'>
            SHOW ONLY
            {showWarning &&
              ' Cannot enable "All" while other options are active'}
          </h1>
          {
            // https://medium.com/@wlodarczyk_j/handling-multiple-checkboxes-in-react-js-337863fd284e
            checkboxes.map((item, index) => (
              <Checkbox
                key={item.key}
                label={item.name}
                value={item.value}
                checked={item.checked}
                onChange={(e) => {
                  handleChange(e, index);
                }}
              />
            ))
          }
        </div>

        <div className='filters-close' onClick={handleCloseFilters}>
          <h1>close</h1>
        </div>
      </div>
    </div>
  );
};

export default Filters;
