    // import React from "react";

    // export function Cart(){
    //     return <h1>Cart</h1>
    // }

    import React from 'react';
    import { useLocation } from 'react-router-dom';
    import Product from '../components/product';
    import { useState } from 'react';
    import { Link } from 'react-router-dom';

    export function Cart() {
        const location = useLocation();
        const products = location.state?.data || [];
        console.log("data received: ", products)
        const [productsList, setProductsList] = useState(products);

        const totalValue = productsList.reduce((acc, product) => {
            return acc + (product.price * (product.quantityInCart || 0));
        }, 0);

        const handleAddToCartClick = (productName: string) => {
            setProductsList(prevProducts => 
                prevProducts.map(product => 
                    product.name === productName
                        ? {
                            ...product,
                            quantityInCart: product.quantityInCart + 1
                        }
                        : product
                )
            );
        };

        const removeFromCart = (productName: string) => {
            setProductsList(prevProducts => 
                prevProducts.map(product => 
                    product.name === productName
                        ? {
                            ...product,
                            quantityInCart: product.quantityInCart > 0 ? product.quantityInCart - 1 : 0
                        }
                        : product
                )
            );
        };
        
        

    return (
        <div className='w-full max-w-screen-lg h-screen bg-zinc-950 bg-opacity-50'>
            <div className="w-full h-12 px-12 bg-zinc-600 bg-opacity-70 shadow shadow-inner flex justify-between items-center mb-4 ">
                <div className=" text-zinc-200 text-sm font-normal"><h4><b>Seu carrinho</b></h4></div>
            </div>

            <div className='grid grid-cols-5 gap-8'>
                {productsList.map(product => (
                        <Product
                            key={product.name}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            quantityInCart={product.quantityInCart || 0}
                            handleAddToCartClick={() => handleAddToCartClick(product.name)}
                            removeFromCart={() => removeFromCart(product.name)}
                        />
                    ))}
            </div>
            
            <div className=" flex gap-8 mt-4 ml-8">
                    <h2><b>Total Value: ${totalValue.toFixed(2)}</b></h2> 
                    <button className='rounded-md bg-zinc-600 text-zinc-200 px-4 py-1'>
                        <Link to="/finished" state={{data: totalValue}} className="link">
                            Finalizar pedido
                        </Link>
                    </button>
            </div>
            
        </div>
    );
    };