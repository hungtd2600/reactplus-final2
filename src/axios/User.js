import axios from "axios";
import instance from "../service/axiosInstance.js";

const baseRegURL = instance.defaults.baseRegURL;
// SIGN UP
export const signUp = async (newUser) => {
  try {
    const sign = await axios.post(baseRegURL, newUser);
    return sign.data;
  } catch (error) {
    alert.error(error);
  }
};
// GET USERS

export const getUsers = async () => {
  try {
    const response = await axios.get(baseRegURL);
    return response.data;
  } catch (error) {
    alert.error(error);
  }
};
