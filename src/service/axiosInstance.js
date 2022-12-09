import axios from "axios";

const instance = axios.create({
  baseRegURL: process.env.REACT_APP_BASE_API_REGISTRATION_URL,
  baseDasURL: process.env.REACT_APP_BASE_API_DASHBOARD_URL,
});

export default instance;
