interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Component Desks",
    image:
      "https://images.unsplash.com/photo-1622579521534-8252f7da47fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzayUyMHdoaXRlfGVufDF8fHx8MTc2Nzg3MDI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Office Desks",
    image:
      "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2Nzc1OTU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Gaming Desks",
    image:
      "https://images.unsplash.com/photo-1594636797501-ef436e157819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzY3NzUzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Glass Desks",
    image:
      "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGRlc2slMjBvZmZpY2V8ZW58MXx8fHwxNzY3ODcwMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Standing Desks",
    image:
      "https://images.unsplash.com/photo-1632923946466-94782643dfb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZGluZyUyMGRlc2slMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3ODcwMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Standing Desks",
    image:
      "https://images.unsplash.com/photo-1632923946466-94782643dfb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZGluZyUyMGRlc2slMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3ODcwMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Category() {
  return (
    <div className='flex flex-row mx-auto w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent py-1 gap-4 mb-8'>
      {categories.map((category) => (
        <div
          key={category.id}
          className='relative group cursor-pointer overflow-hidden w-[200px] shrink-0 rounded-lg aspect-4/5'
        >
          <img
            src={category.image}
            alt={category.name}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent'></div>
          <div className='absolute bottom-0 left-0 right-0 p-4'>
            <h3 className='text-white drop-shadow-lg'>{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
