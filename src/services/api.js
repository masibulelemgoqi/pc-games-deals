import Axios from "axios";

export default class API {
  getRequest(endpoint, query = null) {
    let queryStr = "";
    if (query) {
      for (let key in query) {
        if (queryStr) queryStr += "&";
        queryStr += `${key}=${query[key]}`;
      }

      endpoint = `${endpoint}?${queryStr}`;
    }

    return new Promise(async (resolve, rejects) => {
      try {
        const response = await Axios.get(
          `https://www.cheapshark.com/api/1.0${endpoint}`
        );
        resolve(response.data);
      } catch (error) {
        rejects(error);
      }
    });
  }
}
