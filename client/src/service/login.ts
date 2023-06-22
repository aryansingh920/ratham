import axios from "axios";

const loginAPI = async (userId: String, password: String) => {
  const response = await axios
    .post("/login/student", {
      universityId: userId,
      password: password,
    })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error;
    });
  return response.data;
};

export default loginAPI;
