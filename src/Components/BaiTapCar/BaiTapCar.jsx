import React, { Component } from "react";

export default class BaiTapCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./imageCar/products/black-car.jpg",
    };
  }

  mangSanPham = [
      {id: 1, name: 'Black Car', price: '3000', img: './imageCar/products/black-car.jpg' },
      {id: 2, name: 'Red Car', price: '2500', img: './imageCar/products/red-car.jpg' },
      {id: 3, name: 'Silver Car', price: '3500', img: './imageCar/products/silver-car.jpg' },
      {id: 4, name: 'Steel Car', price: '2800', img: './imageCar/products/steel-car.jpg' }
  ];

  renderTable = () => {
    return this.mangSanPham.map((sanPham, index) => {
        return (
            <tr key={index}>
                <td>{sanPham.id}</td>
                <td>{sanPham.name}</td>
                <td>{sanPham.price}</td>
                <td><img src={sanPham.img} height={100} width={100} alt="" /></td>
            </tr>
        )
    })
  }

  // changeCar = (color) => {
  //   let imgSource = "";
  //   switch(color) {
  //       case 'dark': {
  //           imgSource = './imageCar/products/black-car.jpg';
  //       };
  //       break;
  //       case 'steel': {
  //           imgSource = './imageCar/products/steel-car.jpg';
  //       };
  //       break;
  //       case 'grey': {
  //           imgSource = './imageCar/products/silver-car.jpg';
  //       };
  //       break;
  //       case 'red': {
  //           imgSource = './imageCar/products/red-car.jpg';
  //       };
  //       break;
  //   }
  //   this.setState({
  //       img: imgSource,
  //   })
  // }

  changeCar = (color) => {
    this.setState({
      img: `./imageCar/products/${color}-car.jpg`
    })
    
  }

  render() {
    const styleButton = {
      color: "#fff",
      margin: '20px'
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3>Please choose your favorite about car's color</h3>
            <img src={this.state.img} width={300} height={300} />
          </div>
          <div className="col-md-5">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
          </div>
          <div className="col-md-12 mt-5">
            <h3>Change color</h3>
            <button
              onClick={() => this.changeCar("black")}
              className="btn btn-dark"
              style={styleButton}
            >
               Crystal Black
            </button>
            <button
              onClick={() => this.changeCar("steel")}
              className="btn btn-info "
              style={styleButton}
            >
              Modern Steel
            </button>
            <button
              onClick={() => this.changeCar("silver")}
              className="btn btn-secondary "
              style={styleButton}
            >
              Lunar Silver
            </button>
            <button
              onClick={() => this.changeCar("red")}
              className="btn btn-danger"
              style={styleButton}
            >
              Rallye Red
            </button>
          </div>
        </div>
      </div>
    );
  }
}
