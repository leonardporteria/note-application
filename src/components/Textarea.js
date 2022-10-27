const Textarea = () => {
  const handleChange = () => {
    console.log('change');
  };

  return (
    <textarea
      defaultValue='Enter a new note...'
      onChange={handleChange}
      id=''
      cols='50'
      rows='10'
      style={{ resize: 'none' }}
    ></textarea>
  );
};

export default Textarea;
