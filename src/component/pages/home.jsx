import React, { useEffect } from "react";
import Intro from "../intro/intro";
import WaitList from "../waitlist/waitlist";

const Home = () => {
  useEffect(() => {
    document.title = "Out Africa | Home";
  }, []);

  return (
    <div>
      <Intro />
      <WaitList />
    </div>
  );
};

export default Home;
