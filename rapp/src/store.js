import { configureStore , getDefaultMiddleware } from '@reduxjs/toolkit';
import { createReducer }  from './reducer'
import createSagaMiddleware from 'redux-saga'
import { createInjectorsEnhancer } from 'redux-injectors'


const sagaMiddleware = createSagaMiddleware({})
const { run: runSaga } = sagaMiddleware
const _middleware  = [ sagaMiddleware]

const enhancers = [
    createInjectorsEnhancer({
        createReducer,
        runSaga
    })
]

export const store = configureStore({
    reducer : createReducer(),
    middleware : [...getDefaultMiddleware(),..._middleware],
    devTools :true,
    enhancers
})