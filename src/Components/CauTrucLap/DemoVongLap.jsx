import React, { Component } from 'react'

export default class DemoVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                {maSP:1, tenSP: 'Iphone', gia: 3000},
                {maSP:2, tenSP: 'Samsung', gia: 2500},
                {maSP:3, tenSP: 'Huawei', gia: 2000}
            ]
        }
    }

    // Viết phương thức render các sản phẩm thành các tag tr
    renderSanPham = () => {
        // Cách 2: sử dụng MAP để tạo động các tag jsx từ mảng
        return this.state.mangSanPham.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.gia}$</td>
                </tr>
            )
        })


        // Cách 1: Sử dụng FOR như bình thường
        // let contentTable = [];
        // for( let i = 0; i < this.state.mangSanPham.length; i++) {
        //     const sanPham = this.state.mangSanPham[i];
        //     contentTable.push(
        //         <tr key={i}>
        //             <td>{sanPham.maSP}</td>
        //             <td>{sanPham.tenSP}</td>
        //             <td>{sanPham.gia}$</td>
        //         </tr>
        //     )
        // }
        // return contentTable;
    } 

    render() {
        // Cách 4: sử dụng như biến
        // const renderSanPham = () => {
        //     return this.state.mangSanPham.map((sanPham, index) => {
        //         return (
        //             <tr key={index}>
        //                 <td>{sanPham.maSP}</td>
        //                 <td>{sanPham.tenSP}</td>
        //                 <td>{sanPham.gia}$</td>
        //             </tr>
        //         )
        //     })
        // } 

        return (
        <div className='container'>
            <h3 className='bg-dark p-5 text-center text-white'>Demo vòng lặp</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderSanPham()}

                    
                    {/* {renderSanPham()} */}

                    {/* Cách 3: Viết trực tiếp 
                        {this.state.mangSanPham.map((sanPham, index) => {
                            return (
                                <tr key={index}>
                                    <td>{sanPham.maSP}</td>
                                    <td>{sanPham.tenSP}</td>
                                    <td>{sanPham.gia}$</td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </table>
        </div>
        )
    }
}
