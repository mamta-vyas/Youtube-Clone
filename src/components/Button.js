import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex space-x-3">
    <button className="px-5 py-2 m-2 bg-gray-200 w-32 rounded-lg text-xs">{name}</button>
    </div>
  );
};

export default Button;
