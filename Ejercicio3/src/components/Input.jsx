import '../App.css';

const Input = ({ valor, onChange }) => {
  return (
    <input
    className='Inpu'
      type="text"
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;