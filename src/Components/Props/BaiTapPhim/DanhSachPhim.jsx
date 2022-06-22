import React, { Component } from "react";
import Phim from "./Phim";

export default class DanhSachPhim extends Component {
  render() {
    let {mangPhim, themGioPhim} = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangPhim.map((sanPham, index) => {
            return (
                <div className="col-4" key={index}>
                    <Phim sanPham={sanPham} themGioPhim={themGioPhim}/>
                </div>
            )
          })}
        </div>
      </div>
    );
  }
}
