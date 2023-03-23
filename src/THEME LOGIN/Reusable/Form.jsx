export const Name = ({ placeholder, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export const Email = ({ placeholder, type, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export const Password = ({ placeholder, type, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export const SubmitButton = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
