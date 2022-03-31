
import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';


function* fetchPostsSaga(action) {
    const posts = yield call(api.fetchPosts);
    console.log('[posts]', posts)
};

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga)
};

// generator function ES6

export default mySaga;