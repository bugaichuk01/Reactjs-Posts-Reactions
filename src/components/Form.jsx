import React from 'react';
import {StoreContext} from '@/App';

export default class Form extends React.Component {

    handleSubmit = (e, store) => {
        e.preventDefault();
        store.postComment(this.comment.value);
        this.comment.value = "";
    }

    render() {
        return (
            <StoreContext.Consumer>
                {
                    store => (

                        <form onSubmit={(e) => this.handleSubmit(e, store)}>
                            <div>
                                <input type="text" id={'comment'} className="form-control"
                                       placeholder={"Write a comment ..."} ref={node => {
                                    this.comment = node;
                                }}/>
                            </div>
                        </form>
                    )
                }
            </StoreContext.Consumer>
        )
    }
}