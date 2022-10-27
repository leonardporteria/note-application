import './Textarea.css';

const Textarea = ({ onCreatingChange }) => {
  const handleChange = () => {
    console.log('change');
  };

  const handleFocus = () => {
    console.log('focusesd');
  };

  const handleOnCreatingChange = () => {
    console.log('changed state');
    onCreatingChange(false);
  };

  return (
    <div className='Textarea'>
      <div className='container'>
        <input type='text' />
        <textarea
          placeholder='Enter a new note...'
          onChange={handleChange}
          onFocus={handleFocus}
          cols='50'
          rows='10'
        ></textarea>
        <div className='buttons'>
          <button>color</button>
          <button onClick={handleOnCreatingChange}>cancel</button>
          <button>add</button>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
