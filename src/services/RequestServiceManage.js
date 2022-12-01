import { BaseServices } from "./BaseService";

class RequestServiceManage extends BaseServices {
  getAllRequestService = () => {
    return this.get(`v1/orderFoodAndBeverage`);
  };
  getRequestServiceById = (id) => {
    return this.get(`v1/order/${id}`);
  };
  confirmRequestService = (model) => {
    return this.post(`v1/confirmOrderService`, model);
  };
  cancelRequestService = (model) => {
    return this.delete(`v1/deleteOrderDetailService`, model);
  };
  getAllTurnDownService = () => {
    return this.get(`v1/requestrequestServiceServices`);
  };
  confirmTurnDownService = (model) => {
    return this.put(`v1/requestService`, model);
  };
}
export const requestServiceManage = new RequestServiceManage();
