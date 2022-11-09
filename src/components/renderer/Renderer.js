import './Renderer.css';
import NoteBlock from './NoteBlock';
import { useState, useEffect } from 'react';

const Renderer = () => {
  const noteObject = JSON.parse(localStorage.getItem('note-app')) || [];
  const [notes, setNotes] = useState([]);
  const [sortedNotes, setSortedNotes] = useState([]);

  const getNotes = () => {
    const oldObject = JSON.parse(localStorage.getItem('note-app')) || [];
    console.log(oldObject);
    return oldObject;
  };

  useEffect(() => {
    setNotes(getNotes);
  }, []);

  return (
    <div className='Content'>
      {notes.map((note, index) => (
        <NoteBlock key={index} index={index} note={note} />
      ))}
    </div>
  );
};

export default Renderer;
