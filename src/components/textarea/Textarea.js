import './Textarea.css';
import Color from './Color';
import Label from './Label';

import { useState } from 'react';

const Textarea = ({ onCreating }) => {
  // CONDITIONAL RENDERING BOOLEANS
  const [showColor, setShowColor] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  // COMPONENTS VARIABLES
  const [color, setColor] = useState('no-color');
  const [label, setLabel] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [canAdd, setCanAdd] = useState(false);
  const noteObject = JSON.parse(localStorage.getItem('note-app')) || [];

  const handleTitle = (e) => {
    const trimmedTitle = e.target.value.trim();

    if (Object.keys(noteObject).length === 0) setTitle(trimmedTitle);

    noteObject.forEach((usedTitle) => {
      console.log(trimmedTitle);
      if (usedTitle.title === trimmedTitle) {
        console.log('same title');
        setCanAdd(false);
      } else if (trimmedTitle === '') {
        console.log('no lenght');
        setCanAdd(false);
      } else {
        console.log('can add');
        setTitle(trimmedTitle);
        setCanAdd(true);
      }
    });
  };
  const handleBody = (e) => {
    if (e.target.value.trim() === '') {
      console.log('no lenght');
      setCanAdd(false);
    } else {
      console.log('can add');
      setBody(e.target.value);
      setCanAdd(true);
    }
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
    // base condition
    if (!canAdd) return;

    const oldObject = JSON.parse(localStorage.getItem('note-app')) || [];
    const note = {
      color: color,
      label: label,
      title: title,
      body: body,
    };
    oldObject.push(note);
    localStorage.setItem('note-app', JSON.stringify(oldObject));

    // disable textare
    onCreating(false);
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
        <div className='helper'>{`label: ${
          label === '' ? 'no label' : label
        } color: ${color}`}</div>
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

        {showColor && <Color setColor={setColor} setShowColor={setShowColor} />}
        {showLabel && (
          <Label
            setLabel={setLabel}
            label={label}
            setShowLabel={setShowLabel}
          />
        )}
      </div>
    </div>
  );
};

export default Textarea;
