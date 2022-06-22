import React, { Component } from 'react'
import DanhSachPhim from './DanhSachPhim'
import ModalPhim from './ModalPhim'
import dataPhim from './../../../Data/DataFilms.json'

export default class BaiTapPhim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gioPhim: []
        }
    }

    themGioPhim = (phimChon) => {
        let phimGioHang = {
            maPhim: phimChon.maPhim,
            tenPhim: phimChon.tenPhim,
            hinhAnh: phimChon.hinhAnh,
            soLuong: 1,
            gia: phimChon.gia,
        }
        var gioPhimCapNhat = [...this.state.gioPhim];
        let index = gioPhimCapNhat.findIndex(phim => phim.maPhim === phimGioHang.maPhim);
        if(index !== -1) {
            gioPhimCapNhat[index].soLuong += 1;
        } else {
            gioPhimCapNhat.push(phimGioHang);
        }
        this.setState({
            gioPhim: gioPhimCapNhat
        })
    }

    xoaPhim = (maPhim) => {
        var gioPhimCapNhat = this.state.gioPhim.filter(phim => phim.maPhim !== maPhim);
        this.setState({
            gioPhim: gioPhimCapNhat
        })
    }

    tangGiamSL = (maPhim, tangGiam) => {
        var gioPhimCapNhat = [...this.state.gioPhim];
        let index = gioPhimCapNhat.findIndex(phim => phim.maPhim === maPhim);
        if(tangGiam) {
            gioPhimCapNhat[index].soLuong += 1;
        } else if(gioPhimCapNhat[index].soLuong > 1) {
            gioPhimCapNhat[index].soLuong -= 1;
        }
        this.setState({
            gioPhim: gioPhimCapNhat
        })
    }

  render() {
    let tongSoPhim = this.state.gioPhim.reduce((tsl, spGP, index) => {
        return tsl += spGP.soLuong
    }, 0)
    return (
      <div className='container'>
        <h2 className='text-primary'>BÀI TẬP PHIM</h2>
        <ModalPhim gioPhim={this.state.gioPhim} xoaPhim={this.xoaPhim} tangGiamSL={this.tangGiamSL}/>
        <div className='text-right'>
            <span data-toggle="modal" data-target="#modelId" className='text-danger' style={{cursor: 'pointer', fontSize: '17px', fontWeight: 'bold'}}>Giỏ hàng({tongSoPhim})</span>
        </div>
        <DanhSachPhim mangPhim ={dataPhim} themGioPhim={this.themGioPhim}/>
      </div>
    )
  }
}
