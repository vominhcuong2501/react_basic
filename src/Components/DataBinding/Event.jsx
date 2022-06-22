import React, { Component } from 'react'

export default class Event extends Component {

    // Phương thức xử lý khi click
    handleShowMessage = (message) => {
        alert(message);
    }

  render() {
    let message = 'Chúc bạn thành công';

    return (
      <div className='container'>
        <h3>Sự kiện Click</h3>
        <button onClick={() => this.handleShowMessage(message)}>Show message</button>
      </div>
    )
  }
}
