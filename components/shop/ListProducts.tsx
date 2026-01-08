"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  Grid,
  List,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Shirt",
    category: "Kemeja",
    price: 299000,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1745284505024-1ac4453a67b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hpcnQlMjBjbG90aGluZ3xlbnwxfHx8fDE3Njc4Njk1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 34,
  },
  {
    id: 2,
    name: "Elegant Evening Dress",
    category: "Dress",
    price: 899000,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1557161622-5f50ca344787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZHJlc3MlMjBlbGVnYW50fGVufDF8fHx8MTc2NzgwOTc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 25,
  },
  {
    id: 3,
    name: "Premium Leather Jacket",
    category: "Jaket",
    price: 1499000,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwamFja2V0JTIwc3R5bGV8ZW58MXx8fHwxNzY3ODY5NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 25,
  },
  {
    id: 4,
    name: "Slim Fit Denim Jeans",
    category: "Celana",
    price: 549000,
    rating: 4.6,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1758018230837-89188346c36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGFudHMlMjBkZW5pbXxlbnwxfHx8fDE3Njc4NjY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 31,
  },
  {
    id: 5,
    name: "Urban Sneakers",
    category: "Sepatu",
    price: 799000,
    rating: 4.8,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc25lYWtlcnMlMjBzaG9lc3xlbnwxfHx8fDE3Njc4MDY2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Designer Handbag",
    category: "Aksesoris",
    price: 1299000,
    rating: 4.9,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1613896640137-bb5b31496315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBiYWd8ZW58MXx8fHwxNzY3ODQ0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 28,
  },
  {
    id: 7,
    name: "Cozy Knit Sweater",
    category: "Sweater",
    price: 449000,
    rating: 4.7,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1612797748239-a83ed306dcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3dlYXRlciUyMHdpbnRlcnxlbnwxfHx8fDE3Njc4Njk1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 28,
  },
  {
    id: 8,
    name: "Flowing Midi Skirt",
    category: "Rok",
    price: 379000,
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1653419403196-ab64c4c740c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2tpcnQlMjB3b21hbnxlbnwxfHx8fDE3Njc4Njk1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 31,
  },
];

export function ListProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

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
          <div className='flex items-center gap-1 border border-gray-300 rounded-lg p-1'>
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
          </div>
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
                <span className='text-sm'>{product.rating}</span>
                <span className='text-sm text-gray-400'>
                  ({product.reviews})
                </span>
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
