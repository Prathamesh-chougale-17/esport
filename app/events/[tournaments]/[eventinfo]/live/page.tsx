import React from "react";

const TournamentsPage = () => {
  return (
    <main className="bg-black lg:flex text-2xl  justify-evenly">
      <div>
        <div className="pt-4">
          <h1 className="text-violet-700">Prathamesh Chougale</h1>
        </div>
        <iframe
          src="https://player.twitch.tv/?channel=shyam2173&parent=esport-nexus.vercel.app"
          scrolling="no"
          height="378"
          width="620"
        ></iframe>
      </div>
      <div>
        <div className="pt-4">
          <h1 className="text-violet-700">Ronak Dagale</h1>
        </div>

        <iframe
          src="https://player.twitch.tv/?channel=shyam2173&parent=esport-nexus.vercel.app"
          scrolling="no"
          height="378"
          width="620"
        ></iframe>
      </div>
    </main>
  );
};

export default TournamentsPage;
