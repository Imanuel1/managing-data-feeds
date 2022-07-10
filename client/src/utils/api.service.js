import axios from "axios";
import { SERVER_URL } from "./anvironment";

const api = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
});

export const getData = async (path) => {
  const res = await api.get(path);

  return res.data;
};

export const postData = async (path, data = {}) => {
  const res = await api.post(path, data);

  return res.data;
};

export const patchData = async (path, data = {}) => {
  const res = await api.patch(path, data);

  return res.data;
};