function Inputs({ field, setField, title, placeholder, className }) {
  return (
    <label className="form-label" htmlFor={field}>
      {title}
      <input
        onChange={(e) => {
          setField(e.target.value);
        }}
        placeholder={placeholder}
        value={field}
        className={className}
      />
    </label>
  );
}

export default Inputs;
