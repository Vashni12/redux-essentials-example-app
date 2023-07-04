import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { client } from '../../api/client'

const inititialState =  [];

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async(_,{getState})=>{
        const allNotifications = selectAllNotifications
        const [latestNotification] = allNotifications
        const LastestTimestamp = latestNotification ? latestNotification.date : ''
        const response = await client.get(
            `/fakeApi/notifications ?since=${LastestTimestamp}`
        )
        return response.data
    }
)


const notificationsSlice = createSlice({
    name: 'notifications',
    inititialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchNotifications.fulfilled, (state,action)=>{
            state.push(...action.payload)

            state.sort((a,b)=>b.date.localCompare(a.date))
        })
    }

})



export default notificationsSlice.reducer;

export const selectAllNotifications = state => state.notifications