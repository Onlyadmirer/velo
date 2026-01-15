"use client";

import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "./useCart";
import { formatRupiah } from "@/lib/formatRupiah";
import Image from "next/image";
import Link from "next/link";

function CartPage() {
  const { cartItems, subtotal, removeItem, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          {/* Empty Cart State */}
          <div className='max-w-md mx-auto text-center py-16'>
            <div className='w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center'>
              <ShoppingBag className='w-12 h-12 text-gray-400' />
            </div>
            <h2 className='mb-4 text-gray-900'>Your Cart is Empty</h2>
            <p className='text-gray-600 mb-8'>
              Looks like you haven`t added anything to your cart yet.
            </p>
            <Button className='bg-black hover:bg-gray-800 text-white'>
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
        {/* Header */}
        <div className='mb-8'>
          <Link
            href='/shop'
            className='inline-flex items-center gap-2 text-gray-600 hover:text-black mb-4 transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            Continue Shopping
          </Link>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-gray-900'>Shopping Cart</h1>
              <p className='text-gray-600 mt-1'>
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}{" "}
                in your cart
              </p>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-4'>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className='bg-white border border-gray-200 rounded-lg p-4 md:p-6 hover:border-black transition-colors'
              >
                <div className='flex gap-4'>
                  {/* Product Image */}
                  <div className='shrink-0 relative w-24 h-auto md:w-32 md:h-32 bg-gray-100 rounded-lg overflow-hidden'>
                    <Image
                      src={item.product?.image}
                      alt={item.product?.name}
                      fill
                      className='w-full h-full object-cover'
                    />
                  </div>

                  {/* Product Details */}
                  <div className='flex-1 min-w-0'>
                    <div className='flex justify-between items-start mb-2'>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-semibold text-gray-900 mb-1'>
                          {item.product?.name}
                        </h3>
                      </div>
                      <Button
                        onClick={() => removeItem(item.id)}
                        variant={"destructive"}
                        aria-label='Remove item'
                      >
                        <Trash2 className='w-5 h-5' />
                      </Button>
                    </div>

                    {/* Price and Quantity */}
                    <div className='flex flex-col sm:flex-row gap-2 md:items-center justify-between mt-4'>
                      <div className='space-y-1'>
                        <h2 className='text-gray-600'>
                          stock: {item.product?.quantity}
                        </h2>
                        <h1 className='font-semibold text-gray-900'>
                          {formatRupiah(item.product?.price)}
                        </h1>
                      </div>

                      {/* Quantity Selector */}
                      <div className='flex items-center gap-2 overflow-hidden'>
                        <Button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label='Decrease quantity'
                        >
                          <Minus className='w-4 h-4' />
                        </Button>
                        <span className='px-4 py-2 min-w-12 text-center border rounded-md border-gray-300'>
                          {item.quantity}
                        </span>
                        <Button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label='Increase quantity'
                        >
                          <Plus className='w-4 h-4' />
                        </Button>
                      </div>
                    </div>

                    {/* Subtotal for this item */}
                    <div className='mt-2 text-sm text-gray-600'>
                      Subtotal:{" "}
                      {formatRupiah(item.product?.price * item.quantity)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-8'>
              <h2 className='mb-6 text-gray-900 pb-4 border-b border-gray-300'>
                Order Summary
              </h2>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between text-gray-600'>
                  <span>Subtotal</span>
                  <span className='font-medium text-gray-900'>
                    {formatRupiah(subtotal)}
                  </span>
                </div>
                {/* <div className='flex justify-between text-gray-600'>
                  <span>Shipping</span>
                  <span className='font-medium text-gray-900'>
                    ${shipping.toFixed(2)}
                  </span>
                </div> */}
                {/* <div className='flex justify-between text-gray-600'>
                  <span>Tax (10%)</span>
                  <span className='font-medium text-gray-900'>
                    ${tax.toFixed(2)}
                  </span>
                </div> */}
              </div>

              <div className='pt-4 border-t-2 border-gray-900 mb-6'>
                <div className='flex justify-between items-center'>
                  <span className='font-semibold text-gray-900'>Total</span>
                  <span className='font-bold text-gray-900'>
                    {formatRupiah(subtotal)}
                  </span>
                </div>
              </div>

              <Button className='w-full bg-black hover:bg-gray-800 text-white mb-3'>
                Proceed to Checkout
              </Button>

              <Button
                variant='outline'
                className='w-full border-2 border-gray-900 hover:bg-gray-50'
              >
                Continue Shopping
              </Button>

              {/* Additional Info */}
              <div className='mt-6 pt-6 border-t border-gray-300'>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='flex items-start gap-2'>
                    <svg
                      className='w-5 h-5 shrink-0 mt-0.5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <svg
                      className='w-5 h-5 shrink-0 mt-0.5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <svg
                      className='w-5 h-5 shrink-0 mt-0.5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Ships within 2-3 business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
