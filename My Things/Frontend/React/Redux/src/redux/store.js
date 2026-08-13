import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer, //  ye reducer hmari state ko manage krne me help krega.
    },
}) // ise import krenge main.jsx me aur Provider ke andar pass krenge taki app ke sare components ko access ho sake. Provider hi redux store ki access provide krwata hai.
// Ye apno ne redux ka store bnaya hai jisme counterReducer ko include kiya hai. Ye store application ke state ko manage karega aur components ko state access karne aur update karne ki facility dega. Ek single source of truth ban gya.



// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux