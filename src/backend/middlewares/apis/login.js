import { apiRequest } from "utils/request";

export default function loginAPIS(req, res) {
  return async (data) => {
    if (req.method === "POST") {
      console.log("req.api_urls", req.api_urls);
      const json = await apiRequest.post(`${req.api_urls.auth}/login`, data);

      req.session.token = json.token;
      req.session.user = json.user;
      req.session.refresh_token = json.refresh_token;

      await req.session.save();

      console.log("json ", json);

      console.log("login ");
      res.json(json);

      return json.user;
    }
    throw new Error("API_NOT_FOUND");
  };
}
