import axios from "axios";

export const getUsers = async () => {
  let data = axios
    .get("http://localhost:3001/users")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error.message);
    });
  return data;
};
