import { spawn } from "redux-saga/effects";
import countrySaga from "./countrySaga";

function* mySaga(action){
    yield spawn(countrySaga);
}
export default mySaga;