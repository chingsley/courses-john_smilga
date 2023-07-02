import React from 'react';

interface IFormRowProps {
  type: string;
  name: string;
  value: string;
  labelText?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRow: React.FC<IFormRowProps> = (props) => {
  const { type, name, value, labelText, handleChange } = props;
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;