import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Tianna Jenkins', status: 'Busy', posts: 1},
    {id: '1', name: 'Kevin Grant', status: 'out of town', posts: 1},
    {id: '2', name: 'Madison Price', status: 'Available', posts: 1}
]



const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        userPosts:{},
        userDeleted:{}
    }
})


export default usersSlice.reducer;