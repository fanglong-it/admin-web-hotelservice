import { BaseServices } from "./BaseService";

class SendMessageService extends BaseServices {
  sendMessage = (model) => {
    return this.post(`v1/message`, model);
  };
}
export const sendMessageService = new SendMessageService();
