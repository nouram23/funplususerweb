import { apiRequest } from "utils/request";

export default function signupAPIs(req, res) {
  return async (data) => {
    if (req.method === "POST") {
      const json = await apiRequest.post(`${req.api_urls.auth}/signup`, data);
      return json.user;
    }
    throw new Error("API_NOT_FOUND");
  };
}
