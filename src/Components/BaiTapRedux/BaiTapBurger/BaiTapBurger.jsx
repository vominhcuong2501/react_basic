import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";

class BaiTapBurger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    let content = [];
    for (let propsBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propsBurger]; i++) {
        breadMid.push(<div className={propsBurger} key={i}></div>);
      }
      content.push(breadMid);
    }
    return content;

    // return Object.entries(burger).map(([propsBurger, value], index) => {
    //     let breadMid = [];
    //     for(let i = 0; i < value; i++) {
    //         breadMid.push(<div className={propsBurger} key={i}></div>);
    //     }
    //   return breadMid;
    // });
  };

  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button className="btn-danger" onClick={() => this.props.addBreadMid(propsMenu, -1)}>-</button>
            {burger[propsMenu]}
            <button className="btn-success" onClick={() => this.props.addBreadMid(propsMenu, 1)}>+</button>
          </td>
          <td>{price}</td>
          <td>{price * burger[propsMenu]}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="display-4 text-success">Bài tập Burger</div>
        <div className="row">
          <div className="col-7 text-center">
            <h3 className=" my-5">Bánh berger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="my-5">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                    <td colSpan={2}></td>
                    <td className="text-info" style={{fontWeight: 'bold'}}>Tổng cộng:</td>
                    <td>
                        {this.props.total}
                    </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.GioHangBurgerReducer.burger,
    menu: state.GioHangBurgerReducer.menu,
    total: state.GioHangBurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBreadMid: (propsBurger, amount) => {
            const action = {
                type: 'ADD_BREADMID',
                propsBurger,
                amount
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);
