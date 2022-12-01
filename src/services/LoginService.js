import { BaseServices } from "./BaseService";

class LoginService extends BaseServices {
  login = (model) => {
    return this.post(`v1/login`, model);
  };
  getUserInfo = () => {
    return this.getAuthor(`v1/me`);
  };
}
export const loginService = new LoginService();
