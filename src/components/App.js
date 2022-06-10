import react, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Iframe from "./Iframe.js";
import LikeDislike from "./LikeDislike.js";

function App() {
  const[countLikeButton, setLikeButton] = useState(0)
  

  function likeButton() {
    return setLikeButton(countLikeButton + 1)
  }



  return (
    <div className="App">
      <Header />
      <Iframe />
      <LikeDislike 
      likeButton={likeButton}  
      countLikeButton={countLikeButton}
      />
    </div>
  );
}

export default App;
