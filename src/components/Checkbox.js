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
      <input
        type={type}
        value={value}
        name={name}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </>
  );
};

export default Checkbox;
