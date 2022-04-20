import { apiRequest } from "utils/request";


export default function all_service_types(req, res) {
  return async () => {
    if (req.method === "POST") {
      console.log("req.api_urls", req.api_urls)
      const json = await apiRequest.post(`${req.api_urls.public}/feedback`, data);
.
      return {};
    }
    throw new Error("API_NOT_FOUND");
  };
}
