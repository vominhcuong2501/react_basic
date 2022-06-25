import React, { Component } from 'react'
import SanPhamGiayRedux from './SanPhamGiayRedux';
import dataGiay from "../../../Data/DataGiay.json";

export default class DanhSachGiay extends Component {


  renderSanPham = () => {
    return dataGiay.map((sanPham, index) => {
      return (
        <div className='col-4 my-3' key={index}>
          <SanPhamGiayRedux  sanPham={sanPham}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='row'>
        {this.renderSanPham()}
      </div>
    )
  }
}
