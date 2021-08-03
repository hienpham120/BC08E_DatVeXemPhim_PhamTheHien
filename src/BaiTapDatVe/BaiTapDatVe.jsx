import React, { Component, Fragment } from "react";
import "../assets/css/BaiTapBookingTicket.css";
import { connect } from "react-redux";
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";
import danhSachGhe from "../assets/data/danhSachGhe.json";
class BaiTapDatVe extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid bookingMovie ">
        <div className="row">
          <div className="col-8 text-center">
            <h1 className=" booking__ticket--title text-capitalize">
              đặt vé xem phim
            </h1>
            <div
              className="text-light mt-3 text-capitalize"
              style={{ fontSize: 15 }}
            >
              màn hình
            </div>
            <div className="container__screen mt-2">
              <div className="screen "></div>
              {this.renderHangGhe()}
            </div>
          </div>
          <div className="col-4">
            <h3 className="listchair--title text-capitalize">
              danh sách ghế bạn chọn
            </h3>
            <ThongTinDatGhe />
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(BaiTapDatVe);
