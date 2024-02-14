import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "759f00ee2279400d9882aeba56bf7a6a",
  },
});

export { CanceledError };
