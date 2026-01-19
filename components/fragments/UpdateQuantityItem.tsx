"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

interface Proops {
  cartId: number;
  initialQuantity: number;
  maxStock: number;
  onUpdate: (id: number, newQuantity: number) => void;
}
function UpdateQuantityItem({
  cartId,
  initialQuantity,
  maxStock,
  onUpdate,
}: Proops) {
  const [qty, setQty] = useState(initialQuantity);

  // Sync: Kalau data database berubah (misal abis refresh), update lokal
  useEffect(() => {
    setQty(initialQuantity);
  }, [initialQuantity]);

  useEffect(() => {
    // Jangan jalankan kalau angka belum berubah dari aslinya
    if (qty === initialQuantity) return;

    const timer = setTimeout(() => {
      onUpdate(cartId, qty);

      // Kalau user klik lagi sebelum 500ms, timer di atas DIHANCURKAN (Cancel)
    }, 500);
    return () => clearTimeout(timer);
  }, [qty, cartId, initialQuantity, onUpdate]);

  const handleChange = (newQuantity: number) => {
    const updatedQty = qty + newQuantity;
    if (updatedQty < 1) return;
    if (updatedQty > maxStock) return;
    setQty(updatedQty);
  };

  return (
    <div className='flex items-center gap-2 overflow-hidden'>
      <Button
        onClick={() => handleChange(-1)}
        disabled={qty <= 1}
        aria-label='Decrease quantity'
      >
        <Minus className='w-4 h-4' />
      </Button>
      <span className='px-4 py-2 min-w-12 text-center border rounded-md border-gray-300'>
        {qty}
      </span>
      <Button
        onClick={() => handleChange(1)}
        disabled={qty >= maxStock}
        aria-label='Increase quantity'
      >
        <Plus className='w-4 h-4' />
      </Button>
    </div>
  );
}

export default UpdateQuantityItem;
