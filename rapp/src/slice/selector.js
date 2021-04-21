import { createSelector } from '@reduxjs/toolkit'
import { initialState } from './index'

const _state =  (state) => state._apiSlice || initialState

export const selectLoading =  createSelector(
    [_state],
    state => state.loading
)

export const selectPosts =  createSelector(
    [_state],
    state => state.posts
)