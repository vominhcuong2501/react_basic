import {combineReducers} from 'redux';
import { GioHangReducer } from './ReducerDongHo/GioHangReducer';
import {GioHangGiayReducer} from './ReducerGiay/GioHangGiayReducer';
import { GioHangBurgerReducer } from './ReducerBurger/GioHangBurgerReducer';

// store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi sẽ chứa các Reducer cho từng nghiệp vụ (store con)
    GioHangReducer,
    GioHangGiayReducer,
    GioHangBurgerReducer,
})