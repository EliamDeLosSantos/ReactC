import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string | boolean;
  [x: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  error,
  ...rest
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${error ? 'border-red-400' : 'border-gray-300'}`}
      {...rest}
    />
    {error && typeof error === 'string' && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default InputField;
