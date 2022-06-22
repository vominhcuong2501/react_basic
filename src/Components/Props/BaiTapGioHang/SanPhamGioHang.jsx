import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const {sanPham, themGioHang} = this.props;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={sanPham.hinhAnh} width={300} height={400} />
          <div className="card-body bg-dark">
            <h4 className="card-title text-light">{sanPham.ten}</h4>
            <button onClick={() => themGioHang(sanPham)} className="btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
