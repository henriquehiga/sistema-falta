import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
});

export const useApi = () => {
  const post = async (path: string, input: any) => {
    try {
      const output = await api.post(path, input);
      return output;
    } catch (err) {
      console.error(err);
    }
  };

  const get = async (path: string) => {
    try {
      const output = await api.get(path);
      return output;
    } catch (err) {
      console.error(err);
    }
  };

  return { post, get };
};
