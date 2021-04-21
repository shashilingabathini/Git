import { createSlice } from '@reduxjs/toolkit'
import {
    useInjectReducer,
    useInjectSaga
} from 'redux-injectors'
import { saagaAPIPosts } from './saaga'
import { all } from 'redux-saga/effects'

export const initialState = {
    loading : false,
    error : null,
    posts : []
}

const slice = createSlice({
    name : '_apiSlice',
    initialState,
    reducers: {
        loadPosts(state,action) {
            state.loading = true
        },
        postLoadCompleted(state,action) {
            state.loading = false
            state.posts = action.payload
        },
        postError(state,action) {
            state.loading = false
            state.error =  action.payload
        }
    }
})

export  const { actions , reducer } =  slice


function* addSagaMiddleware() {
    yield all([
        saagaAPIPosts()
        ]
    )
}


export const useAPISaaga = () => {
    useInjectReducer({ key : slice.name , reducer : slice.reducer})
    useInjectSaga({  key: slice.name , saga : addSagaMiddleware })
    return { actions  : slice.actions}
}