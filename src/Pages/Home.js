import React, { useEffect, useState } from 'react';
import ProductsCard from '../Components/ProductsCard';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className=' w-4/5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {
              products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Home;