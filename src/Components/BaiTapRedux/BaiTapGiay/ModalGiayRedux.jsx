import React, { Component } from "react";
import { connect } from "react-redux";

class ModalGiayRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.id}</td>
          <td>
            <img src={spGH.image} height={100} width={70} />
          </td>
          <td>{spGH.name}</td>
          <td>{(spGH.price).toLocaleString()}</td>
          <td>
            <button onClick={() => this.props.tangGiamSL(index, false)}>
              -
            </button>
            {spGH.quantity}
            <button onClick={() => this.props.tangGiamSL(index, true)}>
              +
            </button>
          </td>
          <td>{(spGH.price * spGH.quantity).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGioHang(index)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    let tongSP = this.props.gioHang.reduce((tsl, spGH)=>{
      return tsl += spGH.quantity;
    }, 0);
    return (
      <div className="container">
        <div className="text-right">
          <button
            className="btn-danger"
            style={{ fontWeight: "bold", fontSize: 30, cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Cart ({tongSP})
          </button>
        </div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content text-center"
              style={{ maxWidth: 800, width: 800 }}
            >
              <div className="modal-header">
                <h5 className="modal-title">CART LIST</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>IMAGE</th>
                      <th>NAME</th>
                      <th>PRICE</th>
                      <th>QUANLITY</th>
                      <th>BILL</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Total:</td>
                      <td>
                        {this.props.gioHang.reduce(
                          (total, spGioHang) => {
                            return (total +=
                              spGioHang.price * spGioHang.quantity);
                          },
                          0
                        ).toLocaleString()}
                        $
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangGiayReducer.gioHang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },

    tangGiamSL: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalGiayRedux);
