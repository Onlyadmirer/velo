import { ArrowRight } from "lucide-react";
import Image from "next/image";

const collections = [
  {
    id: 1,
    title: "Casual Wear",
    description: "Nyaman untuk sehari-hari",
    image: "/featured/casual-wear.jpeg",
    items: "50+ Item",
  },
  {
    id: 2,
    title: "Elegant Dress",
    description: "Untuk acara spesial",
    image: "/featured/elegant-dress.jpeg",
    items: "35+ Item",
  },
  {
    id: 3,
    title: "Streetwear",
    description: "Gaya urban terkini",
    image: "/featured/streetwear.jpeg",
    items: "40+ Item",
  },
  {
    id: 4,
    title: "Summer Collection",
    description: "Segar untuk musim panas",
    image: "/featured/summer-collection.jpeg",
    items: "60+ Item",
  },
];

export function FeaturedCollections() {
  return (
    <section id='collections' className='py-20 px-6 lg:px-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4'>Koleksi Unggulan</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Temukan koleksi pakaian terbaik untuk setiap kesempatan
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {collections.map((collection) => (
            <div
              key={collection.id}
              className='group relative overflow-hidden rounded-2xl cursor-pointer'
            >
              <div className='aspect-3/4 relative'>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
              </div>

              <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                <span className='text-sm opacity-80'>{collection.items}</span>
                <h3 className='text-2xl mb-1'>{collection.title}</h3>
                <p className='text-sm opacity-90 mb-3'>
                  {collection.description}
                </p>
                <div className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <span className='text-sm'>Lihat Koleksi</span>
                  <ArrowRight className='w-4 h-4' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
