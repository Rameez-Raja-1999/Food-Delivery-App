import React from 'react';
import Nav from '../components/Nav';
import Categories from '../components/Categories';
import Card from '../components/Card';
import { food_items } from './food';

function Home() {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      <br />
      <Categories />
      <br />
      <br />
      <div className='flex flex-wrap gap-6 justify-center px-4'>
        {food_items.map((data) => (
          <Card 
            key={data.id}
            name={data.food_name} 
            image={data.food_image} 
            price={data.price} 
            id={data.id} 
            category={data.food_category} 
            type={data.food_type}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Home;