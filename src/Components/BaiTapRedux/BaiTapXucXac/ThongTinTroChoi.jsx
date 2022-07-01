import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          Bạn chọn: <span className="text-danger">{this.props.taiXiu ? 'TÀi' : 'Xỉu'}</span>
        </div>
        <div className="display-4">
          Bàn thắng: <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi: <span className="text-info">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    soBanThang: state.BTXucXacReducer.soBanThang,
    tongSoBanChoi: state.BTXucXacReducer.tongSoBanChoi,
    taiXiu: state.BTXucXacReducer.taiXiu
  }
}
export default connect(mapStateToProps, null)(ThongTinTroChoi)

