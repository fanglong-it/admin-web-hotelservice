import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/constants/settingSystem";

export class BaseServices {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      // headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      // headers: {
      //   Authorization:
      //     "Bearer " +
      //     "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV0sImlhdCI6MTY2ODg4MTQxMSwiZXhwIjoxNjY4ODg1MDExfQ.JARCyXBeEGH8Fm98i2hsbJ6TT3PZxo9ODzopqlSm30M",
      // },
    });
  };

  delete = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      data: model,
      // headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  get = (url,model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      // headers: {
      //   Authorization:
      //     "Bearer " +
      //     "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjY1MjA1NzkwLCJleHAiOjE2NjUyMDkzOTB9.o26YuXLrdALALR-ieXyZ6y6gmDE5FBsFg5UXQ6LDvY4"
      // },
    });
  };
  getAuthor = (url, model) => {
    console.log("Token",localStorage.getItem(TOKEN))
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
}
