import React, {useContext, useState} from "react";
import {StoreContext} from '@/App'

export default function Buttons() {
    const store = useContext(StoreContext)
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const like = () => {
        if (liked) {
            store.unlikePost();
            setLiked(false)
        } else {
            store.likePost();
            setLiked(true);
        }
    }

    const dislike = () => {
        if (disliked) {
            store.undislikePost();
            setDisliked(false)
        } else {
            store.dislikePost();
            setDisliked(true);
        }
    }

    return (
        <div className="row">
            <div className="col-sm">
                <button type="button" className={`btn align-top ` + (liked ? `btn-primary` : `btn-light`)} onClick={like}><i
                    className="fa fa-thumbs-o-up"/>Like
                </button>
            </div>
            <div className="col-sm">
                <button type="button" className={`btn align-top ` + (disliked ? `btn-danger` : `btn-light`)} onClick={dislike}><i
                    className="fa fa-thumbs-o-down"/>Dislike
                </button>
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-light"
                        onClick={() => document.getElementById('comment').focus()}><i className="fa fa-comment-o"/>Comment
                </button>
            </div>
        </div>
    );
}