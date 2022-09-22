import React, { useEffect } from "react";
import Intro from "../intro/intro";
import WaitList from "../waitlist/waitlist";

const Home = () => {
  useEffect(() => {
    document.title = "Out Africa";
  }, []);

  return (
    <div>
      <Intro />
      <WaitList />
    </div>
  );
};

export default Home;
