import React, { Component } from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import ModalGioHangRedux from './ModalGioHangRedux'

export default class BTGioHangRedux extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center text-danger'>Bài Tập Giỏ Hàng Redux</h3>
        <ModalGioHangRedux />
        <DanhSachSanPhamRedux />
      </div>
    )
  }
}
