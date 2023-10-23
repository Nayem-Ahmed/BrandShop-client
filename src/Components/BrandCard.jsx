import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { id, name, image } = brand
    return (
        <Link to={`productbasedbrand/${name}`}>
            <div className="card  card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;