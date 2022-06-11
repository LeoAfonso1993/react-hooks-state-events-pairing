import react, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Iframe from "./Iframe.js";
import LikeDislike from "./LikeDislike.js";
import Comments from "./Comments.js";

function App() {
  const[countLikeButton, setLikeButton] = useState(video.upvotes)
  const[countDislikeButton, setDislikeButton] = useState(video.downvotes)
  const[isComments, setComment] = useState(true)
  

  function likeButton() {
    return setLikeButton(countLikeButton + 1)
    
  }

  function dislikeButton() {
    return setDislikeButton(countDislikeButton + 1)
  }



  return (
    <div className="App">
      <Header />
      <Iframe />
      <LikeDislike 
      likeButton={likeButton}  
      countLikeButton={countLikeButton}
      dislikeButton={dislikeButton}
      countDislikeButton={countDislikeButton}
      />
      <br/>
      <Comments isComments={isComments} setComments={setComment}/>
    </div>
  );
}

export default App;
