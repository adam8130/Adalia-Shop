import { makeAutoObservable } from 'mobx' 
import { createContext, useContext } from 'react'


class Store {

    constructor () {
        makeAutoObservable(this)
    }

    cartVisible = false
    cartContent = []

    setCartVisible = (visible: boolean) => this.cartVisible = visible
    setCartContent = (updateFn: (prev: typeof this.cartContent) => any) => {
        this.cartContent = updateFn(this.cartContent);
    }
}

const store = new Store()
const context = createContext(store)
export const useStore = () => useContext(context)