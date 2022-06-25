import React, { Component } from "react";
import {connect} from "react-redux";

class SanPhamGiayRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
          <img
            className="card-img-top"
            src={sanPham.image}
            height={200}
            width={200}
          />
          <div className="card-body">
            <h4 className="card-title text-info">{sanPham.name}</h4>
            <p className="card-text">Price: {sanPham.price}$ </p>
            <button className="btn-danger" onClick={() => {this.props.themGioHang(sanPham)}}>ADD TO CART</button>
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // tạo props component => (là function => đưa props dữ liệu lên store)
    themGioHang: (sanPham) => {
      const spGioHang = {
        id: sanPham.id,
        name: sanPham.name,
        price: sanPham.price,
        quantity: 1,
        image: sanPham.image
      }
      const action = {
        type: 'THEM_GIO_HANG', // bắt buộc đặt type
        spGioHang // nội dung gửi lên reducer
      }
      // dùng hàm dispatch để đưa dữ liệu action len conponent
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps)(SanPhamGiayRedux)
