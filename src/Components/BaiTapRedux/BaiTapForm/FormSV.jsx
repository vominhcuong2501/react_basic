import React, { Component } from "react";
import { connect } from "react-redux";

class FormSV extends Component {
  state = {
    values: {
      maSV: "",
      tenSV: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSV: "",
      tenSV: "",
      email: "",
      soDienThoai: "",
    },
    valid: false,
  };

  handleChange = (e) => {
    // lấy giá trị mỗi lần value input thay đổi bởi người dùng
    let tagInput = e.target;
    let { value, name, type, pattern } = tagInput;
    console.log(name, value);
    let errorMessage = "";

    // kiểm tra rỗng
    if (value.trim() === "") {
      errorMessage = "(*) "+ name +" không được bỏ trống!"; //kiểm tra bất kỳ control input nào người dùng nhập đều kt trống
    }

    // kiểm tra email
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = "(*) Dữ liệu nhập không đúng định dạng!"; //kiểm tra bất kỳ control input nào người dùng nhập đều kt trống
      }
    }

    // kiểm tra pphone
    if (type === "number") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = "(*) Dữ liệu nhập không đúng định dạng!"; //kiểm tra bất kỳ control input nào người dùng nhập đều kt trống
      }
    }

    let values = { ...this.state.values, [name]: value }; // cập nhật lại giá trị values cho state
    let errors = { ...this.state.errors, [name]: errorMessage }; // kiểm tra lỗi cho state

    this.setState(
      {
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        this.checkValid();
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); // cản sự kiện submit reload trang của browser
    this.props.themSinhVien(this.state.values);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }
    this.setState({
      ...this.state,
      valid: valid,
    });
  };

  render() {
    return (
      <div className="container p-0 my-5">
        <div className="card text-left">
          <div className="card-header bg-dark text-light">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Tên SV</span>
                  <input
                    className="form-control"
                    name="tenSV"
                    value={this.state.values.tenSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.tenSV}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    type="text"
                    pattern="^[0-9]+$"
                    name="soDienThoai"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="row">
                <div className="text-right col-md-12">
                  {this.state.valid ? (
                    <button type="submit" className="btn btn-success">
                      Thêm sinh viên
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-success" disabled>
                      Thêm sinh viên
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSV);
