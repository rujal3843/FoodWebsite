import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Alphabet = () => {
  const aplh = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const nav = useNavigate();

  return (
    <>
      <div className=" items-center grid grid-cols-4">
        {aplh.map((letter, index) => (
          <span
            key={index}
            className="cursor-pointer m-2 p-4 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => nav(`detail/${letter}`)}
          >
            {letter}
          </span>
        ))}
      </div>
    </>
  );
};
