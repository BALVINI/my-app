import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col items-center justify-center min-h-screen py-20 bg-pink-100">
        <h1 className='text-4xl font-bold text-pink-600'>Fresh Flowers, Delivered to You</h1>
        <p className='text-lg text-gray-600 mt-2'>Shop beautiful flowers for every occasion.</p>
        <a href='/products' className='mt-4 px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-700 transition'>
          Shop Now
        </a>
      </section>
    </main>
  );
}
