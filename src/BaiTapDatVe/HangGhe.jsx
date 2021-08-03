import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BaiTapDatVeAction";
class HangGhe extends Component {
  renderGhe = () => {
    let { hangGhe } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      //Trạng thái: ghế đã được người khác đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      //Xét trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button disabled className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <Fragment>
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </Fragment>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-3 mt-3">
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
