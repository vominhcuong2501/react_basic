import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachSanPhamGioHang extends Component {
  render() {
    let {mangSanPham, themGioHang} = this.props;
    return (
      <div className='container'>
        <div className='row'>
        {mangSanPham.map((sanPham, index)=> {
            return (
                <div key={index} className='col-4'>
                    <SanPhamGioHang themGioHang = {themGioHang} sanPham = {sanPham}/>
                </div>
            )
        })}
        </div>
      </div>
    )
  }
}
