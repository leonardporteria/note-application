import { useState, useEffect } from 'react';

const Renderer = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    const oldObject = JSON.parse(localStorage.getItem('note-app')) || [];
    console.log(oldObject);
    return oldObject;
  };

  useEffect(() => {
    getNotes();
  }, []);

  return <div className='Content'>test</div>;
};

export default Renderer;
