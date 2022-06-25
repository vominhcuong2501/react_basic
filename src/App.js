import logo from './logo.svg';
import './App.css';
import SinhVien from './Components/DataBinding/SinhVien';
import Event from './Components/DataBinding/Event';
import DemoIf from './Components/CauTrucDieuKien_Rerender/DemoIf';
import BaiTapState from './Components/CauTrucDieuKien_Rerender/BaiTapState';
import DemoVongLap from './Components/CauTrucLap/DemoVongLap';
import BaiTapVongLap from './Components/BaiTap/BaiTapVongLap';
import DemoProps from './Components/Props/DemoProps';
import BaiTapCar from './Components/BaiTapCar/BaiTapCar';
import BaiTapTruyenFunction from './Components/Props/BaiTapTruyenFunction/BaiTapTruyenFunction';
import BaiTapGioHang from './Components/Props/BaiTapGioHang/BaiTapGioHang';
import BaiTapPhim from './Components/Props/BaiTapPhim/BaiTapPhim';
import BTGioHangRedux from './Components/BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
import BaiTapGiay from './Components/BaiTapRedux/BaiTapGiay/BaiTapGiayRedux';

function App() {
  return (
    <div className="App conatiner">
      {/* <SinhVien /> */}
      {/* <Event /> */}
      {/* <DemoIf /> */}
      {/* <BaiTapState /> */}
      {/* <DemoVongLap /> */}
      {/* <BaiTapVongLap /> */}
      {/* <DemoProps/> */}
      {/* <BaiTapCar /> */}
      {/* <BaiTapTruyenFunction /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BaiTapPhim /> */}
      {/* <BTGioHangRedux /> */}
      <BaiTapGiay />
    </div>
  );
}

export default App;
