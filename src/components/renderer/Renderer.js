import NoteBlock from './NoteBlock';
import { useState, useEffect } from 'react';

const Renderer = () => {
  const [notes, setNotes] = useState([]);

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
