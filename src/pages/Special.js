import React from 'react';
import { useGetSpecialQuery } from '../app/foodApi';

export const Special = () => {
  const { data } = useGetSpecialQuery();

  return (
    <div className='bg-[#5C3C24] text-white h-full'>
    {data &&
      data.meals.map((meal) => (
        <div key={meal.idMeal} className="pt-6 mb-4 ">
          <h1 className="text-3xl font-bold mb-2 text-center">{meal.strMeal}</h1>

          <div className='grid gap-5 grid-cols-2 mt-10'>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[500px] mb-2 rounded-lg ml-20" />

          <div>
          <h1 className='font-bold text-[25px]'>The indegreints needed to make</h1>
        
            <p className=''>{meal.strIngredient1}, {meal.strIngredient2}, {meal.strIngredient3}, {meal.strIngredient4}, {meal.strIngredient5}</p>
          
          <p className="mt-4"><span className='font-bold text-[25px]'>Categories</span>: {meal.strCategory}</p>
          <p className="mt-4 font-bold text-[25px]">{meal.strArea}</p>
          <p className='mt-5'><span className='font-bold text-[25px]'>Details</span><br /> {meal.strInstructions}</p>
          </div>

          </div>
           
          
        </div>
      ))}
  </div>
  
  );
};
