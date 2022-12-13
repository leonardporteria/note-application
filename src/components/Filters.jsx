import './Filters.css';
import Checkbox from './Checkbox';
import { useState, useEffect, useCallback } from 'react';

const Filters = ({
  onCreating,
  localStorageObject,
  notes,
  setNotes,
  filterSort,
  setFilterSort,
  filterShow,
  setFilterShow,
  checkboxes,
  setCheckboxes,
}) => {
  const [filteredNotes, setFilteredNotes] = useState([]);

  // SORT FILTER
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
      setNotes(filteredNotes);
    } else if (selected === 'titleAsc') {
      setNotes(notes.sort(dynamicSort('title', 1)));
    } else if (selected === 'titleDesc') {
      setNotes(notes.sort(dynamicSort('title', -1)));
    } else if (selected === 'color') {
      setNotes(notes.sort(dynamicSort('color', 1)));
    } else if (selected === 'labelAsc') {
      setNotes(notes.sort(dynamicSort('label', 1)));
    } else if (selected === 'labelDesc') {
      setNotes(notes.sort(dynamicSort('label', -1)));
    }
  };

  // SHOW FILTER
  const handleChangeShow = (e, index) => {
    // UPDATE STATE OF CHECKBOX
    // change state of checked checkboxes
    const currentObj = checkboxes[index];
    const currState = currentObj.checked;

    for (const checkbox of checkboxes) {
      if (checkbox.id === index) {
        checkbox.checked = !currState;
        break;
      }
    }

    // IF ALL IS SELECTED AND ALL IS CHECKED
    if (index === 0 && checkboxes[0].checked === true) {
      // set all checkbox to false
      for (const checkbox of checkboxes) {
        if (checkbox.id !== 0) {
          checkbox.checked = false;
        }
      }

      const activeShow = checkboxes.filter((checkbox) => checkbox.id !== 0);
      const newCheckbox = [
        {
          id: 0,
          name: 'All',
          key: 'checkBox1',
          value: 'all',
          checked: true,
        },
        ...activeShow,
      ];
      console.log(newCheckbox);
      setCheckboxes(newCheckbox);
    }

    // IF NOT ALL IS SELECTED AND ALL IS CHECKED
    if (index !== 0 && checkboxes[0].checked === true) {
      checkboxes[0].checked = false;
      setCheckboxes(checkboxes);
    }

    // IF NO SELECTED VALUE
    // get filtered checked checkboxes
    const activeShow = checkboxes.filter(
      (checkbox) => checkbox.checked === true
    );
    if (activeShow.length === 0) {
      checkboxes[0].checked = true;
      setFilterShow(['all']);
      return;
    } else {
      // get values and store to state array
      setFilterShow(activeShow.map((filter) => filter.value));
    }
  };

  // CLOSE FILTER
  const handleCloseFilters = () => {
    onCreating(false);
    console.log(filterSort);
    console.log(filterShow);
    console.log(filteredNotes);
  };

  // FILTER NOTES
  const filterNotes = useCallback(() => {
    console.log('useeffect ran');
    let newNotes = [];

    // PUSH TO newNotes THE NEW NOTES
    if (filterShow.includes('all')) {
      newNotes.push(...localStorageObject);
    }
    if (filterShow.includes('colorNone')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.color === 'zero-color')
      );
    }
    if (filterShow.includes('colorBlue')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.color === 'blue')
      );
    }
    if (filterShow.includes('colorYellow')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.color === 'yellow')
      );
    }
    if (filterShow.includes('colorPink')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.color === 'pink')
      );
    }
    if (filterShow.includes('colorGreen')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.color === 'green')
      );
    }
    if (filterShow.includes('colorCyan')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.color === 'cyan')
      );
    }
    if (filterShow.includes('colorOrange')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.color === 'orange')
      );
    }
    if (filterShow.includes('label')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.label.length !== 0)
      );
    }
    if (filterShow.includes('noLabel')) {
      newNotes.push(
        ...localStorageObject.filter((note) => note.label.length === 0)
      );
    }

    setFilteredNotes(newNotes);
  }, [filterShow, localStorageObject]);

  useEffect(() => {
    filterNotes();
  }, [filterNotes]);

  return (
    <div className='Filters'>
      <div className='filters-container'>
        <div className='filter-sort' onChange={handleChangeSort}>
          <h1 className='filter-sort-title'>SORT BY</h1>
          <div className='filter-sort-container'>
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
        </div>

        <div className='filter-show'>
          <h1 className='filter-show-title'>SHOW</h1>
          <div className='filter-show-container'>
            {
              // https://medium.com/@wlodarczyk_j/handling-multiple-checkboxes-in-react-js-337863fd284e
              checkboxes.map((item, index) => (
                <Checkbox
                  key={item.key}
                  label={item.name}
                  value={item.value}
                  checked={item.checked}
                  onChange={(e) => {
                    handleChangeShow(e, index);
                  }}
                />
              ))
            }
          </div>
        </div>

        <div className='filter-close' onClick={handleCloseFilters}>
          <h1>close</h1>
        </div>
      </div>
    </div>
  );
};

export default Filters;
