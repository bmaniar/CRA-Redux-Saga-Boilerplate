import {delay} from 'redux-saga'

export default function* testSaga(){
    console.log('working');
    yield delay(100)
}