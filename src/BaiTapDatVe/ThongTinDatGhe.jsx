import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BaiTapDatVeAction";
class ThongTinDatGhe extends Component {
  render() {
    // console.log(this.props.danhSachGheDangDat);
    return (
      <div>
        <div className="listchair mt-5">
          <button className="gheDuocChon mb-2" disabled></button>
          <span className="text-light ml-2" style={{ fontSize: 20 }}>
            Ghế đã đặt
          </span>
          <br />

          <button className="gheDangChon mb-2"></button>
          <span className="text-light ml-2" style={{ fontSize: 20 }}>
            Ghế đang đặt
          </span>
          <br />

          <button className="gheChuaChon"></button>
          <span className="text-light ml-2" style={{ fontSize: 20 }}>
            Ghế chưa đặt
          </span>
        </div>

        {/* Table */}
        <div>
          <table
            className="table mt-5 text-light text-center tblThongTinDatVe"
            border="2"
          >
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index} className="text-light">
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        fontSize: 25,
                        textAlign: "center",
                        color: "red",
                      }}
                      onClick={() => {
                        this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                      }}
                    >
                      <i class="far fa-times-circle"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              Tổng tiền:
              <span className="ml-3">
                {this.props.danhSachGheDangDat
                  .reduce((tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0)
                  .toLocaleString()}
              </span>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};
// const mapDispatchToProps = () => {};

export default connect(mapSateToProps)(ThongTinDatGhe);
