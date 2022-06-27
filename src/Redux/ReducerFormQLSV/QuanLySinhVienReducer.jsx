const stateSinhVien = {
    mangSinhVien: []
}

export const QuanLySinhVienReducer = (state = stateSinhVien, action) => {
    switch(action.type) {
        case 'THEM_SINH_VIEN' : {
            // thêm dữ liệu sinh viên vào mangSinhVien
            const mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
            state.mangSinhVien = mangSVUpdate;
            return {... state};
        };break;

        default: {
            return {...state};
        }
    }
    
}