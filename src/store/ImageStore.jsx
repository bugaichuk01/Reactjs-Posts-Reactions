import { action, runInAction, observable } from "mobx";

class ImageStore {
    
    id = Math.floor(Math.random() * 50) + 1

    @observable imageUrl = ``

    @action async fetchImage() {
            const characterId = ++this.id
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            const data = await response.json()

            runInAction(() => {
                this.imageUrl = data.image
            })
    }


}

const imageStore = new ImageStore()

export default imageStore;