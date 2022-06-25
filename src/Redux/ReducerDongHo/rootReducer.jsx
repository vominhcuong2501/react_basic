import {combineReducers} from 'redux';
import { GioHangReducer } from './GioHangReducer';


// store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi sẽ chứa các Reducer cho từng nghiệp vụ (store con)
    GioHangReducer: GioHangReducer
})