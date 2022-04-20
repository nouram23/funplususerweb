import { apiRequest } from "utils/request";


export default function all_service_types(req, res) {
  return async () => {
    if (req.method === "GET") {
      console.log("req.api_urls", req.api_urls)
      const json = await apiRequest.get(`${req.api_urls.public}/service_types`, data);

      return json;
    }
    throw new Error("API_NOT_FOUND");
  };
}
