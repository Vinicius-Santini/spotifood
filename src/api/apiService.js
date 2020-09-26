import axios from "axios";

const Service = async ({ data, method, params, url, headers }) => {
  return await axios({
    responseType: "json",
    method,
    url,
    headers,
    params,
    data,
  })
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      return { error: true, message: err };
    });
};

export default Service;
