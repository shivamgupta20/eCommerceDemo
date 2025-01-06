import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from './actionTypes';
import axios from 'axios';

function* getCountriesSaga(){
    const countriesData = yield call(getCountriesApi);
    if(countriesData.status === 200){
        const data = countriesData.data.data;
        yield put({type: GET_COUNTRIES_SUCCESS, data});
    } else {
        yield put({type: GET_COUNTRIES_FAILURE})
    }

}
export default function* countrySaga(){
    yield takeEvery(GET_COUNTRIES, getCountriesSaga);
}

const getCountriesApi = async () => {
    return await axios.get('https://countriesnow.space/api/v0.1/countries/');
}