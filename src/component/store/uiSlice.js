import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ogo',
    initialState: {
        spa: false, 
        spinner: false, 
        btnname: 'Sing up',
        home: true,
        user: false,
        fetch: '',
        getdata: null,
        id: '',
    },
    reducers: {
        newspa (state){
            state.spa = true
            state.home = false
        },
        home(state){
            state.home = true
            state.spa = false
            state.user = false
        },
        gospinner(state){
            state.spinner = true
        },
        stopspinner(state){
            state.spinner = false
        },
        btn(state, action){
            state.btnname = action.payload
            state.spa = false
            state.user = false
        },
        user(state){
            state.user = true
            state.spa = false
            state.home = false
        },
        postfetch(state,action){
            let a = action.payload
            state.id=a.id
                fetch('https://userdata-2d3c9-default-rtdb.firebaseio.com/data.json',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: a.text, email: a.email, password: a.password, id: a.id})
            
                }).then(res=> res.json())
                .then(data=>console.log(data))
                .catch(()=>state.fetch='Ощибка при отправке')
        },
        renderdata(state,action){
            let data = action.payload
            state.getdata = data
        }

    }
})
export const uiActions = uiSlice.actions
export default uiSlice