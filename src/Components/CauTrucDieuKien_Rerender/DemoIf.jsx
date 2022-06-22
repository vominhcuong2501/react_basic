import React, { Component } from 'react'

export default class DemoIf extends Component {
    constructor(props) {
        super(props);
        // this.state là thuộc tính có sẵn của component, chứa các thuộc tính có khả năng thay đổi bởi 1 sự kiện nào đó của Component
        this.state = {
            isLogin : false,
            userName : '',
        }
    }


    // thuộc tính
    // isLogin = true;
    // userName = '';

    // Cách 1: dùng phương thức kết hợp If để xác định nội dung render ra giao diện
    // renderContent = () => {
    //     if(this.isLogin) { // isLogin === true => người dùng đã đăng nhập
    //         this.userName = 'Cường';
    //         return (
    //             <div>
    //                 Hello {this.userName} <button>Logout</button>
    //             </div>
    //         )
    //     }
    //     return (
    //         <div>
    //             Vui lòng đăng nhập <button>Login</button>
    //         </div>
    //     )
    // }

    // Phương thức render của component DemoIf
  
    login = () => {
        // this.setState(): là phương thức kế thừa từ class component => thay dổi giá trị state và gọi lại hàm render => render lại giao diện
        // setState là phương thức bất đồng bộ
        this.setState({
            isLogin : true,
            userName : 'Cường',
        }, () => {
            console.log(this.state);
        })
    }

    logout = () => {
        this.setState({
            isLogin : false,
            userName : '',
        })
    }
  
  
    render() {
    return (
      <div>
        <h3>Cấu trúc điều kiện IF - ELSE</h3>
        {/* {this.renderContent()} */}
        {this.state.isLogin ? <div>Hello {this.state.userName} <button onClick={this.logout}>Logout</button></div> : <div>Vui lòng đăng nhập <button onClick={this.login}>Login</button></div>}
      </div>
    )
  }
}
