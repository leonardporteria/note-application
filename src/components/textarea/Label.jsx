import './Label.css';
import { useState } from 'react';

const Label = ({ setLabel, label, setShowLabel }) => {
  let [labelValue, setLabelValue] = useState('');

  const handleLabel = (e) => {
    setLabelValue(e.target.value);
  };

  const handleAddLabel = () => {
    setLabel(labelValue);
  };

  const handleClearLabel = () => {
    setLabel('');
  };

  return (
    <div className='Label'>
      <input
        className='label-input'
        type='text'
        placeholder={
          label === '' ? 'Enter Label [12char max]' : `Label: ${label}`
        }
        maxLength='12'
        onChange={handleLabel}
      />

      <button
        className='label-add'
        onClick={() => {
          setShowLabel(false);
          handleAddLabel();
        }}
      >
        set
      </button>
      <button
        className='label-clear'
        onClick={() => {
          setShowLabel(false);
          handleClearLabel();
        }}
      >
        clear
      </button>
    </div>
  );
};

export default Label;
