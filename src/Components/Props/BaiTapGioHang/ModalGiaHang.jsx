import React, { Component } from "react";

export default class ModalGiaHang extends Component {

 
  render() {
    const {gioHang, xoaGioHang, tangGiamSoLuong} = this.props;
// lấy dữ liệu giỏ hàng từ BaiTapGioHang
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{maxWidth: '800px', width: '800px'}}>
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
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
                <div className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Hình ảnh</th>
                            <th>Tên SP</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {gioHang.map((spGH, index) => {
                            return (
                                <tr key={index} >
                                    <td>{spGH.id}</td>
                                    <td>
                                        <img src={spGH.hinhAnh} height={70} width={100} />
                                    </td>
                                    <td>{spGH.ten}</td>
                                    <td>
                                        <button style={{border: 'none'}} onClick={()=> tangGiamSoLuong(spGH.id, false)}> - </button>    
                                        {spGH.soLuong}
                                        <button style={{border: 'none'}} onClick={()=> tangGiamSoLuong(spGH.id, true)}> + </button>
                                    </td>
                                    <td>{spGH.gia}$</td>
                                    <td>{spGH.gia * spGH.soLuong}$</td>
                                    <td>
                                        <button className="btn btn-danger mr-1" onClick={() => xoaGioHang(spGH.id)}>Xóa</button>
                                        <button className="btn btn-info">Sửa</button>
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
                                {this.props.gioHang.reduce((tongTien, spGioHang, index)=> {
                                    return tongTien += spGioHang.soLuong * spGioHang.gia; 
                                },0)}
                            </td>
                        </tr>
                    </tfoot>
                </div>
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
    );
  }
}
