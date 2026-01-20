import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Shirts",
    image: "https://res.cloudinary.com/drldcq7wa/image/upload/shirt_p95jml",
  },
  {
    id: 2,
    name: "Dress",
    image:
      "https://res.cloudinary.com/drldcq7wa/image/upload/elegant-dress_xfcypk",
  },
  {
    id: 3,
    name: "Jackets",
    image: "https://res.cloudinary.com/drldcq7wa/image/upload/jacket_mxdomj",
  },
  {
    id: 4,
    name: "Pants",
    image: "https://res.cloudinary.com/drldcq7wa/image/upload/jeans_jllwmp",
  },
  {
    id: 5,
    name: "Shoes",
    image: "https://res.cloudinary.com/drldcq7wa/image/upload/shoe_nvmgfo",
  },
  {
    id: 6,
    name: "Bags",
    image: "https://res.cloudinary.com/drldcq7wa/image/upload/bag_a1q6zh",
  },
  {
    id: 7,
    name: "Sweaters",
    image: "https://res.cloudinary.com/drldcq7wa/image/upload/sweater_ubzjh0",
  },
  {
    id: 8,
    name: "Skirts",
    image: "https://res.cloudinary.com/drldcq7wa/image/upload/rok_m86dlz",
  },
];

export function Category() {
  return (
    <div className='flex flex-row mx-auto w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent py-1 gap-4 mb-8'>
      {categories.map((category) => (
        <Link
          href={`/shop/category/${category.name}`}
          key={category.id}
          className='relative group cursor-pointer overflow-hidden w-[200px] shrink-0 rounded-lg aspect-4/5'
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent'></div>
          <div className='absolute bottom-0 left-0 right-0 p-4'>
            <h3 className='text-white drop-shadow-lg'>{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
