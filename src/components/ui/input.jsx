import React from "react";

const TextInput = ({
  id,
  label = "Label",
  type = "text",
  placeholder = "",
  as = "input",
  rows = 3,
  helperText = "",
  options = [],
  className = "",
  ...rest
}) => (
  <div className={`flex flex-col w-full max-w-sm my-[10px] ${className}`}>
    <label htmlFor={id} className="mb-1 text-sm font-montserrat text-gray-700">
      {label}
    </label>

    {as === "textarea" ? (
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className="
          px-3 py-2 bg-white border border-gray-200 rounded-lg
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB22C]
          text-sm font-montserrat min-h-[100px] resize-none
        "
        {...rest}
      />
    ) : as === "select" ? (
      <select
        id={id}
        className="
          px-3 py-2 bg-white border border-gray-200 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#FFB22C]
          text-sm font-montserrat
        "
        {...rest}
      >
        <option value="" disabled>
          {placeholder || "— Select —"}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="
          px-3 py-2 bg-white border border-gray-200 rounded-lg
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB22C]
          text-sm font-montserrat
        "
        {...rest}
      />
    )}

    {helperText && (
      <p className="mt-1 text-xs text-gray-500 font-montserrat">{helperText}</p>
    )}
  </div>
);

export default TextInput;
