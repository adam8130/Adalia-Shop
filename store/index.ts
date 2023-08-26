import { ShopSettings } from '@/__generated__/types'
import { makeAutoObservable } from 'mobx' 
import { createContext, useContext } from 'react'


class Store {

    constructor () {
        makeAutoObservable(this)
    }
    
    menubarItems: ShopSettings['menubarItems'] = []
    shopTips: ShopSettings['shopTips'] = []
    shopCampaigns: ShopSettings['shopCampaigns'] = []
    payment: ShopSettings['payment'] = []
    delivery: ShopSettings['delivery'] = []
    cartVisible = false
    cartContent = []

    setMenubarItems = (menubarItems: ShopSettings['menubarItems']) => this.menubarItems = menubarItems
    setShopTips = (shopTips: ShopSettings['shopTips']) => this.shopTips = shopTips
    setShopCampaigns = (shopCampaigns: ShopSettings['shopCampaigns']) => this.shopCampaigns = shopCampaigns
    setPayment = (payment: ShopSettings['payment']) => this.payment = payment
    setDelivery = (delivery: ShopSettings['delivery']) => this.delivery = delivery
    setCartVisible = (visible: boolean) => this.cartVisible = visible
    setCartContent = (updateFn: (prev: typeof this.cartContent) => any) => {
        this.cartContent = updateFn(this.cartContent);
    }
}

const store = new Store()
const context = createContext(store)
export const useStore = () => useContext(context)