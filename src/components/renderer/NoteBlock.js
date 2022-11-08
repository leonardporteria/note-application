import './NoteBlock.css';

const NoteBlock = ({ note, index }) => {
  return (
    <div className={`Note note-${index}`}>
      <div className='note-title'>{note.title}</div>
      <div className='note-body'>{`${note.body.slice(0, 15)}...`}</div>
      <div
        className='note-label'
        style={{
          backgroundColor: `var(--${note.color})`,
        }}
      >
        {note.label}
      </div>
    </div>
  );
};

export default NoteBlock;
