
import React from "react";
import video from "../data/video";


function Comments({isComments, setComments}){
    let videoComments = [...video.comments]

    function handleClick() {
        return setComments(!isComments)
        
    }

    const showComments = videoComments.map((item) => {
        if(isComments){
            return (
                <li key={item.id} className={"comments"}>
                    <h3>{item.user}</h3>
                    <h5>{item.comment}</h5>
                </li>
            )
        } else {
            return null;
        }
        
    })

    

    return (
        <>
            <button onClick={handleClick}>{isComments ? "Hide Comments" : "Show Comments"}</button>
            <hr></hr>
            <h2>{isComments ? videoComments.length + " Comment(s)" : null}</h2>
            <ul>
               {showComments} 
            </ul>
            
        </>
    )

}

export default Comments;