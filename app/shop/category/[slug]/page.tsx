"use client";

import { useParams } from "next/navigation";
import { useCategory } from "./useCategory";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Image from "next/image";
import { formatRupiah } from "@/lib/formatRupiah";
import { ShoppingCart, Star } from "lucide-react";
import { useShop } from "@/components/shop/useShop";

function Category() {
  const params = useParams();
  const category = params?.slug as string;
  const { itemsCategory, isLoading, fetchCategories } = useCategory();
  const { addToCart } = useShop();

  useEffect(() => {
    const fetchData = async () => {
      await fetchCategories(category);
    };
    fetchData();
  }, [category, fetchCategories]);

  if (isLoading) return <div className='text-center py-20'>Loading...</div>;
  return (
    <div className='max-w-7xl mx-auto p-8'>
      {itemsCategory.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-gray-600'>No products found in this category.</p>
          <Link href='/shop'>
            <Button className='mt-4'>Browse All Products</Button>
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 mb-12'>
          {itemsCategory.map((product) => (
            <Link
              href={`/shop/${product.id}`}
              key={product.id}
              className="'bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group'"
            >
              {/* Product Image */}
              <div className='relative overflow-hidden aspect-square'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />

                {/* Quick Add Button */}
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <Button
                    size='sm'
                    className='bg-white text-black hover:bg-gray-100'
                  >
                    <ShoppingCart className='w-4 h-4 mr-2' />
                    Detail Product
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
                    {formatRupiah(product.price)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product.id, 1);
                  }}
                  className='w-full'
                  variant='outline'
                >
                  <ShoppingCart className='w-4 h-4 mr-2' />
                  <p>Add to chart</p>
                </Button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
