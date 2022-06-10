import react from "react";
import video from "../data/video";

function Iframe() {
    return(
        <>
            <iframe
            width="919"
            height="525"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
             />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
      </>
    )
    
}
export default Iframe