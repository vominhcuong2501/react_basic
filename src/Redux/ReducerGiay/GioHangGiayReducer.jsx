const stateGioHangGiay = {
    gioHang: []
}

export const GioHangGiayReducer = (state = stateGioHangGiay, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.id === action.spGioHang.id);
            if(index !== -1) {
                gioHangCapNhat[index].quantity += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }; 
        break;

        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            gioHangCapNhat.splice(action.index,1);
            state.gioHang = gioHangCapNhat;
            return {...state}
        }; 
        break;

        case 'TANG_GIAM_SL':{
            let {index, tangGiam} = action;
            let gioHangCapNhat = [...state.gioHang];
            if(tangGiam) {
                gioHangCapNhat[index].quantity += 1;
            } else if(gioHangCapNhat[index].quantity > 1) {
                gioHangCapNhat[index].quantity -= 1;
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        };
        break;
        default: {
            return {...state};
        }
    }

}