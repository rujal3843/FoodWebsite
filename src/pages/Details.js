import React from 'react';
import { useGetDetailQuery } from '../app/foodApi';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const { id } = useParams();
  const { data, isError } = useGetDetailQuery(id);

  if (isError) {
    return <h1>Error: {isError.message}</h1>;
  }

  return (
    <>
      <div className="grid gap-10 grid-cols-2 md:grid-cols-3 bg-[#5C3C24] text-white h-full">
        {data &&
          data.meals.map((meal, index) => (
            <div key={index}>
              <h1 className="text-[25px] font-bold text-center">{meal.strMeal}</h1>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          ))}
      </div>
    </>
  );
};
