import React from 'react'
import Lottie from "react-lottie";
import animationData from "./wip.json";


function WorkInProgress() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div>
        Work In Progress
    </div>
  )
}

export default WorkInProgress;