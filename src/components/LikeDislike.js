import react from "react";

function LikeDislike({ likeButton, dislikeButton, countDislikeButton, countLikeButton }) {
    return (
        <div>
            <button onClick={likeButton}>{countLikeButton}👍</button>
            <button onClick={dislikeButton}>{countDislikeButton}👎</button>
            
        </div>
    )

}

export default LikeDislike;