import { create } from "zustand";

//  basketItems, invoice
const initialData = {
    basketItems: [],
    invoice: {
        totalPrice: 0,
        deliveryCost: 0,
        discount: 0,
        prepareCost: 0,

    }
}

const useBasket = create((set, get) => {

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
                        }

                    }))
                }
                else {
                    set((oldState) => ({
                        basketItems: [...oldState.basketItems, { ...payload, quantity: 1 }],
                        invoice: {
                            ...oldState.invoice,
                            totalPrice: oldState.invoice.totalPrice + payload.price
                        }
                    }))
                }




            },
            removeFromBasket: () => { }
        }


    })

})

export default useBasket