import { getGamesBySlug } from '@/sanity/sanity-util'
import React from 'react'
import Image from 'next/image'

const TournamentPage = async ({params}:{params:{tournaments:string}}) => {
    const games = await getGamesBySlug(params.tournaments);
  return (
    <main>
        <div className='h-[400px]'>
       <Image src={games.image} alt='GamesImages' height={400} width={400}  className='w-full h-[500px]' />
         <div className='text-center'>
              <h1>{games.title}</h1>
              <p>Game</p>


              </div>
        </div>
    </main>
  )
}

export default TournamentPage