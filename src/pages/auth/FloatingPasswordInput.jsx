import { useState } from "react";

const FloatingPasswordInput = ({ register, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false);
  };

  // Ensure value is always a string
  const inputValue = value || "";

  return (
    <div className="relative">
      <input
        type="password"
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 
          ${isFocused || inputValue ? "pt-6" : ""}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...register}
        value={inputValue} // Ensure value is always a string
      />
      <label
        className={`absolute left-3 transition-all duration-300 text-gray-500 
          ${isFocused || inputValue ? "-top-2 text-sm bg-white px-1" : "top-2 opacity-50 duration-500"}`}
      >
        Password
      </label>
    </div>
  );
};

export default FloatingPasswordInput;
