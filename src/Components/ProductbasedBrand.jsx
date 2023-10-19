import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBrandCard from "./ProductBrandCard";

const ProductbasedBrand = () => {
    const [productdata, setProductdata] = useState([]);
    const { productbasedbrandId } = useParams();
    console.log(productbasedbrandId)

    useEffect(() => {
        fetch(`http://localhost:5000/products?brandId=${productbasedbrandId}`)
        .then(response => response.json())
        .then(data => {
            setProductdata(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [productbasedbrandId]);

    return (
        <div>
            <h2>ProductbasedBrand {productdata.length}</h2>
            {
                productdata.map(productbrand=><ProductBrandCard key={productbrand.id} productbrand={productbrand}></ProductBrandCard>)
            }
        </div>
    );
};

export default ProductbasedBrand;
