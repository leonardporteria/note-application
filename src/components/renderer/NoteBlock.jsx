import './NoteBlock.scss';

const NoteBlock = ({ note, index }) => {
  return (
    <div className={`Note note-${index}`}>
      <div className='note-title'>
        {note.title.length <= 10
          ? `${note.title}`
          : `${note.title.slice(0, 9)}...`}
      </div>
      <div className='note-body'>
        {note.body.length <= 15
          ? `${note.body}`
          : `${note.body.slice(0, 15)}...`}
      </div>
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
