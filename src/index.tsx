import { Hero } from "../components/Hero";
import { WhoAreTheRegenRangers } from "../components/WhoAreTheRegenRangers";
import { WhatIsOdc } from "../components/WhatIsOdc";
import { TrainedModelDocs } from "../components/TrainedModelDocs";
import { Benefits } from "../components/Benefits";

export default function Home() {
  return (
    <>
      <main>

        <Hero />

        <WhatIsOdc />

        <TrainedModelDocs />

        <WhoAreTheRegenRangers />

        <Benefits />
        
      </main>

    </>
  );
}
