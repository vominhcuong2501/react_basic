import React, { Component } from "react";
import { connect } from "react-redux";

class TableSV extends Component {

    renderSinhVien = () => {
        let {mangSinhVien} = this.props;
        return mangSinhVien.map((sinhVien, index) => {
            return (
                <tr key={index}> 
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.tenSV}</td>
                    <td>{sinhVien.soDienThoai}</td>
                    <td>{sinhVien.email}</td>
                </tr>
            )
        })
    }


  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="bg-dark text-light">
              <th>Mã SV</th>
              <th>Tên SV</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSinhVien()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps, null)(TableSV);
