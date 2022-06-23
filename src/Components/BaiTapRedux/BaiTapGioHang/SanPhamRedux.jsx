import React, { Component } from "react";

// kết nối với reducerGioHang
import {connect} from 'react-redux';

class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src={sanPham.hinhAnh} height={250}/>
        <div className="card-body">
          <h4 className="card-title">{sanPham.ten}</h4>
          <p className="card-text">Price: {sanPham.gia}</p>
          <button className="btn btn-danger" onClick={() => {this.props.themGioHang(sanPham)}}>Add to cart</button>
        </div>
      </div>
    );
  }
}

// xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    // tạo props component => (là function => đưa props dữ liệu lên store)
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        ten: sanPham.ten,
        hinhAnh: sanPham.hinhAnh,
        gia: sanPham.gia,
        soLuong: 1
      }
      const action = {
        type: 'THEM_GIO_HANG', // bắt buộc đặt type
        spGioHang: spGioHang, // nội dung gửi lên reducer
      }
      // dùng hàm dispatch để đưa dữ liệu action len conponent
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps)(SanPhamRedux)
