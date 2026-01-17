"use client";

import { useShop } from "@/components/shop/useShop";
import { Button } from "@/components/ui/button";
import { fetchAPI } from "@/lib/fetcher";
import { formatRupiah } from "@/lib/formatRupiah";
import { Product } from "@/types/product";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function ProductDetail() {
  const params = useParams();
  const { addToCart } = useShop();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product>();
  const [qty, setQty] = useState(1);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > (product?.stock || 0)) return;
    setQty(newQuantity);
  };
  useEffect(() => {
    const getDetailProduct = async () => {
      try {
        setIsLoading(true);
        const id = params?.slug?.toString();
        if (!id) return;
        const response = await fetchAPI(`/product/${id}`, {
          method: "GET",
          cache: "no-store",
        });

        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
        toast.error("Failed to fetch product details");
      } finally {
        setIsLoading(false);
      }
    };

    getDetailProduct();
  }, [params.slug]);

  if (isLoading) return <div className='text-center py-20'>Loading...</div>;
  if (!product)
    return <div className='text-center py-20'>Produk tidak ditemukan</div>;

  return (
    <div className='container mx-auto px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* KIRI: GAMBAR */}
        <div className='relative aspect-square max-h-1/2 w-full bg-gray-100 rounded-xl overflow-hidden border'>
          <Image
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
            fill
            className='object-cover'
          />
        </div>

        {/* KANAN: INFORMASI */}
        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
            <div className='flex items-center gap-2 text-yellow-500 mb-4'>
              <Star className='fill-yellow-500 w-5 h-5' />
              <span className='text-black font-medium'>4.8 (Review)</span>
            </div>
            <p className='text-3xl font-bold text-primary'>
              {formatRupiah(product.price)}
            </p>
          </div>

          <div className='border-t border-b py-6'>
            <h3 className='font-semibold mb-2'>Deskripsi</h3>
            <p className='text-gray-600 leading-relaxed'>
              {/* Jika deskripsi kosong, kasih default text */}
              {product?.description || "Tidak ada deskripsi untuk produk ini."}
            </p>
          </div>

          {/* INPUT QUANTITY & Button */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <span className='font-medium'>Jumlah:</span>
              <div className='flex items-center border rounded-md'>
                <Button onClick={() => updateQuantity(qty - 1)}>-</Button>
                <span className='px-4 py-1 font-medium'>{qty}</span>
                <Button onClick={() => updateQuantity(qty + 1)}>+</Button>
              </div>
              <span className='text-sm text-gray-500'>
                Stok: {product.stock}
              </span>
            </div>

            <Button
              size='lg'
              onClick={() => addToCart(product.id, qty)}
              className='w-full md:w-auto'
            >
              <ShoppingCart className='mr-2 h-5 w-5' />
              Tambah ke Keranjang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
