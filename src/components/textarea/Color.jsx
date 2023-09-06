import './Color.scss';

const Color = ({ setColor, setShowColor }) => {
  return (
    <div className='Color'>
      <div className='buttons'>
        <div
          className='blue-btn'
          onClick={() => {
            setColor('blue');
            setShowColor(false);
          }}
        ></div>
        <div
          className='yellow-btn'
          onClick={() => {
            setColor('yellow');
            setShowColor(false);
          }}
        ></div>
        <div
          className='pink-btn'
          onClick={() => {
            setColor('pink');
            setShowColor(false);
          }}
        ></div>
        <div
          className='green-btn'
          onClick={() => {
            setColor('green');
            setShowColor(false);
          }}
        ></div>
        <div
          className='teal-btn'
          onClick={() => {
            setColor('teal');
            setShowColor(false);
          }}
        ></div>
        <div
          className='orange-btn'
          onClick={() => {
            setColor('orange');
            setShowColor(false);
          }}
        ></div>
        <div
          className='zero-btn'
          onClick={() => {
            setColor('zero-color');
            setShowColor(false);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Color;
