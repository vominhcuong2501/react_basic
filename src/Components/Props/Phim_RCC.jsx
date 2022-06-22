import React, { Component } from 'react'
import data from './../../Data/Data.json'

export default class Phim_RCC extends Component {
    constructor(props) {
        super(props);
    }

    // Cách 1:
//   render() {
//     const {phim_input} = this.props;
//     return (
//         <div class="card mt-5">
//         <img className="card-img-top" src={phim_input.hinhAnh} height={200} width={300} alt />
//         <div class="card-body">
//           <h4 class="card-title">{phim_input.ten}</h4>
//           <p class="card-text">Thể loại: {phim_input.loai}</p>
//           <span class="card-text">Xem thêm: <a href="">{phim_input.moTa}</a></span>
//         </div>
//       </div>
//     )
//   }

// Cách 2:
    render() {
        const {hinhAnh, ten, loai, moTa} = this.props.phim_input;
        return (
            <div class="card mt-5">
            <img className="card-img-top" src={hinhAnh} height={200} width={300} alt />
            <div class="card-body">
            <h4 class="card-title">{ten}</h4>
            <p class="card-text">Thể loại: {loai}</p>
            <span class="card-text">Xem thêm: <a href="">{moTa}</a></span>
            </div>
        </div>
        )
    }
}
