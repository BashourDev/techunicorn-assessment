import React, { Fragment } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Loading from "../../components/Loading";
// import LoadingCard from "../../components/LoadingCard";
// import CurrencyContext from "../../contexts/currencyContext";

const ProductsList = ({ products = [] }) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden"
            >
              <button className="bg-pink-200 p-1 absolute top-2 right-2 rounded-md z-10">
                <BsHeart className="text-pink-700" />
              </button>
              <div className="w-full h-72 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img
                  src={product?.image}
                  alt={product.id}
                  className="w-full h-full object-center object-cover "
                />
              </div>
              <div className="mt-4 flex flex-col justify-between items-center">
                <h3 className="text-sm text-gray-700">
                  <Link to={""}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                <span className="flex text-orange-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <span className="mt-1 text-orange-600">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
