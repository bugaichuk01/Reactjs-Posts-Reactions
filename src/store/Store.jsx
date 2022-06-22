import { observable, action, computed } from 'mobx'

class Store {
    @observable likesCount = 0
    @observable dislikesCount = 0

    @observable comments = []

    @action likePost() {
        this.likesCount++;
    }

    @action unlikePost() {
        this.likesCount--;
    }

    @action dislikePost() {
        this.dislikesCount++;
    }

    @action undislikePost() {
        this.dislikesCount--;
    }

    @action postComment(comment) {
        this.comments.push(comment)
    }

    @computed get commentsCount(){
        return this.comments.length;
    }

}

const storeInstance = new Store()

export default storeInstance;