import { create } from "zustand";
import { persist } from 'zustand/middleware'

//  basketItems, invoice
const initialData = {
    basketItems: [],
    itemsCount: 0,
    invoice: {
        totalPrice: 0,
        deliveryCost: 0,
        discount: 0,
        prepareCost: 0,

    }
}

const useBasket = create(
    persist(
        (set, get) => {

            return ({
                ...initialData,

                actions: {
                    addToBasket: (payload) => {
                        const items = get().basketItems

                        // alreadyExist
                        const alreadyExist = items.some((item) => item.id === payload.id);
                        if (alreadyExist) {
                            set((oldState) => ({

                                basketItems: oldState.basketItems.map((item) => {
                                    if (item.id === payload.id) {
                                        return { ...item, quantity: item.quantity + 1 }
                                    } else {
                                        return item
                                    }
                                }),
                                invoice: {
                                    ...oldState.invoice,
                                    totalPrice: oldState.invoice.totalPrice + payload.price
                                },
                                itemsCount: oldState.itemsCount + 1

                            }))
                        }
                        else {
                            set((oldState) => ({
                                basketItems: [...oldState.basketItems, { ...payload, quantity: 1 }],
                                invoice: {
                                    ...oldState.invoice,
                                    totalPrice: oldState.invoice.totalPrice + payload.price
                                },
                                itemsCount: oldState.itemsCount + 1

                            }))
                        }




                    },
                    removeFromBasket: (payload) => {
                        // should remove item
                        const shouldRemove = payload.quantity === 1;
                        if (shouldRemove) {
                            set((oldState) => ({
                                invoice: {
                                    ...oldState.invoice,
                                    totalPrice: oldState.invoice.totalPrice - payload.price
                                },
                                basketItems: oldState.basketItems.filter((item) => item.id !== payload.id),
                                itemsCount: oldState.itemsCount - 1
                            }))
                        } else {
                            set((oldState) => ({
                                invoice: {
                                    ...oldState.invoice,
                                    totalPrice: oldState.invoice.totalPrice - payload.price
                                },
                                basketItems: oldState.basketItems.map((item) => {
                                    if (item.id === payload.id) {
                                        return { ...item, quantity: item.quantity - 1 }
                                    } else return item

                                }),
                                itemsCount: oldState.itemsCount - 1

                            }))
                        }
                    },
                    removeAll: () => {
                        set(() => (initialData))
                    }
                }


            })

        }), {
    name: 'basket',
    partialize: (state) =>
        Object.fromEntries(
            Object.entries(state).filter(([key]) => !['actions'].includes(key)),
        ),
})

export default useBasket