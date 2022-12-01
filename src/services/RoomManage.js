import { BaseServices } from "./BaseService";

class RoomManage extends BaseServices {
  getAllRoom = () => {
    return this.post(`v1/room/getRoomByBookingToday`);
  };
  getRoomAvailability = (model) => {
    return this.post(`v1/room/checkAvaiblebilityAndType`,model);
  };
}
export const roomManage = new RoomManage();
