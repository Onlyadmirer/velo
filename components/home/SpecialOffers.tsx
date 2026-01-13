import { Tag, Truck, RefreshCw, Shield } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Tag,
    title: "Harga Terbaik",
    description: "Jaminan harga termurah",
  },
  {
    icon: Truck,
    title: "Gratis Ongkir",
    description: "Untuk pembelian min. Rp 200rb",
  },
  {
    icon: RefreshCw,
    title: "Tukar Mudah",
    description: "Tukar barang dalam 30 hari",
  },
  {
    icon: Shield,
    title: "Pembayaran Aman",
    description: "Transaksi 100% terlindungi",
  },
];

export function SpecialOffers() {
  return (
    <section id='promo' className='py-20 px-6 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Promo Banner */}
        <div className='relative rounded-3xl overflow-hidden mb-16 h-[400px] md:h-[500px]'>
          <Image
            src='https://images.unsplash.com/photo-1601924623211-3f19dc356e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NvcmllcyUyMHNob3BwaW5nfGVufDF8fHx8MTc2NTQ0ODIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            alt='Special Offer'
            fill
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-r from-black/70 to-black/30' />

          <div className='absolute inset-0 flex items-center px-8 md:px-16'>
            <div className='text-white max-w-xl'>
              <div className='inline-block bg-red-600 px-4 py-2 rounded-full mb-4'>
                <span>Promo Spesial</span>
              </div>
              <h2 className='text-4xl md:text-6xl mb-4'>Diskon 50%</h2>
              <p className='text-xl mb-6 text-gray-200'>
                Untuk semua produk pilihan. Penawaran terbatas!
              </p>
              <button className='bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition'>
                Belanja Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition'
            >
              <div className='inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4'>
                <feature.icon className='w-8 h-8' />
              </div>
              <h3 className='text-xl mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
