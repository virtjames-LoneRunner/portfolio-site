import React from "react";

function CustomInput({ label, type, name, rows }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="input-group-1"
        className="block mb-2 text-sm font-medium text-[#5761ec]"
      >
        {label}
      </label>
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          {name === "email" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-60"
              viewBox="0 0 20 20"
              fill="#5761ec"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-60"
              viewBox="0 0 24 24"
              fill="#5761ec"
            >
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>
          )}
        </div>
        <input
          type={type}
          name={name}
          rows={rows ? rows : "1"}
          id="input-group-1"
          className="bg-gray-800 text-white text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
        />
      </div>
    </div>
  );
}

export default CustomInput;
