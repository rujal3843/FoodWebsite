import React from 'react';
import { useGetCategoriesQuery } from '../app/foodApi';

export const Home = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="grid gap-10 grid-cols-2 md:grid-cols-3 bg-[#5C3C24] text-white h-full">
      {data &&
        data.categories.map((meal, index) => (
          <div key={index}  >
            <h1 className='text-[25px] font-bold text-center'>{meal.strCategory}</h1>
            <img src={meal.strCategoryThumb} alt={meal.strMeal} />
            <p className='text-justify'>{meal.strCategoryDescription.substring(0, 100) + '....'}</p>
          </div>
        ))}
    </div>
        </>
  );
};
