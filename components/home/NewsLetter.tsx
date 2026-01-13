import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className='py-20 px-6 lg:px-12 bg-black text-white'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6'>
          <Mail className='w-8 h-8' />
        </div>
        <h2 className='text-4xl md:text-5xl mb-4'>
          Dapatkan Penawaran Eksklusif
        </h2>
        <p className='text-xl text-gray-300 mb-8'>
          Daftar newsletter kami dan dapatkan diskon 10% untuk pembelian pertama
        </p>

        <form className='flex flex-col sm:flex-row gap-4 max-w-xl mx-auto'>
          <input
            type='email'
            placeholder='Masukkan email Anda'
            className='flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40'
          />
          <button
            type='submit'
            className='bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition'
          >
            Daftar
          </button>
        </form>

        <p className='text-sm text-gray-400 mt-4'>
          Kami menghargai privasi Anda. Berhenti berlangganan kapan saja.
        </p>
      </div>
    </section>
  );
}
