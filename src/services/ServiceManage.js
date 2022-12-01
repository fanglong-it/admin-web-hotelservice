import { BaseServices } from "./BaseService";

class ServiceManage extends BaseServices {
  getAllHotelService = () => {
    return this.get(`v1/services`);
  };
  createHotelService = (model) => {
    return this.post(`v1/service`, model);
  };
  updateService = (model) => {
    return this.put(`v1/service`, model);
  };
  deleteService = (id) => {
    return this.delete(`v1/service/${id}`);
  };
}
export const serviceManage = new ServiceManage();
