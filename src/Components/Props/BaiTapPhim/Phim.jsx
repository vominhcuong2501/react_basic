import React, { Component } from "react";

export default class Phim extends Component {
  render() {
    const {sanPham, themGioPhim} = this.props;
    return (
        <div className="card my-5">
          <img className="card-img-top" src={sanPham.hinhAnh} width={150} height={400} />
          <div className="card-body text-left">
            <h4 className="card-title text-center">{sanPham.tenPhim}</h4>
            <p className="card-text ">{sanPham.moTa.length > 100 ? sanPham.moTa.substring(0,100) + "..." : sanPham.moTa}</p>
            <button className="btn btn-warning mr-3">
                <a href={sanPham.trailer}>Xem trailer</a>
            </button>
            <button className="btn btn-success" onClick={() => themGioPhim(sanPham)}>Add to list</button>
          </div>
        </div>
    );
  }
}
