import React, { Component } from "react";

export default class ModalPhim extends Component {
  render() {
    let {gioPhim, xoaPhim, tangGiamSL} = this.props;
    return (
      <div className="container">
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{maxWidth:800, width:800}}>
              <div className="modal-header">
                <h5 className="modal-title">LIST FILM</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã phim</th>
                            <th>Hình ảnh</th>
                            <th>Tên phim</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gioPhim.map((spGP, index) => {
                            return (
                                <tr key={index}>
                                    <td>{spGP.maPhim}</td>
                                    <td>
                                        <img src={spGP.hinhAnh} width={70} height={70} />
                                    </td>
                                    <td>{spGP.tenPhim}</td>
                                    <td>          
                                        <button style={{border: 'none'}} onClick={()=> tangGiamSL(spGP.maPhim, false)}> - </button>    
                                        {spGP.soLuong} 
                                        <button style={{border: 'none'}} onClick={()=> tangGiamSL(spGP.maPhim, true)}> + </button>
                                    </td>
                                    <td>{(spGP.gia)} VNĐ</td>
                                    <td>{(spGP.soLuong * spGP.gia)} VNĐ</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => xoaPhim(spGP.maPhim)}>Xóa</button>    
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}></td>
                            <td>Tổng tiền</td>
                            <td>
                                {this.props.gioPhim.reduce((tongTien, phimGioHang, index)=> {
                                    return tongTien += phimGioHang.soLuong * phimGioHang.gia; 
                                },0)} VNĐ
                            </td>
                        </tr>
                    </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
