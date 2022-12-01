import { BaseServices } from "./BaseService";

class LocationManage extends BaseServices {
  getAllLocation = () => {
    return this.get(`v1/abstractions`);
  };
  createLocation = (model) => {
    return this.post(`v1/abstraction`, model);
  };
  updateLocation = (model) => {
    return this.put(`v1/abstraction`, model);
  };
  deleteLocation = (id) => {
    return this.delete(`v1/abstraction/${id}`);
  };
}
export const locationManage = new LocationManage();
