import './Textarea.css';
import Color from './Color';
import Label from './Label';

import { useState } from 'react';

const Textarea = ({ onCreating }) => {
  // CONDITIONAL RENDERING BOOLEANS
  const [showColor, setShowColor] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  // COMPONENTS VARIABLES
  const [color, setColor] = useState('dark');
  const [label, setLabel] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleChangeColor = () => {
    console.log('change color');
    setShowColor(!showColor);
    setShowLabel(false);
    console.log(color);
  };
  const handleAddLabel = () => {
    console.log('add label');
    setShowLabel(!showLabel);
    setShowColor(false);
    console.log(label);
  };

  const handleCancelCreating = () => {
    console.log('cancel add note');
    onCreating(false);
  };
  const handleAddNote = () => {
    console.log('add note');
    console.log(color, label);
    console.log(title, body);
  };

  return (
    <div className='Textarea'>
      <div className='container'>
        <input
          type='text'
          placeholder='Enter Title'
          maxLength='30'
          onChange={handleTitle}
        />
        <textarea
          placeholder='Enter a new note...'
          cols='50'
          rows='10'
          onChange={handleBody}
        ></textarea>
        <div className='buttons'>
          <button className='button-color' onClick={handleChangeColor}>
            color
          </button>
          <button className='button-label' onClick={handleAddLabel}>
            label
          </button>
          <button className='button-cancel' onClick={handleCancelCreating}>
            cancel
          </button>
          <button className='button-add' onClick={handleAddNote}>
            add
          </button>
        </div>
        {/* CONDITIONAL RENDERING FOR COLOR AND LABEL */}
        {showColor && <Color setColor={setColor} />}
        {showLabel && <Label setLabel={setLabel} label={label} />}
      </div>
    </div>
  );
};

export default Textarea;
