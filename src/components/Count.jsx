import React, {useContext} from 'react';
import {useObserver} from 'mobx-react';
import {StoreContext} from '@/App'

const Count = () => {
    const store = useContext(StoreContext)

    return useObserver(() => (
        <div className="reactions-count">
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up"/>{store.likesCount}
            </div>
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-down"/>{store.dislikesCount}
            </div>
            <div className="col-sm" align="right">
                {store.commentsCount} comments
            </div>
        </div>
    ))
}

export default Count;