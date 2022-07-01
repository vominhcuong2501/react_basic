import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {

  renderMangXucXac = () => {
    // lấy props từ reducer về
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img className='ml-2' src={xucXac.hinhAnh} key={index} alt={xucXac.hinhAnh} width={50} height={50} />
      )
    })
  }


  render() {
    return (
      <div>
        {this.renderMangXucXac()}
      </div>
    )
  }
}

// Hàm lấy state từ redux thành drops của component
const mapStateToProps = state => {
  return {
    mangXucXac: state.BTXucXacReducer.mangXucXac
  }
}
export default connect(mapStateToProps, null)(XucXac)