import './Renderer.scss';
import NoteBlock from './NoteBlock';

const Renderer = ({ notes, setNotes }) => {
  return (
    <div className='Content'>
      {notes.map((note, index) => (
        <NoteBlock key={index} index={index} note={note} />
      ))}
    </div>
  );
};

export default Renderer;
