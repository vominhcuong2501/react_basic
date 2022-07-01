

const stateDefault = {
    taiXiu: true, // trua là tài (từ 3-11 điểm), false là xỉu (> 12 điểm)
    mangXucXac: [
        {ma: 1, hinhAnh: './imageLogo/1.png'},
        {ma: 1, hinhAnh: './imageLogo/1.png'},
        {ma: 1, hinhAnh: './imageLogo/1.png'}
    ],
    soBanThang: 0,
    tongSoBanChoi: 0 
}

export const BTXucXacReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'DAT_CUOC':{
            state.taiXiu = action.taiXiu;
            return {...state}
        };
        break;

        case 'PLAY_GAME':{
            // xử lý random xucxac
            let mangXucXacNgauNhien = [];
            for( let i = 0; i < 3; i++) {
                // mỗi lần lặp random số ngẫu nhiên từ 1 -> 6
                let soNgauNhien = Math.floor(Math.random() *6) + 1;
                // tạo ra 1 đối tượng xuc xac từ số ngẫu nhiên
                let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh: `./imageLogo/${soNgauNhien}.png`};
                // push vào mảng xuc xac ngẫu nhiên
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            // gán lại giá trị mới
            state.mangXucXac = mangXucXacNgauNhien;

            // xử lý tăng bàn chơi
            state.tongSoBanChoi += 1;

            // xử lý số bàn thắng
            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index)=>{
                return tongDiem += xucXac.ma
            }, 0);
            if(tongSoDiem > 11 && state.taiXiu || tongSoDiem <= 11 && state.taiXiu === false) {
                state.soBanThang += 1;
            }
                return {...state}
        }

        default: {
            return {...state}
        }
    }
}