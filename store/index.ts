import { ShopSettings } from '@/__generated__/types'
import { makeAutoObservable } from 'mobx' 
import { createContext, useContext } from 'react'


class Store {

    constructor () {
        makeAutoObservable(this)
    }
    
    // shop settings
    shopMenuItems: ShopSettings['shopMenuItems'] = []
    shopTips: ShopSettings['shopTips'] = []
    shopCampaigns: ShopSettings['shopCampaigns'] = []
    shopPayment: ShopSettings['shopPayment'] = []
    shopDelivery: ShopSettings['shopDelivery'] = []
    setShopMenuItems = (shopMenuItems: ShopSettings['shopMenuItems']) => this.shopMenuItems = shopMenuItems
    setShopTips = (shopTips: ShopSettings['shopTips']) => this.shopTips = shopTips
    setShopCampaigns = (shopCampaigns: ShopSettings['shopCampaigns']) => this.shopCampaigns = shopCampaigns
    setShopPayment = (shopPayment: ShopSettings['shopPayment']) => this.shopPayment = shopPayment
    setShopDelivery = (shopDelivery: ShopSettings['shopDelivery']) => this.shopDelivery = shopDelivery
    
    // cart
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