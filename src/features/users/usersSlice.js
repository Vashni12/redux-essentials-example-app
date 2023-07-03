import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {client } from '../../api/client'



const initialState = {users:[]}


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.data
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        userPostsAdded:{
            reducer(state,action){
                state[action.payload].posts++
            }
        },
        userDeleted:{}
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled,(state,action) =>{
            return action.payload
        })
    }
})



export const selectAllUsers = state => state.users

export const selectUserById = (state,userId) => {
    state.users.find(user => user.id === userId)
}

export default usersSlice.reducer;