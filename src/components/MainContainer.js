import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="overflow-x-auto whitespace-nowrap">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
