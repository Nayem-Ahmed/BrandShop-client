import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCard from './BrandCard';

const BrandsCards = () => {
    const brandscradLoader = useLoaderData();
    return (
        <div >
        <h1 className="text-center py-5 md:text-4xl font-bold"><span className="text-pink-500">Brand</span> Names</h1>
       
       <div  className="grid md:grid-cols-3 gap-4 py-6">
       {
            brandscradLoader.map(brandcard => <BrandCard key={brandcard.id} brand={brandcard}></BrandCard>)
        }
       </div>
        
    </div>
    );
};

export default BrandsCards;