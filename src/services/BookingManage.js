import { BaseServices } from "./BaseService";

class BookingManage extends BaseServices {
  getAllBooking = () => {
    return this.get(`v1/bookings`);
  };
  checkInRoom = (model) => {
    return this.post(`v1/booking/checkIn`, model);
  };
  checkOutRoom = (model) => {
    return this.post(`v1/booking/checkOut`, model);
  };
  //   updateService = (model) => {
  //     return this.put(`v1/service`, model);
  //   };
  //   deleteService = (id) => {
  //     return this.delete(`v1/service/${id}`);
  //   };
  getDashBoard = (payload) => {
    return this.get(`v1/booking/dashboard?date=${payload}`);
  };
}
export const bookingManage = new BookingManage();
