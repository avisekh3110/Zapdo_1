import Intro from "../components/intro";

import Social from "../components/social";

function Home() {
  return (
    <div className="h-fit flex flex-col justify-between">
      <Intro />
      <Social />
    </div>
  );
}

export default Home;
