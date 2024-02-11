import { getGamesBySlug, getTournament } from "@/sanity/sanity-util";
import React from "react";
import Image from "next/image";
import GameBlock from "@/components/Cards/GameBlock";
import Link from "next/link";

const TournamentPage = async ({
  params,
}: {
  params: { tournaments: string };
}) => {
  const games = await getGamesBySlug(params.tournaments);
  const gameimage = games.logo;
  const tournaments = await getTournament();
  return (
    <main className="bg-black">
      <div className="h-[400px]  mb-32">
        <Image
          src={games.image}
          alt="GamesImages"
          height={400}
          width={400}
          className="w-full h-[500px]"
        />
        <div className="text-center pt-4">
          <h1 className="text-4xl">Upcoming Tournaments</h1>
          {tournaments?.length > 0 ? (
            tournaments.map((p) =>
              p.gametype === games.slug ? (
                <Link href={`/events/${games.slug}/${p.event}`} key={p.event}>
                  <GameBlock
                    key={p.event}
                    location={p.location}
                    logo={gameimage}
                    gameName={p.eventname}
                    date={p.startdate}
                  />
                </Link>
              ) : (
                <div key={p.event}>No Tournaments found</div>
              )
            )
          ) : (
            <div>No Tournaments found</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default TournamentPage;
