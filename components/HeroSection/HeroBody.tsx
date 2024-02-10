import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/esportsgif.gif'

const HeroBody = () => {
  return (
    <main className='text-white'>
        <div className='relative'>
        <Image src={HeroImage} alt='esport' className='w-full auto h-[800px] opacity-60' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-5xl font-bold'>Organize your own Esports</h1>
          <h1 className='text-5xl font-bold'>Tournaments</h1>
          <p className='text-xl pt-5'>We connect brands with competitive, young and influential player through world-class online esports experiences</p>

            <div className='mt-5'>
                <button className='px-4 py-2 bg-white text-black rounded-md'>Get Started</button>

                <button className='px-4 py-2 bg-black text-white rounded-md ml-5'>Learn More</button>
                </div>
        </div>
    </div>
    </main>
  )
}

export default HeroBody