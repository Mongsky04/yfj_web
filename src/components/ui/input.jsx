// in input.jsx
import React from 'react';

const TextInput = ({
  id,
  label = "Label",
  type = "text",           
  placeholder = "",
  helperText = "",
  options = [],           
  className = "",
  ...rest
}) => (
  <div className={`flex flex-col w-full max-w-sm my-[10px] ${className}`}>
    <label htmlFor={id} className="mb-1 text-sm font-montserrat text-gray-700">
      {label}
    </label>

    {as === 'textarea' ? (
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className="
          px-3 py-2
          bg-white
          border border-gray-200
          rounded-lg
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-[#FFB22C]
          text-sm font-montserrat
          resize-y
          min-h-[100px]
        "
        {...rest}
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="
          px-3 py-2
          bg-white
          border border-gray-200
          rounded-lg
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-[#FFB22C]
          text-sm font-montserrat
        "
        {...rest}
      />
    )}

    {helperText && (
      <p className="mt-1 text-xs text-gray-500 font-montserrat">
        {helperText}
      </p>
    )}
  </div>
);

export default TextInput;
