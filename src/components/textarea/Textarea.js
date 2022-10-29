import './Textarea.css';

const Textarea = ({ onCreating }) => {
  const handleChange = () => {
    console.log('change');
  };

  const handleFocus = () => {
    console.log('focusesd');
  };

  const handleCancelCreating = () => {
    console.log('cancel add note');
    onCreating(false);
  };

  const handleChangeColor = () => {
    console.log('change color');
  };
  const handleAddLabel = () => {
    console.log('add label');
  };
  const handleAddNote = () => {
    console.log('add note');
  };

  return (
    <div className='Textarea'>
      <div className='container'>
        <input type='text' placeholder='Enter Title' />
        <textarea
          placeholder='Enter a new note...'
          onChange={handleChange}
          onFocus={handleFocus}
          cols='50'
          rows='10'
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
      </div>
    </div>
  );
};

export default Textarea;
