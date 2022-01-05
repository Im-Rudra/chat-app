import { createSlice } from "@reduxjs/toolkit";



export const chatSlice = createSlice({
    name:'chat',
    initialState:{
        activeUsers:[],
        messages:[],


    },
    reducers:{
        messageReceiveFrontend: (state, payload) => {
            state.messages= payload.body
        },
        usersReceiveFromServer: (state, payload) => {
            state.activeUsers=payload.body
        }
    }

})

export const {messageReceiveFrontend, usersReceiveFromServer} = chatSlice.actions;
export default chatSlice.reducer