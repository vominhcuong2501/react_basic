import React, { Component } from "react";

export default class SinhVien extends Component {
  // thuộc tính hoTen và lop của class SinhVien
  hoTen = "Nguyen Van A";
  lop = "FrontEnd xxx";

  renderSinhVien = (tenTrungTam) => {
    return (
      <div>
        <h3>DataBinding</h3>
        <ul>
          <li>
            Họ tên: {this.hoTen}
          </li>
          <li>
            Lớp: {this.lop}
          </li>
          <li>
            Trung tâm: {tenTrungTam}
          </li>
        </ul>
      </div>
    );
  };

  // Phương thức render là phương thức của class SinhVien
  render() {
    // biến của hàm render
    const tenTrungTam = "Cybersoft";
    return (
      <div className="conatiner">
        {/* <ul>
            <li>Họ tên: {this.hoTen}</li>
            <li>Lớp: {this.lop}</li>
            <li>Trung tâm: {tenTrungTam}</li>

        </ul> */}
        {this.renderSinhVien(tenTrungTam)}
      </div>
    );
  }
}
