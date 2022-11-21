import { useState } from 'react';

const Filters = ({ setShowFilters, setNotes }) => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filterSort, setFilterSort] = useState('date');
  const [filterShow, setFilterShow] = useState(['all']);

  const handleChangeFilter = (e) => {
    setFilterSort(e.target.value);
  };

  return (
    <div className='Filters'>
      <div className='filters-container' onChange={handleChangeFilter}>
        <div className='filter-sort'>
          <h1 className='filter-sort-title'>SORT BY</h1>
          <input type='radio' value='Male' defaultChecked /> Date Created
          <input type='radio' value='Female' /> Color
          <input type='radio' value='Other' /> Label (Asc)
          <input type='radio' value='Other' /> Label (Desc)
        </div>

        <div className='filter-show'>
          <h1 className='filter-show-title'>SHOW ONLY</h1>
          <input type='radio' value='Other' defaultChecked /> All
          <input type='radio' value='Other' /> Color: no color
          <input type='radio' value='Other' /> Color: blue
          <input type='radio' value='Other' /> Color: yellow
          <input type='radio' value='Other' /> Color: pink
          <input type='radio' value='Other' /> Color: green
          <input type='radio' value='Other' /> Color: cyan
          <input type='radio' value='Other' /> Color: orange
          <input type='radio' value='Other' /> Labeled
          <input type='radio' value='Other' /> No Label
        </div>
      </div>
    </div>
  );
};

export default Filters;
