const Checkbox = ({
  type = 'checkbox',
  name = 'Filter-Show',
  label,
  checked,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        defaultChecked={checked}
        onChange={onChange}
      />
    </>
  );
};

export default Checkbox;
