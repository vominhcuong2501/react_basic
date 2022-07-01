import React, { Component } from "react";
import "./BaiTapXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import {connect} from "react-redux";

class BaiTapXucXac extends Component {
  render() {
    return (
      <div>
        <div className="game">
          <div className="title-game text-center mt-5 display-4">
            Game xúc xắc
          </div>
          <div className="row text-center mt-5">
            <div className="col-4">
              <button className="btnGame" onClick={() => this.props.datCuoc(true)}>TÀI</button>
            </div>
            <div className="col-4">
              <XucXac />
            </div>
            <div className="col-4">
              <button className="btnGame"  onClick={() => this.props.datCuoc(false)}>XỈU</button>
            </div>
          </div>
          <div className="thongTinTroChoi">
            <ThongTinTroChoi />
          </div>
          <button type="button" className="btn btn-warning display-4 mt-5" onClick={()=> this.props.playGame()}>
            PLAY GAME
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    datCuoc: (taiXiu) => {
      // tạo action taiXiu 
      let action = {
        type: 'DAT_CUOC',
        taiXiu
      }
      // gửi lên reducer
      dispatch(action)
    },

    playGame: () => {
      // gửi dữ liệu type PLAY_GAME lên reducer
      dispatch({
        type: 'PLAY_GAME',
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(BaiTapXucXac)