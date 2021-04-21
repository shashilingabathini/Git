import { takeLatest , put , delay } from 'redux-saga/effects'
import { actions } from './index'


export function* _saagaAPIPosts() {
    try {
        yield delay(5000)
       var res = yield fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((results) => {
            return results
        })
        yield put(actions.postLoadCompleted(res))
    } catch (e) {
        yield put(actions.postError(e))
    }
}

export function* saagaAPIPosts() {
    yield takeLatest(actions.loadPosts,_saagaAPIPosts)
}