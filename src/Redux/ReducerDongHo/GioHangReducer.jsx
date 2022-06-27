// khởi tạo giá trị ban đầu của store
const stateGioHang = {
    gioHang: []
}

export const GioHangReducer = (state=stateGioHang, action) => {
    switch(action.type) {
        case 'THEM_GIO_HANG': {
            // xử lý logic thêm giỏ hàng
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        };
        break;

        case 'XOA_GIO_HANG_INDEX': {
            let gioHangCapNhat = [...state.gioHang];
            // xóa giỏ hàng dựa vào index
            gioHangCapNhat.splice(action.index,1);
            // gán lại giá trị mới cho state.gioHang => render lại giao diện
            state.gioHang = gioHangCapNhat;
            return {...state};
        };
        break;

        case 'XOA_GIO_HANG_MASP': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1) {
                gioHangCapNhat.splice(action.index, 1);
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        };
        break;

        case 'TANG_GIAM_SL': {
            const {index, tangGiam} = action;
            let gioHangCapNhat = [...state.gioHang];
            if(tangGiam) {
                gioHangCapNhat[index].soLuong += 1;
            } else if(gioHangCapNhat[index].soLuong >= 1) {
                gioHangCapNhat[index].soLuong -= 1;
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        };
        break;

        default: {
            return {...state}
        }
    }
}