import React, { Component } from 'react'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'
import ModalGiaHang from './ModalGiaHang'
import dataGioHang from './../../../Data/DataGiaHang.json'

export default class BaiTapGioHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gioHang: []
        }
    }

    themGioHang = (sanPhamChon) => {
        // b1: từ sp được chọn tạo ra sp giỏ hàng
        let spGioHang = {
            ten: sanPhamChon.ten,
            hinhAnh: sanPhamChon.hinhAnh,
            loai: sanPhamChon.loai,
            id: sanPhamChon.id,
            quocGia: sanPhamChon.quocGia,
            gia: sanPhamChon.gia,
            soLuong: 1
           
        }
         // kiểm tra sanPhamChon có trong giỏ hàng chưa
         var gioHangCapNhat = [...this.state.gioHang];
         let index = gioHangCapNhat.findIndex(sp => sp.id === spGioHang.id);
         if(index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
         } else {
            gioHangCapNhat.push(spGioHang);
         }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    // đặt sự kiện xóa giỏ hàng tại BaiTapGioHang
    xoaGioHang = (id) => {
        // tìm trong gioHang có sp chứa id được click thì xóa đi
        // var gioHangCapNhat = [...this.state.gioHang];
        // let index = gioHangCapNhat.findIndex(sp => sp.id === id); 
        // if(index !== -1) {
        //     gioHangCapNhat.splice(index,1)
        // }
        var gioHangCapNhat = this.state.gioHang.filter(sp => sp.id !== id);
        // cập nhật giỏ hàng và render lại giao diện
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (id, tangGiam) => {
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.id === id);
        // tangGiam === true: tăng SL, false: giảm SL
        // xử lý tăng giảm
        if(tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else if( gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
        } 
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
        return tsl += spGH.soLuong;
    },0)
    return (
      <div className='container'>
        <h3 className='text-center text-success'>Bài tập giỏ hàng</h3>
        <ModalGiaHang 
            xoaGioHang = {this.xoaGioHang} 
            gioHang = {this.state.gioHang}
            tangGiamSoLuong = {this.tangGiamSoLuong}/>
        <div className='text-right'>
            <span data-toggle="modal" data-target="#modelId" className='text-danger' style={{cursor: 'pointer', fontSize: '17px', fontWeight: 'bold'}}>Giỏ hàng({tongSoLuong})</span>
        </div>
        <DanhSachSanPhamGioHang themGioHang = {this.themGioHang} mangSanPham = {dataGioHang}/>
      </div>
    )
  }
}
