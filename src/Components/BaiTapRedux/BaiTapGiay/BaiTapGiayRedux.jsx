import React, { Component } from "react";
import DanhSachGiayRedux from "./DanhSachGiayRedux";
import ModalGiayRedux from "./ModalGiayRedux";

export default class BaiTapGiay extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-danger">Bài Tập Giày</h3>
        <ModalGiayRedux />
        <DanhSachGiayRedux />
      </div>
    );
  }
}
