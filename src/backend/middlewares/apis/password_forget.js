import { apiRequest } from "utils/request";

export default function password_forgetAPI(req, res) {
  return async (data) => {
    if (req.method === "POST") {
      const json = await apiRequest.post(
        `${req.api_urls.auth}/password_forget`,
        data
      );
      return {};
    }
    throw new Error("API_NOT_FOUND");
  };
}
