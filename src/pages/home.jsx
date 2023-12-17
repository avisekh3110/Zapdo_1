import Blur from "./components/blur";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Social from "./components/social";

function Home() {
  return (
    <div className="bg-[#181B1F] h-screen">
      <Navbar />
      <Intro />
      <Blur />
      <Social />
    </div>
  );
}

export default Home;
