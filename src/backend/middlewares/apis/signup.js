import { apiRequest } from "utils/request";

export default function signupAPIs(req, res) {
  return async (data) => {
    if (req.method === "POST") {
      console.log(req.body)
      await apiRequest.post(`${req.api_urls.auth}/signup`, req.body);
      return {};
    }
    throw new Error("API_NOT_FOUND");
  };
}
