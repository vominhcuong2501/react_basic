import React, { Component } from 'react';
import data from './../../Data/Data.json'
export default class BaiTapVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim : data
        }
    }

    renderMangPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div key={index} className='col-4 mt-5'>
                    <div class="card">
                        <img className="card-img-top p-3" src= {phim.hinhAnh} height={200} width={200} alt />
                        <div class="card-body">
                            <h4 class="card-title">{phim.ten}</h4>
                            <p class="card-text">Thể loại: {phim.loai}</p>
                            <span class="card-text">Xem thêm: <a href=""> {phim.moTa.length > 100 ? phim.moTa.substring(0,100)+ "..." : phim.moTa}</a></span>
                        </div>
                    </div>
                </div>
            )
        })
    }

  render() {
    return (
      <div className='container'>
        <div className='row'>
            {this.renderMangPhim()}
        </div>
      </div>
    )
  }
}
