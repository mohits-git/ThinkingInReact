import { useState } from "react";

export default function Like() {
    const [likesCount, setLikesCount] = useState(68);
    function handleLike() {
        const el = document.querySelector('#likebutton')
        el.setAttribute('class', `${el.getAttribute('class')} text-red-500`)
        el.setAttribute('disabled', true)
        setLikesCount(likesCount+1)
    }

    return (
       <> 
        <div className="inline-flex">
        <button id="likebutton" onClick={handleLike} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold ">Like &hearts;</button>
        <span className="mt-2 ml-3 flex items-center text-sm font-semibold text-white">Liked By {likesCount} people</span>
        </div>
        </>
    )
}
