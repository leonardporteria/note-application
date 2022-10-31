import './Label.css';

const Label = () => {
  return (
    <div className='Label'>
      <input
        className='label-input'
        type='text'
        placeholder='Enter Label [12char max]'
      />
      <button className='label-add'>add</button>
    </div>
  );
};

export default Label;
