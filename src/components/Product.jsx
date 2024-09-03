import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'

const Product = () => {

  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data
  }
  const { data: product, isLoading, error } = useQuery(
    {
      isQueryKey: ['product', id],
      queryFn: fetchData,
    })

  if (isLoading) {
    return <div className='flex justify-center items-center min-h-screen'>
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  }
  if (error) {
    return <p>Error: {error.message}</p>
  }


  return (
    <>

      <div className="min-h-screen bg-gray-100">

        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap -mx-6">
            {/* Product Image */}
            <div className="w-full md:w-1/2 px-6">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-6 mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>


              <div className="mt-4">
                <span className="text-gray-800 font-bold text-xl">${product.price}</span>
              </div>

              <div className="mt-6">
                <label className="text-gray-800 font-semibold">Quantity</label>
                <div className="flex items-center mt-2">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    -
                  </button>
                  <input
                    type="text"
                    className="mx-2 border text-center w-12"
                    value="1"
                    readOnly
                  />
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    +
                  </button>
                </div>
                <div className="flex justify-around flex-wrap mt-10">
                  <div>
                    <label className="text-gray-800 font-semibold">Catagory</label>
                    <p>{product.category}</p>
                  </div>
                  <div>
                    <label className="text-gray-800 font-semibold">Brand</label>
                    <p>{product.brand}</p>
                  </div>
                  <div>
                    <label className="text-gray-800 font-semibold">Stock</label>
                    <p>{product.stock}</p>
                  </div>
                  <div>
                    <label className="text-gray-800 font-semibold">Warranty
                    </label>
                    <p>{product.warrantyInformation
                    }</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-800">Product Details</h3>
            <p className="mt-4 text-gray-600">
              {product.description}
            </p>
          </div>
        </main>
      </div>
    </>

  );
};

export default Product;

