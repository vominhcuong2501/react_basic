import React, { Component } from 'react'

export default class BaiTapState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: './image/donghobac.jpg'
        }
    }

    changeColor = (color) => {
        let imgSource = '';
        switch(color){
            case 'yellow': {
                imgSource = './image/donghovang.jpg';
            };
            break;
            case 'grey': {
                imgSource = './image/donghobac.jpg';
            };
            break;
            case 'white': {
                imgSource = './image/donghotrang.jpg';
            };
            break;
        }
        // gọi phương thức setState để truyền imgSource mới từ sự kiện click của button => render lại giao diện với imgSource mới
        this.setState({
            img : imgSource,
        })
    }

    render() {
        const styleButton = {
            color: '#fff'
    }
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h3>Please choose yo"ur favorite about watch's color</h3>
                <img src={this.state.img} width={300} height={300} />
            </div>
            <div className="col-md-5">
                <h3>Change color</h3>
                <button onClick={() => this.changeColor('yellow')} className="btn btn-warning" style={styleButton}>Yellow color</button>
                <button onClick={() => this.changeColor('grey')} className="btn btn-secondary mx-5" style={styleButton}>Grey color</button>
                <button onClick={() => this.changeColor('white')} className="btn btn-dark" style={styleButton}>White color</button>
            </div>
        </div>
      </div>
    )
  }
}
