import react from "react";

function LikeDislike({ likeButton, dislikeButton, countDislikeButton, countLikeButton }) {
    return (
        <div>
            <button onClick={likeButton}>{countLikeButton}👍</button>
            
        </div>
    )

}

export default LikeDislike;