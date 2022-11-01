import './Color.css';

const Color = ({ setColor }) => {
  return (
    <div className='Color'>
      <div className='buttons'>
        <div className='blue-btn' onClick={() => setColor('blue')}></div>
        <div className='yellow-btn' onClick={() => setColor('yellow')}></div>
        <div className='pink-btn' onClick={() => setColor('pink')}></div>
        <div className='green-btn' onClick={() => setColor('green')}></div>
        <div className='teal-btn' onClick={() => setColor('teal')}></div>
        <div className='orange-btn' onClick={() => setColor('orange')}></div>
      </div>
    </div>
  );
};

export default Color;
