const NoteBlock = ({ note, index }) => {
  const handleColor = () => {
    console.log(note.color);
  };

  return (
    <div className={`Note note-${index}`}>
      <div className='note-title'>{note.title}</div>
      <div className='note-body'>{note.body}</div>
      <div className='note-label'>{note.label}</div>
    </div>
  );
};

export default NoteBlock;
