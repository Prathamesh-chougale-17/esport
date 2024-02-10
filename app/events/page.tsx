import TiltGamesCard from '@/components/Cards/HoverCard'
import { Games, getGames } from '@/sanity/sanity-util'
import React from 'react'

const EventsPage =async () => {
    const games = await getGames()
  return (
    <div className="flex w-full flex-wrap justify-center  sm:justify-center bg-black">
         {games?.length > 0 ? (
        games.map(
          (p: Games) => (
            <TiltGamesCard
              key={p.title}
              title={p.title}
              image={p.image}
              slug={p.slug}
            />
          )
        )
      ) : (
        <div>No Games found</div>
      )}
      </div>
  )
}

export default EventsPage