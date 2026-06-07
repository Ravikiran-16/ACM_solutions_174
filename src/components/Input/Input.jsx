import { useState } from "react";
import "./Input.css";

export const Input = ({
  placeholder,
  defaultValue = "",
  onChange,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    if (disabled) return;

    setValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const className = [
    error ? "input-error" : "",
    disabled ? "input-disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      {leftIcon}

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className={className}
        onChange={handleChange}
      />

      {rightIcon}

      {error && (
        <div role="alert">
          {error}
        </div>
      )}
    </div>
  );
};