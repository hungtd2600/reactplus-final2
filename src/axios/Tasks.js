import axios from "axios";
import instance from "../service/axiosInstance.js";

const baseDasURL = instance.defaults.baseDasURL;

export const getTasks = async () => {
  try {
    const response = await axios.get(baseDasURL);
    return response.data;
  } catch (error) {
    alert.error(error);
  }
};
