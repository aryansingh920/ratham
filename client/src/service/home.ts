import axios from "axios";

const homeAPI = async () => {
  const response = await axios
    .get(`/`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

export default homeAPI;
