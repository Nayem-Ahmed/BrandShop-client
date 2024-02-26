import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCard from './BrandCard';

const BrandsCards = () => {
    const brandscradLoader = useLoaderData();
    return (
        <div className='p-5'>
        <h1 className="text-center py-5 md:text-4xl font-bold "><span className="text-pink-500 border-b-4 border-pink-500">Brand</span><span className='border-b-4 border-pink-500'> Names</span></h1>
       
       <div  className="grid md:grid-cols-3 gap-4 py-6">
       {
            brandscradLoader.map(brandcard => <BrandCard key={brandcard.id} brand={brandcard}></BrandCard>)
        }
       </div>
        
    </div>
    );
};

export default BrandsCards;