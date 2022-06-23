import React, { Component } from 'react'
// kết nối redux (connect: hàm kết nối reactComponent - reduxStore)
import { connect } from 'react-redux'

class ModalGioHangRedux extends Component {

    renderGioHang = () => {
        // this.props.gioHang là thuộc tính nhận từ redux
        return this.props.gioHang.map((spGH, index)=> {
            return (
                <tr className='text-center' key={index}>
                    <td>{spGH.maSP}</td>
                    <td>
                        <img src={spGH.hinhAnh} height={100} width={70} />
                    </td>
                    <td>{spGH.ten}</td>
                    <td>{spGH.gia}</td>
                    <td>
                        <button onClick={() => this.props.tangGiamSL(index, false)}> - </button>
                        {spGH.soLuong}
                        <button onClick={() => this.props.tangGiamSL(index, true)}> + </button>
                    </td>
                    <td>{spGH.gia * spGH.soLuong}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => this.props.xoaGioHangIndex(index)}>Xóa index</button>
                        <button className='btn btn-primary' onClick={() => this.props.xoaGioHangMaSP(spGH.maSP)}>Xóa mã sp</button>
                    </td>
                </tr>
            )
        })
    }
  render() {
    return (
      <div className='container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Mã SP</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderGioHang()}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}></td>
                    <td>Tổng tiền</td>
                    <td>
                        {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                            return tongTien += spGioHang.soLuong * spGioHang.gia;
                        }, 0)}
                    </td>
                </tr>
            </tfoot>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => { // state laf store tổng => truy xuất đến GioHangReducer => biến state trên GioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang // tạo ra 1 props của component ModalGioHangRedux
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA_GIO_HANG_INDEX',
                index
            }
            // đưa action len reducer
            dispatch(action);
        },

        xoaGioHangMaSP: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG_MASP',
                maSP
            }
            dispatch(action);
        },

        tangGiamSL: (index, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                index,
                tangGiam
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
