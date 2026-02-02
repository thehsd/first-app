import { create } from "zustand"


export const useCount = create((set) => {
    return (
        {
            count: 0,
            increase: (payload) => {
                set((oldState) => ({
                    count: oldState.count + payload
                }))
            },
            decrease: () => {
                set((oldState) => ({
                    count: oldState.count - 1
                }))
            }

        }
    );
})




