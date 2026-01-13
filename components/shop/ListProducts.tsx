"use client";

import { Search, ChevronDown, ShoppingCart, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useShop } from "./useShop";

export function ListProducts() {
  const { products, formatPrice } = useShop();
  return (
    <div>
      {/* Search and Filter Bar */}
      <div className='grid sm:grid-cols-2 gap-4 mb-6'>
        {/* Search Input */}
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search in Products'
            className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          />
        </div>

        {/* Controls */}
        <div className='flex justify-between items-center sm:justify-end gap-4'>
          {/* Sort By */}
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>Sort by:</span>
            <button className='flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'>
              <span className='text-sm'>Featured</span>
              <ChevronDown className='w-4 h-4' />
            </button>
          </div>

          {/* View Mode Toggle */}
          {/* <div className='flex items-center gap-1 border border-gray-300 rounded-lg p-1'>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <Grid className='w-4 h-4' />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <List className='w-4 h-4' />
            </button>
          </div> */}
        </div>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 mb-12'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group'
          >
            {/* Product Image */}
            <div className='relative overflow-hidden aspect-3/4'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
              />

              {/* Quick Add Button */}
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <Button
                  size='sm'
                  className='bg-white text-black hover:bg-gray-100'
                >
                  <ShoppingCart className='w-4 h-4 mr-2' />
                  Quick Add
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className='p-4'>
              <p className='text-sm text-gray-500 mb-1'>{product.category}</p>
              <h3 className='mb-2 line-clamp-1'>{product.name}</h3>

              {/* Rating */}
              <div className='flex items-center gap-1 mb-3'>
                <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                {product.rating}
              </div>

              {/* Price */}
              <div className='flex items-center gap-2 mb-4'>
                <span className='font-semibold'>
                  {formatPrice(product.price)}
                </span>
              </div>

              {/* Add to Cart Button */}
              <Button className='w-full' variant='outline'>
                <ShoppingCart className='w-4 h-4 mr-2' />
                <p>Add to chart</p>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
