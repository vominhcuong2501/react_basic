import React, { Component } from "react";

export default class SanPham extends Component {

  render() {
    let { sp, xemChiTiet } = this.props;
    return (
      <div className="card col-4">
        <img
          className="card-img-top"
          src={sp.hinhAnh}
          height={200}
          width={200}
        />
        <div className="card-body">
          <h4 className="card-title">{sp.ten}</h4>
          <p className="card-text">{sp.loai}</p>
          <button
            onClick={() => xemChiTiet(sp)}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
