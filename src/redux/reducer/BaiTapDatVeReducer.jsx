import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeTypes";

const stateDefault = {
  danhSachGheDangDat: [],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE:
      {
        let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(
          (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
        );
        if (index !== -1) {
          //Nếu ghế đang đặt đã có trong mảng  thì sẽ xoá đi
          danhSachGheDangDatUpdate.splice(index, 1);
        } else {
          //Nếu ghế đang đặt đã có trong mảng  thì sẽ thêm vào
          danhSachGheDangDatUpdate.push(action.ghe);
        }
        //Cập nhật lại state để giao diện render lại
        state.danhSachGheDangDat = danhSachGheDangDatUpdate;
        return { ...state };
      }
      break;
    case HUY_GHE:
      {
        let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(
          (gheDangDat) => gheDangDat.soGhe === action.soGhe
        );
        if (index !== -1) {
          //Nếu ghế đang đặt đã có trong mảng  thì sẽ xoá đi
          danhSachGheDangDatUpdate.splice(index, 1);
        }
        state.danhSachGheDangDat = danhSachGheDangDatUpdate;
        return { ...state };
      }
      break;

    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
