import { apiRequest } from "utils/request";

export default function check_otpAPIs(req, res) {
  return async (data) => {
    if (req.method === "POST") {
      await apiRequest.post(`${req.api_urls.auth}/check_otp`, data);
      return {};
    }
    throw new Error("API_NOT_FOUND");
  };
}
