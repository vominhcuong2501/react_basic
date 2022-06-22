import React, { Component } from "react";
import data from "./../../../Data/Data.json";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: data[0],
    };
  }

  renderSanPham = () => {
    return data.map((sp, index) => {
        return (
            <SanPham key={index} sp={sp} xemChiTiet = {this.xemChiTiet}/>
        )
    });
  };

  // dữ liệu cần lấy ở component DanhSachSanPham => đặt callback function tại DanhSachSanPham
  // xử lý nút xemChiTiet
  xemChiTiet = (sanPham) => {
    this.setState({
        sanPhamChiTiet: sanPham
    })
  }

  render() {
    let {sanPhamChiTiet} = this.state;
    return (
      <div className="container">
        <div className="row">
            {this.renderSanPham()}
        </div>
        <div className="row my-5">
            <div className="col-6">
                <h3>Phim: {sanPhamChiTiet.ten}</h3>
                <img src={sanPhamChiTiet.hinhAnh} height={400} width={500} />
            </div>
            <div className="col-6">
                <h3>Thông tin chi tiết</h3>
                <table className="table text-left">
                    <tr>
                        <th>Tên phim</th>
                        <th>{sanPhamChiTiet.ten}</th>
                    </tr>
                    <tr>
                        <th>Năm phát hành</th>
                        <th>{sanPhamChiTiet.nam}</th>
                    </tr>
                    <tr>
                        <th>Quốc gia</th>
                        <th>{sanPhamChiTiet.quocGia}</th>
                    </tr> 
                    <tr>
                        <th>Loại phim</th>
                        <th>{sanPhamChiTiet.loai}</th>
                    </tr>
                    <tr>
                        <th>Nhân vật</th>
                        <th>{sanPhamChiTiet.nhanVat}</th>
                    </tr>
                </table>
            </div>
        </div>
      </div>
    );
  }
}
